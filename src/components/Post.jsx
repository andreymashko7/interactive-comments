import { useState } from "react";
import styled from "styled-components";

import { Scores } from "./Scores";
import { TextComment } from "./TextComment";
import { UserAvatar } from "./UserAvatar";
import { DeleteOrEdit } from "./DeleteorEdit";
import { UpdatePost } from "./UpdatePost";

const StyledContainer = styled.div`
	width: 100%;
`;

const StyledUserWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 549px) {
		padding-left: 20px;
	}
`;

const StyledMobileHidden = styled.div`
	display: none;

	@media (min-width: 549px) {
		display: block;
	}
`;

const StyledPcHidden = styled(StyledMobileHidden)`
	display: block;

	@media (min-width: 549px) {
		display: none;
	}
`;

const StyledFlexWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Post = ({ replyComment, post, posts, setPosts }) => {
	const { score = 0, id, content, replyingTo = "" } = post;
	const [edit, setEdit] = useState(false);
	const [text, setText] = useState(content);

	const changeHandler = (e) => {
		setText(e.target.value);
	};

	const updatePost = (id) => {
		setPosts([
			...posts.map((post) => {
				if (post.id === id) {
					post.content = text;
				}
				return post;
			})
		]);

		setEdit(false);
	};

	const deleteComment = (id) => {
		const filteredPosts = posts.filter((post) => post.id !== id);
		setPosts([...filteredPosts]);
	};

	return (
		<>
			<StyledFlexWrap>
				<Scores score={score} />
				<StyledPcHidden>
					<DeleteOrEdit
						post={post}
						onDelete={deleteComment}
						setEdit={setEdit}
						replyComment={replyComment}
					/>
				</StyledPcHidden>
			</StyledFlexWrap>

			<StyledContainer>
				<StyledUserWrapper>
					<UserAvatar post={post} />

					<StyledMobileHidden>
						<DeleteOrEdit
							post={post}
							onDelete={deleteComment}
							setEdit={setEdit}
							replyComment={replyComment}
							mobile
						/>
					</StyledMobileHidden>
				</StyledUserWrapper>
				{edit ? (
					<UpdatePost
						text={text}
						changeHandler={changeHandler}
						updatePost={updatePost}
						id={id}
					/>
				) : (
					<TextComment
						text={content}
						replyTo={replyingTo}
					/>
				)}
			</StyledContainer>
		</>
	);
};
