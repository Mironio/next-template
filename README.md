This is a Next.js template. 

# Features

- Everything is made on top of standard Next.js template `npx create-next-app@latest . ` 
- look for 'SELECT' in the code to find places to change
- Added `npm run generate-version` that populates version.ts with commit hash. This script can be used before deploy 
- Added api/health endpoint that emits 200 along with the version
- Configured husky pre-push. See .husky/pre-push to tweak it
- added example how to extend colors
- added `models` folder with interface example

### Build

- strict dependencies are used to make dependencies more manageable
- [standalone](https://tech.competa.com/standalone-deployment-of-nextjs-3286490cb39b) build is used.
- `devDependencies` moved to `dependencies` in `package.json`. They don't affect the build size/time due to standalone mode
- Dockerfile was taken from official [examples](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile)

### Eslint

- default Next.js Eslint configuration is used
- added [tailwind eslint plugin](https://www.npmjs.com/package/eslint-plugin-tailwindcss)


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


### Next steps for GitHub

- create a repo
- Use `pbcopy < ~/.ssh/id_ed25519.pub` and set up keys in the following menu `profile > settings > security > ssh keys`
- Set up access token in `profile > settings > personal settings tokens > tokens`
- Use the access token in terminal
- Check connection `ssh -T git@github.com`
- `git config --global credential.helper store`
- now you can do `git push -u https://<USER>:<ACCESS_TOKEN>@github.com/<USER>/next-template.git`


### How to run container with Podman.

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




