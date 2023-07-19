import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>StreamVille</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
