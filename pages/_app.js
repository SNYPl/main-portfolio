import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import PortfolioHead from "@/src/PortfolioHead";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <PortfolioHead />
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
