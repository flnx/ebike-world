import page from 'page';
import { ctxDecorator } from './layout.js';
import { aboutPage } from './views/about.js';
import { accessoriesPage } from './views/accessories.js';
import { bikesPage } from './views/bikes.js';
import { blogPage } from './views/blog.js';
import { createPage } from './views/create.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logoutAction } from './views/logout.js';
import { articleDetailsPage } from './views/detailsArticle.js';
import { bikeDetailsPage } from './views/detailsBike.js';
import { addPost } from './views/addPost.js';
import { showNav } from './middlewares/showNav.js';
import { showFooter } from './middlewares/showFooter.js';


import '../styles/main.scss';

page(ctxDecorator);
page(showNav);
page(showFooter);
page('/', homePage);
page('/index.html', '/');
page('/blog', blogPage);
page('/bikes', bikesPage);
page('/accessories', accessoriesPage);
page('/about', aboutPage);
page('/article', articleDetailsPage);
page('/article/:id', articleDetailsPage);
page('/bike-details/:id', bikeDetailsPage);
page('/create', createPage);
page('/add-post', addPost);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);
page.start();
