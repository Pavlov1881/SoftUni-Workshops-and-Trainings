import { render, html } from "../../node_modules/lit-html/lit-html.js";

const loginTemplate = () => html`
    <h1>Login page</h1>
`;

export const loginView = (ctx) => {
    render(loginTemplate(), document.querySelector('#root'));
} 
