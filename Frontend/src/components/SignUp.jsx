import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    email: "",
    dob: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSuccess = () => {
    toast.success("User created successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });
    setTimeout(() => {
      navigate("/services");
    }, 4000);
  };

  const handleFailure = () => {
    toast.error("User creation failed", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        formData
      );
      handleSuccess();
      setFormData({
        username: "",
        age: "",
        email: "",
        dob: "",
        gender: "",
      });
    } catch (error) {
      handleFailure();
    }
  };

  return (
    <main>
      <div className="text-2xl text-center font-bold mt-2">
        Sign Up To Join MaxFit.
      </div>
      <section className="m-8 bg-slate-200 p-4 rounded-2xl shadow-md overflow-hidden">
        <form onSubmit={handleSubmit}>
          <fieldset className="flex flex-col md:flex-row mb-4 items-center">
            <label className="text-[20px] font-semibold md:mr-2">Name: </label>
            <input
              className="md:ml-[70px] w-full md:w-5/6 border-2 bg-zinc-300 text-[19px] px-1 py-2 rounded-md focus:outline-none shadow-xl focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Name"
              required
              name="username"
              value={formData.username}
            />
          </fieldset>

          <fieldset className="flex flex-col md:flex-row mb-4 items-center">
            <label className="text-[20px] font-semibold md:mr-7">Age: </label>
            <input
              className="md:ml-[70px] w-24 border-2 bg-zinc-300 text-[19px] px-1 py-2 rounded-md focus:outline-none shadow-xl focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              type="number"
              required
              placeholder="14"
              name="age"
              min="16"
              max="120"
              value={formData.age}
            />
          </fieldset>

          <fieldset className="flex flex-col md:flex-row mb-4 items-center">
            <label className="text-[20px] font-semibold md:mr-2">
              E-Mail:{" "}
            </label>
            <input
              className="md:ml-[70px] w-full md:w-5/6 border-2 bg-zinc-300 text-[19px] px-1 py-2 rounded-md focus:outline-none shadow-xl focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              type="email"
              placeholder="Enter Your Email"
              required
              name="email"
              value={formData.email}
            />
          </fieldset>

          <fieldset className="flex flex-col md:flex-row mb-4 items-center">
            <label className="text-[20px] font-semibold mr-2">
              Date-Of-Birth:{" "}
            </label>
            <input
              className="w-40 border-2 bg-zinc-300 text-[19px] px-1 py-2 rounded-md focus:outline-none shadow-xl focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              onChange={handleChange}
              type="date"
              placeholder="Enter Your Date Of Birth"
              required
              name="dob"
              value={formData.dob}
            />
          </fieldset>

          <fieldset className="mb-4">
            <legend className="text-[20px] font-bold mb-2 text-center md:text-start">
              Gender
            </legend>
            <div className="flex flex-row justify-evenly md:flex-col">
              <div className="flex items-center">
                <label className="text-[20px] font-semibold md:mr-2">
                  Male:{" "}
                </label>
                <input
                  className="w-6 h-6 text-indigo-600 ml-2 md:ml-8 rounded-md focus:outline-none shadow-xl cursor-pointer"
                  onChange={handleChange}
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                />
              </div>
              <div className="flex items-center">
                <label className="text-[20px] font-semibold md:mr-2">
                  Female:{" "}
                </label>
                <input
                  className="w-6 h-6 text-indigo-600 ml-3 rounded-md focus:outline-none shadow-xl cursor-pointer"
                  onChange={handleChange}
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="flex flex-col">
            <button className="border-2 px-1 py-2 rounded-md text-[20px] font-bold bg-zinc-300 hover:bg-indigo-800 hover:text-white mb-4 shadow-md">
              Submit
            </button>
          </fieldset>
        </form>
      </section>
      <ToastContainer />
    </main>
  );
};

export default SignUp;
