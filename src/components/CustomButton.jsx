import styled from "styled-components";

const StyledButton = styled.button.attrs({})`
	padding: 9px 16px;
	margin-right: ${({ right }) => right || "0px"};
	font-size: var(--fs-ld);
	font-weight: var(--fw-normal);
	text-transform: uppercase;
	color: var(--colors-neutral-white);
	background-color: ${({ color }) => color || "ccc"};
	border-radius: 7px;
	cursor: pointer;
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
