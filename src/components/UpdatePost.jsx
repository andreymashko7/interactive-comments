import React from "react";
import styled from "styled-components";

import { StyledButton, StyledTextErea } from "./Comment";

const StyledButtonWrap = styled.div`
	display: flex;
	justify-content: end;
	margin: 20px 0px;

	@media (min-width: 549px) {
		margin: 0px;
	}
`;

const StyledInputWrap = styled.div`
	@media (min-width: 549px) {
		padding: 20px 0px 20px 20px;
	}
`;

export const UpdatePost = ({ text, changeHandler, id, updatePost }) => {
	return (
		<>
			<StyledInputWrap>
				<StyledTextErea
					autoFocus
					name="update"
					value={text}
					rows="3"
					onChange={changeHandler}
				/>
			</StyledInputWrap>

			<StyledButtonWrap>
				<StyledButton onClick={() => updatePost(id)}>update</StyledButton>
			</StyledButtonWrap>
		</>
	);
};
