import { useState } from "react";
import styled from "styled-components";

import { ReactComponent as IconDelete } from "../images/icon-delete.svg";
import { ReactComponent as IconEdit } from "../images/icon-edit.svg";

import { Modal } from "./Modal";
import { ReplyPost } from "./ReplyPost";
import { ModalContent } from "./ModalContent";

const StyledWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	color: var(--colors-primary-Moderate);
`;

export const StyledTextSpan = styled.span`
	margin-right: ${({ $right }) => ($right ? "15px" : "0px")};
	font-weight: var(--fw-normal);
	font-size: var(--fs-sd);
	color: ${({ $color }) =>
		$color ? "var(--colors-primary-Soft)" : "var(--colors-primary-Moderate)"};
	text-decoration: underline 0.15em rgba(255, 255, 255, 0);
	transition: text-decoration-color 1s;
	cursor: pointer;

	&:hover {
		text-decoration-color: currentColor;
	}

	@media (min-width: 549px) {
		font-size: var(--fs-md);
	}
`;

export const DeleteOrEdit = (props) => {
	const { onDelete, setEdit, replyComment, post } = props;
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
						<IconDelete />
						<StyledTextSpan
							$color
							$right
							onClick={() => {
								setModalActive(true);
							}}
						>
							Delete
						</StyledTextSpan>

						<IconEdit />
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
						replyComment={replyComment}
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
