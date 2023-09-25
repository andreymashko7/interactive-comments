import styled from "styled-components";

import "./App.css";
import data from "./data.json";
import { PostsList } from "./components/PostsList";

const StyledContainer = styled.div`
	margin: 0 auto;
	padding: 10px;

	@media (min-width: 549px) {
		padding: 15px;
	}

	@media (min-width: 899px) {
		padding-left: 100px;
		padding-right: 100px;
	}

	@media (min-width: 1099px) {
		padding-left: 200px;
		padding-right: 200px;
	}

	@media (min-width: 1299px) {
		padding-left: 350px;
		padding-right: 350px;
	}
`;

export const App = () => {
	const allPosts = data.comments.reduce((acc, post) => {
		acc.push(post);
		acc.push(...post?.replies);
		return acc;
	}, []);

	return (
		<StyledContainer>
			<PostsList allPosts={allPosts} />
		</StyledContainer>
	);
};
