import page from '../node_modules/page/page.mjs';
import { homeView } from './views/homeView.js';

page('/', homeView);

page.start();
