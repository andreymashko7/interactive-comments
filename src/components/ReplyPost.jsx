import React from "react";
import styled from "styled-components";

import { StyledTextSpan } from "./DeleteorEdit";
import { ReactComponent as Icon } from "../images/icon-reply.svg";

const StyledSvgReply = styled(Icon)``;

export const ReplyPost = ({ setReply, ensertComment, id }) => {
	return (
		<>
			<StyledSvgReply />
			<StyledTextSpan
				onClick={() => {
					// setReply(true);
					ensertComment(id);
				}}
			>
				Reply
			</StyledTextSpan>
		</>
	);
};
