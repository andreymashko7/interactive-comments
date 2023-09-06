import styled from "styled-components";
import { useState } from "react";

import { ReactComponent as IconD } from "../images/icon-delete.svg";
import { ReactComponent as IconE } from "../images/icon-edit.svg";
import { ModalContent } from "./ModalContent";
import { Modal } from "./Modal";
import { ReplyPost } from "./ReplyPost";

const StyledDeleteIcon = styled(IconD)``;
const StyledEditIcon = styled(IconE)``;

const StyledWrapper = styled.div`
	display: flex;
	color: var(--colors-primary-Moderate);
`;

export const StyledTextSpan = styled.span`
	color: ${({ $color }) =>
		$color ? "var(--colors-primary-Soft)" : "var(--colors-primary-Moderate)"};
	margin-right: ${({ $right }) => ($right ? "15px" : "0px")};
	font-weight: var(--fw-normal);
	cursor: pointer;
`;

export const DeleteOrEdit = (props) => {
	const { onDelete, setEdit, ensertComment, post } = props;
	const {
		id,
		user: { currentUser }
	} = post;
	const [modalActive, setModalActive] = useState(false);

	return (
		<>
			<StyledWrapper>
				{currentUser ? (
					<>
						<StyledDeleteIcon />
						<StyledTextSpan
							$color
							$right
							onClick={() => {
								setModalActive(true);
							}}
						>
							Delete
						</StyledTextSpan>

						<StyledEditIcon />
						<StyledTextSpan
							onClick={() => {
								setEdit(true);
							}}
						>
							Edit
						</StyledTextSpan>
					</>
				) : (
					<ReplyPost
						id={id}
						// setReply={setReply}
						ensertComment={ensertComment}
					/>
				)}
			</StyledWrapper>

			{modalActive && (
				<Modal
					active={modalActive}
					setModal={setModalActive}
				>
					<ModalContent
						setModal={setModalActive}
						onDelete={onDelete}
						id={id}
					/>
				</Modal>
			)}
		</>
	);
};
