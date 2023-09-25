import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
	width: 40px;
	height: 40px;
	margin-right: 15px;

	@media (min-width: 549px) {
		margin-right: 20px;
	}
`;

const StyledDateSpan = styled.span`
	font-size: var(--fs-sd);
	font-weight: var(--fw-light);
	overflow: hidden;

	@media (min-width: 649px) {
		font-size: var(--fs-md);
		padding-right: 10px;
	}
`;

const StyledUserSpan = styled.span`
	font-weight: var(--fw-bold);
	color: var(--colors-neutral-Dark);
	margin-right: 15px;

	@media (min-width: 549px) {
		margin-right: 20px;
	}
`;

const StyledCurrentUser = styled.span`
	margin-right: 15px;
	padding: 2px;
	font-size: var(--fs-sd);
	color: var(--colors-neutral-white);
	background-color: var(--colors-primary-Moderate);

	@media (min-width: 599px) {
		padding: 3px;
		font-size: var(--fs-md);
	}
`;

const StyledUserWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const UserAvatar = ({ post }) => {
	const { user, createdAt } = post;

	return (
		<StyledUserWrapper>
			<StyledImage
				src={require(`../images/avatars/image-${user.username}.webp`)}
				alt="user avatar"
			/>
			<StyledUserSpan>{user.username}</StyledUserSpan>
			{user.currentUser && <StyledCurrentUser>you</StyledCurrentUser>}
			<StyledDateSpan>{createdAt}</StyledDateSpan>
		</StyledUserWrapper>
	);
};
