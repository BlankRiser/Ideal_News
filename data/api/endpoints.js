const news_endpoints = {
    end: `&apiKey=${process.env.NEWS_API}`,
    everything: "https://newsapi.org/v2/everything?q=",
    country: "https://newsapi.org/v2/top-headlines?country=",
    sources: "https://newsapi.org/v2/top-headlines/sources",
    category:"https://newsapi.org/v2/top-headlines/sources?category="
  },
;

export default news_endpoints;
