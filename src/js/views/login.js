import { html } from './lib.js';

export const loginPage = (ctx) => {
  const onLogin = (e) => {
    e.preventDefault();
  };
  ctx.render(loginPageTemplate(onLogin));
};

const loginPageTemplate = (onLogin) => html`
  <div class="container">
    <form action="" class="login-form" @submit=${onLogin}>
      <input type="email" name="email" placeholder="email address" required />
      <input type="text" name="username" placeholder="username" required />
      <input type="password" name="password" placeholder="password" required />
      <input type="password" name="repass" placeholder="repeat password" required />
      <button class="btn login-btn">Login</button>
    </form>
  </div>
`;
