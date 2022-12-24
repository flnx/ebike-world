import { login } from '../api/user.js';
import { html } from './lib.js';

export const loginPage = (ctx) => {
  const onLogin = async(e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    let { email, password } = Object.fromEntries(formData);
  
    email = email.trim();
  
    if (email.length < 6 || password.length < 6) {
      return alert('Email and password must be at least 6 characters');
    }
    
    await login({ email: email.trim(), password });
  
    ctx.page.redirect('/');
  };

  ctx.render(registerPageTemplate(onLogin));
};



const registerPageTemplate = (onLoginFn) => html`
  <div class="container">
    <form action="" class="login-form" @submit=${onLoginFn}>
      <input type="email" name="email" placeholder="email address" required />
      <input type="password" name="password" placeholder="password" required />
      <button class="btn login-btn">Login</button>
    </form>
  </div>
`;
