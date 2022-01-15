# PORTFOLIO-BLOG-TEMPLATE

Template from my portfolio/blog website powered by:

- NextJS with TypeScript
- CSS(no libraries, preprocessor, etc.)
- MDX(for blogs)

## Project Overview

- `components/*` - Components used throughout the code
- `components/MDX/*` - Components used inside MDX blogs
- `components/React/*` - Components used only for non-MDX code i.e., site pages
- `pages/*` - All the pages in the website
- `config.json` - Configs regarding user, etc.
- `styles/*` - Styles for pages
- `public/*` - Public data, contains images used in blogs, resume, & projects
- `utils/*` - Common utilities used in blogs like table of contents, blog posts, etc.
- `posts/*` - All the blog posts written in MDX

## Running Locally

- Use the template
- Install dependencies `npm install`
- Run locally in development mode `npm run dev`

## How to use this template?

- To change the homepage data, make changes in `pages/index.tsx` file.

- All the blog posts should be present in `/posts` directory, and all the images should be present in `public/blogImages` directory. See the `posts/hello-world.mdx` file to see example of using images.

- To generate a blog post, simply run `npm run newPost <blog-slug>`

- To add new projects, add new projects in [this array](https://github.com/aayushmau5/portfolio-blog-template/blob/6034f7e3a0edca8ac6b64dd4ace20cb1ff5eea87/components/React/Project/Projects/index.tsx#L6)

- To add new skills, add new skills in [this array](https://github.com/aayushmau5/portfolio-blog-template/blob/6034f7e3a0edca8ac6b64dd4ace20cb1ff5eea87/components/React/Project/Skills/index.tsx#L9)

- To change the logo in homepage, remove `image.png` from `/public` and add your own logo.

- Change the social banner by providing your own image instead of `public/socialBanner.png`

- Change the favicon as you want(Favicon icons are `android-chrome-192x192.png`, `android-chrome-512x512.png`, `apple-touch-icon.png`, `favicon-16x16.png`, `favicon-32x32.png`, `favicon.ico`)

- Make changes in `/public/site.webmanifest`

- Put project images in `/public/projects` and import them using `import` statement [like this](https://github.com/aayushmau5/portfolio-blog-template/blob/6034f7e3a0edca8ac6b64dd4ace20cb1ff5eea87/components/React/Project/Projects/index.tsx?_pjax=%23js-repo-pjax-container%2C%20div%5Bitemtype%3D%22http%3A%2F%2Fschema.org%2FSoftwareSourceCode%22%5D%20main%2C%20%5Bdata-pjax-container%5D#L4) and use them [like this](https://github.com/aayushmau5/portfolio-blog-template/blob/6034f7e3a0edca8ac6b64dd4ace20cb1ff5eea87/components/React/Project/Projects/index.tsx?_pjax=%23js-repo-pjax-container%2C%20div%5Bitemtype%3D%22http%3A%2F%2Fschema.org%2FSoftwareSourceCode%22%5D%20main%2C%20%5Bdata-pjax-container%5D#L10)

- Make changes in `config.json` file. `config.json` contains information like title, description, user information.
