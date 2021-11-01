import React, { useEffect, useState, useContext } from "react";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import categories from "../../../data/api/categories";
import countries from "data/api/countries";

import { CountryContext } from "../../../Layout/Wrapper/LayoutWrapper";

const TopHeadlines = ({ api }) => {
  const [category, setCategory] = useState("technology");
  const data = useContext(CountryContext);
  // console.log(`Context value : ${data}`);

  const selectedCountry = countries
    .filter((country) => country.name === data)
    .map((country) => country.shortHand);

  // console.log(`Country value : ${selectedCountry}`);

  const top = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${category}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`;
  const dataFetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: news, error } = useSWR(top, dataFetcher);

  // Use this during dev process - have only 100 calls per day :(
  // const news = {
  //   articles: [
  //     {
  //       author: "IANS",
  //       content:
  //         "San Francisco, Nov 1 Cupertino based tech giant Apple is reportedly planning to launch its next-generation iMac that could be called the iMacaCE Pro in 2022.\r\nAccording to MacRumors, the device will … [+1449 chars]",
  //       description:
  //         "San Francisco, Nov 1 Cupertino based tech giant Apple is reportedly planning to launch its next-generation iMac that could be called the iMacaCE Pro in 2022.According to MacRumors, the device will feature the same M1 Pro and M1 Max chips that Apple introduced…",
  //       publishedAt: "2021-11-01T03:30:52Z",
  //       source: { id: null, name: "Lokmat.com" },
  //       title:
  //         "Apple to launch 'iMac Pro' in 2022 with M1 Pro/Max chips: Report - Lokmat",
  //       url: "https://english.lokmat.com/technology/apple-to-launch-imac-pro-in-2022-with-m1-promax-chips-report/",
  //       urlToImage:
  //         "https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/686x514/d15c0be85dd4041d4edd3bd4225a60b8_202111.jpg",
  //     },
  //   ],
  // };

  // console.log(news);
  return (
    <>
      <div>
        {categories.map((tag, index) => {
          return (
            <button
              key={index}
              className={`m-1 ${
                tag === category
                  ? "bg-red-200 rounded-2xl px-2"
                  : "hover:text-primary"
              }`}
              onClick={() => setCategory(tag)}
            >
              #{tag}
            </button>
          );
        })}
      </div>
      <section>
        {news &&
          news.articles.map((article, index) => {
            return (
              <a key={index} href={article.url}>
                <div className="hover:bg-red-50 p-2 border-t-2 border-gray-500 flex flex-col ">
                  <h3 className="font-semibold">
                    {article.title}{" "}
                    <span className="text-sm font-normal">
                      {" "}
                      • {article.source.name}{" "}
                    </span>{" "}
                  </h3>
                  <p className="text-sm">{article.description}</p>
                </div>
              </a>
            );
          })}
      </section>
    </>
  );
};

export default TopHeadlines;
