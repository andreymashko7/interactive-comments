import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
	width: 40px;
	height: 40px;
	margin-right: 20px;
`;

const StyledDateSpan = styled.span`
	font-size: var(--fs-md);
	font-weight: var(--fw-light);
`;

const StyledUserSpan = styled.span`
	font-weight: var(--fw-bold);
	color: var(--colors-neutral-Dark);
	margin-right: 20px;
`;

const StyledCurrentUser = styled.span`
	margin-right: 10px;
	padding: 3px;
	color: var(--colors-neutral-white);
	background-color: var(--colors-primary-Moderate);
`;

const StyledUserWrapper = styled.div`
	align-items: center;
	display: flex;
`;

export const UserAvatar = ({ post }) => {
	const { user, createdAt } = post;
	return (
		<StyledUserWrapper>
			<StyledImage
				src={user?.image.webp}
				alt="user avatar"
			/>
			<StyledUserSpan>{user.username}</StyledUserSpan>
			{user.currentUser && <StyledCurrentUser>you</StyledCurrentUser>}
			<StyledDateSpan>{createdAt}</StyledDateSpan>
		</StyledUserWrapper>
	);
};
