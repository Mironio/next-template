This is a nextJS template. 

## Features

- Everything is made on top of standard nextJS template (`npx create-next-app@latest . `)
- strict dependencies are used to make dependencies more manageable
- [standalone](https://tech.competa.com/standalone-deployment-of-nextjs-3286490cb39b) build is used.
- `devDependencies` moved to `dependencies` in `package.json`. They don't affect the build size/time due to standalone mode
- Dockerfile was taken from official [examples](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile) 
- look for 'SELECT' in the code to find places to change




## Getting Started

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


### How to run container with podman.

- The steps below can be easily done by docker as well

```bash
# Install
brew install podman && podman machine init && podman machine start

#Launch
podman  build  -t nextjs-app .
podman run -d -p 3000:3000 nextjs-app

#Clean up
podman stop <container_id>
podman rm <container_id>
podman rmi nextjs-app
podman system prune
podman machine stop
```




