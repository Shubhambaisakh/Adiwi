import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import Cursor from "./components/Cursor";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import CookieBar from "./components/CookieBar";

const App: React.FC = () => {

  useEffect(() => {
    // Disable all heavy animations for performance
    // Simple CSS animations only
    console.log('App loaded - using lightweight CSS animations');
  }, []);

  return (
    <BrowserRouter>
      <Cursor />
      <Header />

      <Layout>
        <AppRoutes />
        <CookieBar />
      </Layout>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
