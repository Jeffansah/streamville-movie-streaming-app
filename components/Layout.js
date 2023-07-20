import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>StreamVille</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
