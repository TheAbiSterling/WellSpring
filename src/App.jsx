import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Services } from "./components/services";
import { About } from "./components/about";
import { Features } from "./components/features";
import { Support } from "./components/support";
// import { testimonials } from "./components/testimonials";
import { TalkToUs } from "./components/talktous";
// import { portfolio } from "./components/portfolio";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Services data={landingPageData.Services} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <TalkToUs />
      <Support data={landingPageData.Support} />
      <Contact data={landingPageData.Contact} />
      <Footer />
    </div>
  );
};

export default App;
