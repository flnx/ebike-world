import { logout } from "../api/user.js";

export const logoutAction = (ctx) => {
    logout()
    ctx.page.redirect('/');
} 