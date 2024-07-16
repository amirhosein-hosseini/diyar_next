import "../styles/globals.css"
import Layout from "./layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {

  const router = useRouter();
  
  // Define routes where you don't want to show the layout
  const noLayoutRoutes = ['/login'];

  const isLayoutNeeded = !noLayoutRoutes.includes(router.pathname);



  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //     <ToastContainer />
  //   </Layout>
  // );

  return isLayoutNeeded ? (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  ) : (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
