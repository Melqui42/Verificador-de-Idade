import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	@import url("https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono&display=swap");

	* {
		margin: 0%;
		padding: 0%;
		list-style: none;
		text-decoration: none;
		font-family: "Roboto", sans-serif;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
    background-color: #282a36;
		&::-webkit-scrollbar {
			background-color: #545454;
		}

		&::-webkit-scrollbar-thumb {
			background-color: #898989;
		}
	}
`;

export default GlobalStyle;
