import Layout from "../components/Layout";
import wrapper from "../store/configureStore";
import PropTypes from "prop-types";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"



const Myapp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  const [queryClient] = useState(()=> new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
    <Layout>
      {getLayout(<Component {...pageProps}></Component>)}
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </Layout>
    <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
  );
};
Myapp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(Myapp);
