import "../styles/main.scss";
import "leaflet/dist/leaflet.css";
import { Analytics } from "@vercel/analytics/react";
import { Fragment, useState } from "react";
import Layout from "@/layout/Layout";
export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Layout isOpen={isOpen} setIsOpen={setIsOpen}>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </Fragment>
  );
}
