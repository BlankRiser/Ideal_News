import Footer from "../components/Footer/Footer";
import Dropbox from "../components/Dropbox/Dropbox";
import Head from "next/head";
import countries from "../data/api/countries";
import Navbar from "components/Navbar/Navbar";
import Everything from "Layout/NewsLayout/Everything/Everything";
import TopHeadlines from "Layout/NewsLayout/TopHeadlines/TopHeadlines";

// const everything = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API}`;

// export async function getServerSideProps() {
//   const res = await fetch(everything);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

// const sources = `https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.NEWS_API}&country=${countries[0].shortHand}`;

// export async function getServerSideProps() {
//   const res = await fetch(sources);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

export default function Home(data) {
  return (
    <div className="">
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {data.data.articles.map((article, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <img src={article.urlToImage} alt="article" className="w-1/2" />
            <h1 className="text-2xl prose">{article.title}</h1>
            <p>{article.description}</p>
          </div>
        );
      })} */}

      <main
        className=""
        style={{
          display: "grid",
          height: "100%",
          gridTemplateColumns: 'repeat(2, "50%")',
          gridTemplateRows: 'repeat(2, "50%")',
          gridAutoColumns: "50%",
          gridAutoFlow: "column",
        }}
      >
        <div
          className=""
          style={{
            gridArea: "span 1 / span 1",
            borderLeft: "2px solid rgb(107, 114, 128)",
          }}
        >
          {/* {data.data.sources.map((source, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <p>
                  {source.name} : {source.country}
                </p>
              </div>
            );
          })} */}
          <Everything />
        </div>
        <div
          className=""
          style={{
            gridArea: "span 1 / span 1",
            borderLeft: "2px solid rgb(107, 114, 128)",
            borderRight: "2px solid rgb(107, 114, 128)",
          }}
        >
          <TopHeadlines />
        </div>
        {/* <div
          className=""
          style={{
            gridArea: "span 1 / span 1",
            borderLeft: "1px solid rgb(107, 114, 128)",
          }}
        >
          3
        </div>
        <div
          className=""
          style={{
            gridArea: "span 1 / span 1",
            borderLeft: "1px solid rgb(107, 114, 128)",
          }}
        >
          4
        </div>
        <div
          className=""
          style={{
            gridArea: "span 1 / span 1",
            borderLeft: "1px solid rgb(107, 114, 128)",
          }}
        >
          5
        </div>
        <div
          className=""
          style={{
            gridArea: "span 1 / span 1",
            borderLeft: "1px solid rgb(107, 114, 128)",
          }}
        >
          6
        </div> */}
      </main>
    </div>
  );
}
