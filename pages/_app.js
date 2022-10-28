import Layout from "../components/Layout";

const Myapp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Layout>
      {getLayout(<Component {...pageProps}></Component>)}
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </Layout>
  );
};

export default Myapp;
