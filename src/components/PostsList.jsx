import styled from "styled-components";
import { formatDistance } from "date-fns";
import { useState } from "react";

import { Post } from "./Post";
import { Comment } from "./Comment";
import data from "../data.json";

export const StyledItem = styled.li`
	display: flex;
	padding: 6px 20px;
	background-color: var(--colors-neutral-white);
	margin-bottom: 20px;
	border-radius: 7px;
	width: 250px;

	@media (min-width: 700px) {
		width: 400px;
	}
	@media (min-width: 1200px) {
		width: 100%;
	}
`;

// const StyledReplyWrapper = styled(StyledItem)`
// 	margin-left: auto;
// 	position: relative;

// 	&:before {
// 		content: "";
// 		position: absolute;
// 		display: inline-block;
// 		left: -40px;
// 		width: 2px;
// 		height: 100%;
// 		border-left: 3px solid hsl(223deg 3.98% 66.9%);
// 	}

// 	@media (min-width: 1200px) {
// 		width: 760px;
// 	}
// `;

export const PostsList = () => {
	const [reply, setReply] = useState(false);
	const [text, setText] = useState("");

	const allPosts = data.comments.reduce((acc, post) => {
		acc.push(post);
		acc.push(...post?.replies);
		return acc;
	}, []);

	const [posts, setPosts] = useState(allPosts);
	const currentUser = data.currentUser;

	const ensertComment = (id) => {
		const postIndex = posts.findIndex((post) => post.id === id);
		const comment = {
			id: 10,
			content: "I couldn't agree more with ",
			replyingTo: "ramsesmiron",
			user: {
				image: {
					png: "/avatars/image-juliusomo.png",
					webp: "/avatars/image-juliusomo.webp"
				},
				username: "juliusomo"
			}
		};
		const post = posts.splice(postIndex, 0, comment);

		setPosts([...posts, posts.splice(postIndex, 0, comment)]);
	};

	const addPost = () => {
		let formatedDate = formatDistance(new Date(), new Date());

		const newPost = {
			id: Date.now(),
			content: text,
			createdAt: formatedDate,
			score: 0,
			// "replyingTo": "maxblagun",
			user: {
				image: {
					webp: currentUser.image.webp
				}
			},
			username: "juliusomo",
			currentUser: true
		};

		setPosts([...posts, newPost]);
		setText("");
	};

	return (
		<>
			<ul>
				{posts.map((post) => (
					<StyledItem key={post.id}>
						<Post
							post={post}
							posts={posts}
							setPosts={setPosts}
							text={text}
							setText={setText}
							reply={reply}
							setReply={setReply}
							ensertComment={ensertComment}
						/>
					</StyledItem>
				))}
			</ul>

			<Comment
				posts={posts}
				addPost={addPost}
				text={text}
				setText={setText}
				currentUser={currentUser}
			/>
		</>
	);
};

// {reply && (
//     <Comment
//         text={text}
//         setText={setText}
//         currentUser={currentUser}
//     />
// )}
