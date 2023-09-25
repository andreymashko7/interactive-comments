import styled from "styled-components";

const StyledContent = styled.div`
	padding: 20px 0px;
	line-height: 1.2;
	font-size: var(--fs-md);
	line-height: 1.33;

	@media (min-width: 549px) {
		padding: 12px 10px 5px 20px;
	}
`;

const StyledSpan = styled.span`
	margin-right: 10px;
	font-weight: var(--fw-bold);
	color: var(--colors-primary-Moderate);
`;

export const TextComment = ({ text, replyTo }) => {
	return (
		<div>
			<StyledContent>
				{replyTo && <StyledSpan>@{replyTo}</StyledSpan>}
				{text}
			</StyledContent>
		</div>
	);
};
