import React, { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import countries from "data/api/countries";

import {
  ArrowRightIcon,
  ArrowSmRightIcon,
  SearchIcon,
} from "@heroicons/react/solid";

const Everything = ({ data }) => {
  const [search, setSearch] = useState("Bengaluru");
  const [fromDate, setFromDate] = useState("2021-10-31");
  const [toDate, setToDate] = useState("2021-10-31");

  const everything = `https://newsapi.org/v2/everything?q=${search}
  &from=${fromDate}
  &to=${toDate}
  &sortBy=popularity
  &apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`;

  const dataFetcher = (url) => axios.get(url).then((res) => res.data);

  const { data: news, error } = useSWR(everything, dataFetcher);

  // Use this during dev process - have only 100 calls per day :(
  // const news = {
  //   articles: [
  //     {
  //       author: "Reuters Staff",
  //       content: "MELBOURNE (Reuters) -.",
  //       description:
  //         "(Reporting By Rushil Dutta in Bengaluru and Melanie Burton in Melbourne Editing by Krishna Chandra Eluri & Simon Cameron-Moore)",
  //       publishedAt: "2021-10-20T05:56:00Z",
  //       title: "Rio Tinto aims to halve carbon emissions by 2030 - Reuters.com",
  //       url: "https://www.reuters.com/article/rio-tinto-emissions-idUSKBN2HA0GH",
  //       urlToImage:
  //         "https://static.reuters.com/resources/r/?m=02&d=20211020&t=2&i=1578394794&r=LYNXMPEH9J075&w=800",
  //       source: { id: "reuters", name: "Reuters" },
  //     },
  //   ],
  // };

  // console.log(news);
  // console.log(fromDate);
  // console.log(toDate);

  const selectedCountry = countries
    .filter((country) => country.name === data)
    .map((country) => country.shortHand);

  // console.log(`Country value : ${selectedCountry}`);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearch(e.target.value);
    }
  };

  return (
    <div>
      <section className="text-gray-400 focus-within:text-gray-600 p-1  border-b border-black">
        <div className="flex flex-row items-center">
          <SearchIcon className="ml-1 h-5 w-5 " />
          <input
            type="search"
            name=""
            id=""
            className="shadow-sm p-2 w-full outline-none ring-gray-400 "
            placeholder="Search a topic"
            onKeyPress={handleKeyPress}
          />
        </div>
        {/* <div className="flex flex-row justify-evenly">
          <input
            type="date"
            name=""
            id=""
            onChange={(e) => {
              setFromDate(e.target.value);
            }}
          />
          <input
            type="date"
            name=""
            id=""
            onChange={(e) => {
              setToDate(e.target.value);
            }}
          />
        </div> */}
      </section>
      <section>
        {!news ? (
          <div className="flex justify-center items center p-4">Loading...</div>
        ) : (
          <div>
            {news.articles.map((article, index) => {
              return (
                <a key={index} href={article.url} target="_blank">
                  <div className="flex flex-row justify-items-center-center group hover:bg-red-50 cursor-pointer py-2 border-b border-gray-700">
                    {!article.urlToImage ? (
                      <></>
                    ) : (
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="w-1/4 pl-2 object-cover"
                      ></img>
                    )}
                    <div className="px-2 overflow-hidden">
                      <h1 className="text-lg font-semibold">
                        {article.title}
                        {" • "}
                        <span className="text-base font-normal">
                          {article.author}
                        </span>{" "}
                      </h1>
                      <p className="">{article.description}</p>
                      <span className=" font-semibold flex felx-row text-center items-center text-gray-500 hover:text-primary">
                        {article.source.name}
                        <ArrowSmRightIcon className="h-5 w-5 text-gray-500 hover:text-primary" />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default Everything;
