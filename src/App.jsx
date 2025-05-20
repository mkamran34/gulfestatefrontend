import { useEffect, useLayoutEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Loader from "./components/Loader";
import Homepage from "./pages/Home/Homepage";
import AboutPage from "./pages/AboutUs/AboutPage";
import ContactUs from "./pages/ContactUs/ContactUs";
import ServicePage from "./pages/Services/ServicePage";
import PropertiesPage from "./pages/Properties/PropertiesPage";
import PropertyDetails from "./pages/PropertyDetails";
import BuyPropertyPage from "./pages/Buy-property/BuyPropertyPage";
import BlogsPage from "./pages/Blogs/BlogsPage";
import BlogDetails from "./pages/Blogs/BlogDetails";
import FloatingSidebar from "./components/LanguageSwitcher";
import NoPageFound from "./pages/NoPageFound";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsandCondition from "./pages/TermsandCondition/TermsandCondition";
import DreamProperty from "./pages/Dream-Property/Dream-Property";
function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <>
          <I18nextProvider i18n={i18n}>
            <FloatingSidebar />
            <BrowserRouter>
              <Wrapper>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/services" element={<ServicePage />} />
                  <Route path="/properties" element={<PropertiesPage />} />
                  <Route path="/property/:id" element={<PropertyDetails />} />
                  <Route path="/buy-property" element={<BuyPropertyPage />} />
                  <Route path="/blogs" element={<BlogsPage />} />
                  <Route path="/blog/:id" element={<BlogDetails />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/why-dubai-espanol" element={<DreamProperty/>} />
                  <Route
                    path="/terms-and-conditions" element={<TermsandCondition />}
                  />
                  <Route path="*" element={<NoPageFound />} />
                </Routes>
              </Wrapper>
            </BrowserRouter>
          </I18nextProvider>
        </>
      )}
    </>
  );
}

export default App;
