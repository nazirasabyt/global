import "../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

function MyApp({ Component, pageProps }) {
  const supportedChainIds = [100, 117];
  const connectors = {
    injected: {},
  };
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}>
      <Component {...pageProps} />
      <ToastContainer />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
