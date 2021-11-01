import LayoutWrapper from "Layout/Wrapper/LayoutWrapper";
import "style/global.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />;
    </LayoutWrapper>
  );
}

export default MyApp;
