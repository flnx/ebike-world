import { createBlogPost } from '../api/data.js';
import { spaceTrimmer } from '../utils/utils.js';
import { html } from './lib.js';

export const addPost = (ctx) => {
  const onPublish = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    let { title, readTime, content, imageUrl } = Object.fromEntries(formData);
    
    if (title.length < 8) {
      return alert('Title must be at least 8 characters');
    }

    if (imageUrl.length < 3) {
      return alert('Image url must be at least 3 characters');
    }
    
    if (readTime < 1 || readTime > 15) {
      return alert('Read time must be between 1 and 15 minutes');
    }
    
    if (content.length < 50) {
      return alert('The content must consist at least 50 characters');
    }
    
    const processedFormData = spaceTrimmer({ title, readTime, content, imageUrl });
    processedFormData.readTime = Number(processedFormData.readTime);

    const blogData = await createBlogPost(processedFormData);
    
    ctx.page.redirect(`/article/${blogData.objectId}`);
  };

  ctx.render(addPostTemplate(onPublish));
};

const addPostTemplate = (onPublishFn) => html`
  <div class="container">
    <form action="" class="login-form" @submit=${onPublishFn}>
      <input type="text" name="title" placeholder="Post title" required />
      <input type="text" name="imageUrl" placeholder="Image url" required />
      <input
        type="number"
        name="readTime"
        placeholder="Read time (between 1 and 15 minutes)"
        required
      />
      <textarea
        id="form-content"
        name="content"
        rows="18"
        cols="60"
        minlength="50"
        maxlength="15000"
      ></textarea>
      <button class="btn login-btn">Publish</button>
    </form>
  </div>
`;
