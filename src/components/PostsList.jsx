import React, { useState } from "react";
import styled from "styled-components";
import { formatDistance } from "date-fns";

import { Post } from "./Post";
import { Comment } from "./Comment";

export const StyledContainer = styled.div`
	flex-direction: column-reverse;
	display: flex;
	padding: 6px 15px;
	background-color: var(--colors-neutral-white);
	margin-bottom: 20px;
	border-radius: 7px;
	overflow: hidden;

	@media (min-width: 549px) {
		flex-direction: row;
		padding: 8px 20px;
	}
`;

const StyledReplyContainer = styled(StyledContainer)`
	margin-left: auto;
	width: 90%;
`;

export const PostsList = ({ allPosts }) => {
	const [text, setText] = useState("");
	const [reply, setReply] = useState(null);
	const [posts, setPosts] = useState(allPosts);

	const addPost = (replyingTo = "", postId) => {
		let formatedDate = formatDistance(new Date(), new Date());

		const newPost = {
			id: Date.now(),
			content: text,
			createdAt: formatedDate,
			score: 0,
			replyingTo,
			user: {
				image: {
					webp: "../images/avatars/image-juliusomo.webp"
				},
				username: "juliusomo",
				currentUser: true
			}
		};

		if (replyingTo && postId) {
			const postIndex = posts.findIndex((post) => post.id === postId);
			posts.splice(postIndex + 1, 0, newPost);

			setReply(null);
			setText("");
			return setPosts([...posts]);
		}

		setPosts([...posts, newPost]);
		setText("");
	};

	const replyComment = (id) => {
		setReply(id);
	};

	return (
		<>
			{posts.map((post) => {
				const item = (
					<Post
						post={post}
						posts={posts}
						setPosts={setPosts}
						replyComment={replyComment}
					/>
				);
				return (
					<React.Fragment key={post.id}>
						{!post.replyingTo ? (
							<StyledContainer>{item}</StyledContainer>
						) : (
							<StyledReplyContainer>{item}</StyledReplyContainer>
						)}

						{post.id === reply ? (
							<Comment
								addPost={addPost}
								text={text}
								setText={setText}
								replyTo={post.user.username}
								setReply={setReply}
								postId={post.id}
							/>
						) : null}
					</React.Fragment>
				);
			})}

			{!reply && (
				<Comment
					text={text}
					setText={setText}
					addPost={addPost}
				/>
			)}
		</>
	);
};
