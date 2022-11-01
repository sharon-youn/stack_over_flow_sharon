import Layout from "../components/Layout";
import wrapper from "../store/configureStore";
import PropTypes from "prop-types";
import { store } from "../redux/storeQ";
import { Provider } from "react-redux";



const Myapp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Provider store={store}>
    <Layout>
      {getLayout(<Component {...pageProps}></Component>)}
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </Layout>
    </Provider>
  );
};
Myapp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(Myapp);
