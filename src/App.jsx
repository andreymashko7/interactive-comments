import styled from "styled-components";

import "./App.css";
import { PostsList } from "./components/PostsList";

const StyledContainer = styled.div`
	margin: 0 auto;
	padding: 20px 10px 0px 10px;

	@media (min-width: 1199px) {
		padding: 20px 280px;
		/* padding: 20px 342px; */
	}
`;

export const App = () => {
	return (
		<StyledContainer>
			<PostsList />
		</StyledContainer>
	);
};
