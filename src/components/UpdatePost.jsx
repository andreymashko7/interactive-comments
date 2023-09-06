import React from "react";
import styled from "styled-components";

import { StyledButton, StyledTextErea } from "./Comment";

const StyledButtonWrap = styled.div`
	display: flex;
	justify-content: end;
`;

const StyledInput = styled(StyledTextErea)`
	margin: 10px 0px 10px 20px;
	width: 725px;
`;

export const UpdatePost = ({ text, changeHandler, id, updatePost }) => {
	return (
		<>
			<StyledInput
				autoFocus
				name="update"
				value={text}
				rows="3"
				onChange={changeHandler}
			/>
			<StyledButtonWrap>
				<StyledButton onClick={() => updatePost(id)}>update</StyledButton>
			</StyledButtonWrap>
		</>
	);
};
