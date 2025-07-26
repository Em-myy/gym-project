import NavBar from "../components/NavBar";
import About from "../components/About";
import SecondFooter from "../components/SecondFooter";
const AboutPage = () => {
  return (
    <>
      <div className="text-white bg-indigo-800 pb-2">
        <NavBar />
      </div>
      <About />
      <div>
        <SecondFooter />
      </div>
    </>
  );
};

export default AboutPage;
