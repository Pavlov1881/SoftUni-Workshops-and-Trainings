import { render, html } from "../../node_modules/lit-html/lit-html.js";
import * as movieService from "../services/movieService.js";

const movieTemplate = (movie) => html`
<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
`;

const homeTemplate = () => html`
    <h1>Home page</h1>
`;

export const homeView = (ctx) => {
    render(homeTemplate(), document.querySelector('#root'));
};