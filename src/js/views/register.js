import { register } from '../api/user.js';
import { html } from './lib.js';

export const registerPage = (ctx) => {
  const onRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    let { email, username, password, repass } = Object.fromEntries(formData);

    email = email.trim();
    username = username.trim();

    if (email.length < 5 || username.length < 2 || password.length < 6 || password !== repass) {
      return alert('error')
    }

    const randomNum = Math.round(Math.random() * 150);
    const imgUrl = `https://i.pravatar.cc/150?img=${randomNum}`

    await register({ username, email, password, imgUrl });
    ctx.page.redirect('/');
  };
  
  ctx.render(registerPageTemplate(onRegister));
};

const registerPageTemplate = (onRegisterFn) => html`
  <div class="container">
    <form action="" class="login-form" @submit=${onRegisterFn}>
      <input type="email" name="email" placeholder="email address" required />
      <input type="text" name="username" placeholder="username" required />
      <input type="password" name="password" placeholder="password" required />
      <input type="password" name="repass" placeholder="repeat password" required />
      <button class="btn login-btn">Login</button>
    </form>
  </div>
`;
