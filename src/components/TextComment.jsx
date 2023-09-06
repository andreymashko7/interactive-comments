import styled from "styled-components";

const StyledContent = styled.div`
	display: block;
	padding: 5px 10px 0px 20px;
	line-height: 1.2;
	font-size: var(--fs-md);
	letter-spacing: normal;
`;

const StyledSpan = styled.span`
	color: var(--colors-primary-Moderate);
	margin-right: 10px;
	font-weight: var(--fw-bold);
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
