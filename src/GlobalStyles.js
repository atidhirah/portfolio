import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --header-height: 3rem;
        --clr-black: #111111;
        --clr-white: #eeeeee;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: var(--clr-black);
        color: var(--clr-white);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "Avenir", "Poppins", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .container {
        width: 100%;
        max-width: 1080px;
        margin: auto;
        padding-left: max(2rem, 5vw);
        padding-right: max(2rem, 5vw);
    }

    .section {
        min-height: 100vh;
        padding-top: calc(var(--header-height) + 1rem);
    }

    .active-nav {
        font-size: 0.9rem !important;
        font-weight: 700;
        pointer-events: none;
        transition: 0.3s;
    }
`;
