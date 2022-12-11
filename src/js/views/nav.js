import { html } from './lib.js'
import logoImg from '/src/assets/images/logo/2.png'

export const nav = () => html`
  <header class="nav__header">
    <div class="container container-nav">
      <div class="logo">
        <a href="/" class="logo-t"><img src="${logoImg}"/></a>
      </div>
      <nav class="main-nav mobile-hide mobile-show">
        <ul class="navbar">
          <li class="navbar__item"><a href="/">Home</a></li>
          <li class="navbar__item"><a href="/create">Create</a></li>
          <li class="navbar__item"><a href="/blog">Blog</a></li>
          <li class="navbar__item"><a href="/bikes">Bikes</a></li>
          <li class="navbar__item"><a href="/accessories">accessories</a></li>
          <li class="navbar__item"><a href="/about">About</a></li>
        </ul>
      </nav>
      <div class="menu-wrapper">
        <div class="hamburger-menu"></div>
      </div>
    </div>
  </header>
`;