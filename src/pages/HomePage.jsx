import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import ClassSchedule from "../components/ClassSchedule";
import Section from "../components/Section";
import QuestionSection from "../components/QuestionSection";
import Footer from "../components/Footer";
import SecondSection from "../components/SecondSection";
const HomePage = () => {
  return (
    <>
      <div className="h-screen">
        <div className="bg-violet-800 h-3/4 text-white">
          <NavBar />
          <Hero />
        </div>

        <div>
          <HomeCard />
          <div className="relative">
            <Section />
          </div>
          <ClassSchedule />
        </div>

        <div>
          <QuestionSection />
          <div className="relative">
            <SecondSection />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
