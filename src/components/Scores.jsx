import styled from "styled-components";
import { ReactComponent as IconMinus } from "../images/icon-minus.svg";
import { ReactComponent as IconPlus } from "../images/icon-plus.svg";
import { useState } from "react";

const Wrapper = styled.div`
	min-width: 35px;
	max-height: 104px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px 0px;
	border-radius: 8px;
	background-color: var(--colors-bg-color);
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
	padding: 18px 0px;
	color: var(--colors-primary-Moderate);
	font-size: var(--fs-ld);
	font-weight: var(--fw-normal);
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
