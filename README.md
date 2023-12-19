This is a nextJS template. 

## Features

- Everything is made on top of standard nextJS template (`npx create-next-app@latest . `)
- strict dependencies are used to make dependencies more manageable
- look for 'template' in the code to find places to change



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


### Next steps for Github

- create a repo
- Use `pbcopy < ~/.ssh/id_ed25519.pub` and set up keys in the following menu `profile > settings > security > ssh keys`
- Set up access token in `profile > settings > personal settings tokens > tokens`
- Use the access token in terminal
- Check connection `ssh -T git@github.com`
- `git config --global credential.helper store`
- now you can do `git push -u https://<USER>:<ACCESS_TOKEN>@github.com/<USER>/next-template.git`


