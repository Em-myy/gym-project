import NavBar from "../components/NavBar";
import SignUp from "../components/SignUp";
import SecondFooter from "../components/SecondFooter";

const SignUpPage = () => {
  return (
    <>
      <div className="bg-violet-500 text-white mb-2 pb-2">
        <NavBar />
      </div>
      <SignUp />
      <SecondFooter />
    </>
  );
};

export default SignUpPage;
