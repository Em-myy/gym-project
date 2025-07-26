import NavBar from "../components/NavBar";
import Services from "../components/Services";
import SecondFooter from "../components/SecondFooter";
const ServicesPage = () => {
  return (
    <>
      <div className="bg-indigo-500 text-white mb-2 pb-2">
        <NavBar />
      </div>
      <Services />
      <SecondFooter />
    </>
  );
};

export default ServicesPage;
