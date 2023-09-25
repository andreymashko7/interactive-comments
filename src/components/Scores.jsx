import styled from "styled-components";
import { ReactComponent as IconMinus } from "../images/icon-minus.svg";
import { ReactComponent as IconPlus } from "../images/icon-plus.svg";
import { useState } from "react";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	border-radius: 8px;
	background-color: var(--colors-bg-color);
	justify-content: space-evenly;
	width: 110px;
	padding: 6px 0px;

	@media (min-width: 549px) {
		flex-direction: column;
		width: 35px;
		min-height: 100px;
		display: flex;
		padding: 0px;
	}
`;

const StyledSvgMinus = styled(IconMinus)`
	fill: var(--colors-primary-Light-grayish);
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		fill: var(--colors-primary-Moderate);
	}
`;

const StyledSvgPlus = styled(IconPlus)`
	fill: var(--colors-primary-Light-grayish);
	transition: all 0.3s;
	cursor: pointer;

	&:hover {
		fill: var(--colors-primary-Moderate);
	}
`;

const StyledSpan = styled.span`
	font-size: var(--fs-ld);
	font-weight: var(--fw-normal);
	color: var(--colors-primary-Moderate);
`;

export const Scores = ({ score }) => {
	const [value, setValue] = useState(score);

	const incrementScore = () => {
		setValue((prevState) => prevState + 1);
	};

	const decrementScore = () => {
		setValue((prevState) => prevState - 1);
	};

	return (
		<Wrapper>
			<StyledSvgPlus onClick={incrementScore} />
			<StyledSpan>{value}</StyledSpan>
			<StyledSvgMinus onClick={decrementScore} />
		</Wrapper>
	);
};
