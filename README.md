# Ideal News

A website that uses [News API](https://newsapi.org/) to get you started on daily news.
Plans to extend with other useful APIs are in order.

- ![image](public\video\showcase.gif)

### About the project

I have been using various RSS feeds that aggregate news articles from various sources like [Feedly](https://feedly.com/), [Panda](https://app.usepanda.com/) and wanted to create a web app that does the same but also gives me the flexibilty to customize the layout and eventually keep adding on other functionalities. Some of the features that I would like to add are:

- [x] Add a search bar to search for news articles
- [x] Select news source from a few countries of my choosing (e.g. India, USA, UK, etc.)
- [ ] Add a news source selection bar to select from a list of news sources
- [ ] Add a new page to only display crypto and stock news and their growth charts
-

### Instructions to Install

- [Download and install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Clone this repo

- Go to [newsapi.org](https://newsapi.org/) and generate an API key
- Add the API key to the `.env.local` file as shown below:

```shell
NEXT_PUBLIC_NEWS_API=your_api_key_goes_here
```

- Run the command below to install the dependencies

```node
npm install
```

- Run the command below to start the server

```node
npm run dev
// Visit http://localhost:3000/
```

### Deploying the project

- You can host the project anywhere you choose, the only caveat is that you need to have a [business plan on newsapi](https://newsapi.org/pricing) for the api to work.

### Stuff that made this happen

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [News API](https://newsapi.org/)
- [SWR](https://swr.vercel.app/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
