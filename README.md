# TeamSpace

![](https://i.imgur.com/oDQc040.png)

**_TeamSpace_** is an online donation app for **space debris removal**. It is built using React.js, Nest.js, Prisma, TypeScript, GraphQL.

> I tried to deploy the backend but I failed to do so since I kept getting this [error](https://github.com/prisma/prisma/issues/12417). The deployment of this project will be in the TODO list.
>
> However, you can test it locally (in two separate terminals):
> Frontend:
>
> ```shell
>   cd teamspace-ui
>   npm install
>   npm run start
> ```
>
> Backend:
>
> ```shell
>   cd teamspace-api
>   npm run dev
> ```
>
> You can query your server at http://localhost:3001/graphql

## Feature Preview

### Home Page

- Mission & Live Donation Counter

![](https://i.imgur.com/gRh0MCV.png)

### Create Donation

![](https://i.imgur.com/jJmfYkn.png)
![](https://i.imgur.com/gHQ1OG6.png)
![](https://i.imgur.com/wmaOToe.png)

### Leaderboard

- Leaderboard in 'Most Recent' and 'Most Pounds' order

![](https://i.imgur.com/PwCrKTb.png)
![](https://i.imgur.com/La64vv4.png)

## Tech Stack

- Client: [React.js](https://reactjs.org/) &amp; [Tailwind CSS](https://tailwindcss.com/)
- Server: [Nest.js](https://nestjs.com/) &amp; [Prisma](https://www.prisma.io/)
- Database: [SQLite](https://www.sqlite.org/index.html)

## TODO

- [ ] Deployment
- [ ] Development blog: what I learned and thoughts about Nest.js, Prisma, GraphQL (they are new techs for me :))

## Credit

Inspired by [Marius Espejo](https://www.youtube.com/channel/UCDpd-qEwAI9wglx4tsEBAtw)'s Nest.js tutorial.
