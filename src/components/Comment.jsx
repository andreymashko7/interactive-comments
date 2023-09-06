import styled from "styled-components";
import image from "../images/avatars/image-amyrobson.webp";

export const StyledWrapper = styled.div`
	display: flex;
	padding: 10px 30px;
	justify-content: space-between;
	background-color: var(--colors-neutral-white);
	margin-bottom: 30px;
	border-radius: 7px;
	width: 250px;

	@media (min-width: 700px) {
		width: 400px;
	}
	@media (min-width: 1200px) {
		width: 100%;
	}
`;

const StyledImg = styled.img.attrs(({ src }) => ({
	src,
	alt: "user avatar"
}))`
	width: 40px;
	height: 40px;
	// margin-right: 10px;
`;

export const StyledTextErea = styled.textarea`
	display: block;
	min-width: 600px;
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
	padding: 10px;
	height: fit-content;
	border-radius: 5px;
	font-weight: var(--fw-normal);
	font-size: var(--fs-ld);
	text-transform: upperCase;
	background-color: var(--colors-primary-Moderate);
	color: var(--colors-neutral-white);
	cursor: pointer;

	&:hover {
		background-color: hsl(238deg 69.98% 61.79%);
	}
	&:disabled {
		background-color: #cccccc;
		cursor: not-allowed;
	}
`;

export const Comment = (props) => {
	const { addPost, text, setText, currentUser } = props;
	console.log("🚀 ~ file: Comment.jsx:69 ~ Comment ~ currentUser:", currentUser);

	return (
		<StyledWrapper>
			<StyledImg src={`${currentUser?.image.webp}`} />
			<StyledTextErea
				name="comment"
				placeholder="Add a comment ..."
				rows="4"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<StyledButton
				disabled={!text}
				onClick={addPost}
			>
				send
			</StyledButton>
		</StyledWrapper>
	);
};
