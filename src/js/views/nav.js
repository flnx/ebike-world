import { html, nothing } from './lib.js';
import { getUserData } from '../utils/userData.js';

import arrowDown from '/src/assets/svg/arrow-down.svg';
import logoImg from '/src/assets/images/logo/2.png';

const state = {
  toggle: false,
}

const onToggle = (e, ctx) => {
  e.preventDefault();
  state.toggle = state.toggle ? false : true;
  ctx.renderNav(ctx);
}

export const nav = (ctx) => html`
    <div class="container-nav nav-wrapper">
      <div class="logo">
        <a href="/" class="logo-t"><img src="${logoImg}" /></a>
      </div>
      <nav class="main-nav mobile-hide mobile-show">
        <ul class="navbar">
          <li class="navbar__item"><a href="/blog">Blog</a></li>
          <li class="navbar__item"><a href="/bikes">Bikes</a></li>
          <li class="navbar__item"><a href="/accessories">accessories</a></li>
          <li class="navbar__item"><a href="/about">About</a></li>
          ${getUserData()
            ? html` 
              <div class="navbar__dropdown">
                <div class="navbar__dropdown__toggle" @click=${(e) => onToggle(e, ctx)}>
                  <img src="https://i.pravatar.cc/150?img=48" class="navbar__user-image" alt="avatar" srcset="" width="40px" height="40px"/>
                  <img src="${arrowDown}" class="navbar__dropdown__arrow"/>
                </div>

                <ul class="navbar__dropdown__menu ${state.toggle ? "" : "nav-toggle-hidden"}">
                  <li class="navbar__item"><a href="/create">Add Bike</a></li>
                  <li class="navbar__item"><a href="/add-post">Create Post</a></li>
                  <li class="navbar__item"><a href="/logout">Logout</a></li>
                </ul>
              </div>
              `
                
            : html` <li class="navbar__guest"><a href="/login">Log In</a></li>
                <li class="navbar__guest"><a href="/register">Sign Up</a></li>`}
        </ul>
      </nav>
      <div class="menu-wrapper">
        <div class="hamburger-menu"></div>
      </div>
    </div>
`;