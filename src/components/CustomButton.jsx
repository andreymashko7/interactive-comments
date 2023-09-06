import styled from "styled-components";

const StyledButton = styled.button.attrs({})`
	padding: 9px 16px;
	background-color: ${({ color }) => color || "ccc"};
	margin-right: ${({ right }) => right || "0px"};
	color: var(--colors-neutral-white);
	text-transform: uppercase;
	cursor: pointer;

	font-size: var(--fs-ld);
	font-weight: var(--fw-normal);
	border-radius: 7px;
`;

export const CustomButton = (props) => {
	const { children, type = "button", htmlType = "button", onClick } = props;

	return (
		<StyledButton
			type={type}
			htmlType={htmlType}
			onClick={onClick}
			{...props}
		>
			{children}
		</StyledButton>
	);
};
