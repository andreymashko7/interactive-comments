import styled from "styled-components";
import { CustomButton } from "./CustomButton";

const StyledWrapper = styled.div``;
const StyledTitle = styled.h1`
	margin-bottom: 10px;
	font-size: 22px;
	font-weight: var(--fw-normal);
`;
const StyledText = styled.p`
	max-width: 300px;
	margin-bottom: 15px;
	font-size: var(--fs-ld);
	line-height: 1.1;
`;

const StyledBtnWrap = styled.div`
	display: flex;
`;

export const ModalContent = ({ setModal, onDelete, id }) => {
	return (
		<StyledWrapper>
			<StyledTitle>Delete comment</StyledTitle>
			<StyledText>
				Are you sure you want to delete this comment? This will remove the comment
				and can't be udone
			</StyledText>
			<StyledBtnWrap>
				<CustomButton
					color={"var(--colors-neutral-Grayish)"}
					right="20px"
					onClick={() => setModal(false)}
				>
					no, cancel
				</CustomButton>
				<CustomButton
					color={"var(--colors-primary-Soft)"}
					onClick={() => onDelete(id)}
				>
					yes, delete
				</CustomButton>
			</StyledBtnWrap>
		</StyledWrapper>
	);
};
