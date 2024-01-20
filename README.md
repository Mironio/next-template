This is a Next.js template. 

# Features

- Everything is made on top of standard Next.js template `npx create-next-app@latest . ` 
- look for 'SELECT' in the code to find places to change
- Added `npm run generate-version` that populates version.ts with commit hash. This script can be used before deploy 
- Added api/health endpoint that emits 200 along with the version
- Configured husky pre-push. See .husky/pre-push to tweak it. Sometimes `husky install` is needed to make it work
- added example how to extend colors
- added `models` folder with interface example
- Added Tailwind Material and Heroicons
- Added set of favicons as an example. They were generated via https://realfavicongenerator.net/
- added React Query with trivial GET, GET by Id, POST examples
- added React Query Eslint
- added dev-mock script with an ability to switch to mocked api/mock endpoints
- added primitive pino logger for api routes
- added http GET file example with different environment support
- added script to upload any file to any aws bucket.
- added script to zip the app
- added AWS SDK script to deploy `out` folder to S3 see: _'Static Deploy to S3'_ section
- todo implement https://dev.to/bnn1/deploying-dockerized-nextjs-app-to-aws-eb-part-2-deployment-to-beanstalk-47pj
- added terraform files (see terraform folder) to create s3 for static website and upload the static version of the next js


### Static Deploy to S3

1. `next.config.js`
- add `output: "export"` 
- Configure images if necessary.
```
images: {
  loader: 'custom',
  loaderFile: './image-loader.js',
  },
```

2. `image-loader.js`

```javascript
export default function myImageLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`
}
```
3. `.env`
- Add S3 bucket name: `BUCKET_NAME=example`

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




