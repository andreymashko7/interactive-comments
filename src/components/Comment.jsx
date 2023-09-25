import styled from "styled-components";

export const StyledWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	padding: 10px 20px;
	justify-content: space-around;
	background-color: var(--colors-neutral-white);
	margin-bottom: 30px;
	border-radius: 7px;
	width: 100%;
	gap: 10px;

	@media (min-width: 549px) {
		display: flex;
	}

	@media (min-width: 989px) {
		column-gap: 20px;
	}
`;

const StyledImg = styled.img.attrs(({ src }) => ({
	src,
	alt: "user avatar"
}))`
	width: 40px;
	height: 40px;
`;

export const StyledTextErea = styled.textarea`
	display: block;
	width: 100%;
	resize: none;
	padding: 6px 15px;
	font-size: var(--fs-md);
	font-weight: var(--fw-light);
	line-height: 1.5;
	border-radius: 5px;
	border: 1px solid var(--colors-neutral-Grayish);
	color: var(--colors-neutral-Grayish);

	&:focus {
		outline-color: var(--colors-primary-Moderate);
	}
`;

export const StyledButton = styled.button`
	padding: 7px;
	height: fit-content;
	border-radius: 5px;
	font-weight: var(--fw-normal);
	font-size: var(--fs-md);
	text-transform: upperCase;
	background: ${({ $primary }) =>
		$primary ? "var(--colors-primary-Moderate)" : "rgb(247 81 87)"};
	color: var(--colors-neutral-white);
	cursor: pointer;

	&:hover {
		background-color: ${({ $primary }) =>
			$primary ? "hsl(238deg 69.98% 61.79%)" : "red"};
	}
	&:disabled {
		background-color: #cccccc;
		cursor: not-allowed;
	}

	@media (min-width: 549px) {
		font-size: var(--fs-ld);
	}
`;

const StyledBtnContainer = styled.div`
	display: grid;
	row-gap: 10px;
`;

export const Comment = (props) => {
	const {
		addPost,
		text,
		setText,
		replyTo = "",
		setReply = null,
		postId = null
	} = props;
	const logo = require("../images/avatars/image-juliusomo.webp");

	const cancelMessage = () => {
		setText("");
		setReply(null);
	};

	return (
		<StyledWrapper>
			<StyledImg src={logo} />
			<StyledTextErea
				name="comment"
				autoFocus={replyTo ? true : false}
				placeholder={replyTo ? `@${replyTo}` : "Add a comment ..."}
				rows="3"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>

			<StyledBtnContainer>
				<StyledButton
					$primary
					disabled={!text}
					onClick={() => addPost(replyTo, postId)}
				>
					{replyTo ? "reply" : "send"}
				</StyledButton>
				{replyTo && <StyledButton onClick={cancelMessage}>cancel</StyledButton>}
			</StyledBtnContainer>
		</StyledWrapper>
	);
};
