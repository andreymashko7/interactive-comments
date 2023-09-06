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
	width: 100%;
	padding-left: 20px;
	align-items: center;
	justify-content: space-between;
`;

export const Post = ({ ensertComment, post, posts, setPosts, reply }) => {
	const { score = 0, id, content, replyingTo = "" } = post;
	const [edit, setEdit] = useState(false);
	const [text, setText] = useState(content);

	const changeHandler = (e) => {
		setText(e.target.value);
	};

	const updatePost = (id) => {
		const post = posts.find((post) => {
			return post.id === id;
		});

		const updatePost = { ...post, content: text };
		setPosts([...posts.filter((post) => post.id !== id), updatePost]);
		setEdit(false);
	};

	const deleteComment = (id) => {
		const filteredPosts = posts.filter((post) => post.id !== id);
		setPosts([...filteredPosts]);
	};

	return (
		<>
			<Scores score={score} />

			<StyledContainer>
				<StyledUserWrapper>
					<UserAvatar post={post} />

					<DeleteOrEdit
						post={post}
						onDelete={deleteComment}
						setEdit={setEdit}
						reply={reply}
						ensertComment={ensertComment}
					/>
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
