import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --header-width: 5vw;
        --clr-background: #eee;
        --clr-text: #111;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: var(--clr-background);
        color: var(--clr-text);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "Avenir", "Poppins", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;

        padding-left: max(70px, var(--header-width));
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .container {
        width: 100%;
        max-width: 1080px;
        margin: auto;
        
        padding-right: max(2rem, 5vw);
    }

    .section {
        min-height: 100vh;
        padding-top: 3rem;
    }

    .active-nav {
        font-size: 0.8rem !important;
        text-decoration: underline;
        pointer-events: none;
        transition: 0.3s;
    }
`;
