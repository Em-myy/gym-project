import { useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
const QuestionSection = () => {
  const [answer1, setAnswer1] = useState(false);
  const [answer2, setAnswer2] = useState(false);
  const [answer3, setAnswer3] = useState(false);

  const showAnswer1 = () => {
    setAnswer1(!answer1);
  };
  const showAnswer2 = () => {
    setAnswer2(!answer2);
  };
  const showAnswer3 = () => {
    setAnswer3(!answer3);
  };

  return (
    <div className="flex flex-col gap-y-6 pb-[450px] md:pb-[180px] md:grid md:grid-cols-2 md:gap-x-6 md:px-12 z-0">
      <div className="left-section">
        <div className="bg-gray-100 rounded-1xl overflow-hidden max-w-[700px] mb-3 mt-3 shadow-md">
          <div
            className={`first-question flex justify-between max-w-[700px] ${
              answer1 ? "bg-gray-300" : "bg-white"
            }`}
          >
            <div className="text-2xl font-bold pl-2">
              What are your gym's operating hours?
            </div>
            <div onClick={showAnswer1}>
              {answer1 === false ? (
                <FaCaretDown className="border bg-red-700 text-white text-4xl cursor-pointer" />
              ) : (
                <FaCaretUp className="border bg-red-700 text-white text-4xl cursor-pointer" />
              )}
            </div>
          </div>

          {answer1 && (
            <div className="text-[20px] text-gray-600 pl-2 text-opacity-70">
              Our gym is open from 5:00 AM to 11:00 PM on weekdays and 6:00 AM
              to 9:00 PM on weekends. Holiday hours may vary, so check our
              website or app for updates.
            </div>
          )}
        </div>

        <div className="second-question bg-gray-100 rounded-1xl overflow-hidden max-w-[700px] mb-3 shadow-md">
          <div
            className={`flex justify-between max-w-[700px] ${
              answer2 ? "bg-gray-300" : "bg-white"
            }`}
          >
            <div className="text-2xl font-bold pl-2">
              What should i bring for my first workout?
            </div>
            <div onClick={showAnswer2}>
              {answer2 === false ? (
                <FaCaretDown className="border bg-red-700 text-white text-4xl cursor-pointer" />
              ) : (
                <FaCaretUp className="border bg-red-700 text-white text-4xl cursor-pointer" />
              )}
            </div>
          </div>

          {answer2 && (
            <div className="text-[20px] text-gray-600 pl-2 text-opacity-70">
              Bring a water bottle, towel and workout clothes (including proper
              gym shoes). We provide lockers (bring your own lock or rent one),
              and showers are available if you need to freshen up afterward
            </div>
          )}
        </div>

        <div className="third-question bg-gray-100 rounded-1xl overflow-hidden max-w-[700px] shadow-md">
          <div
            className={`flex justify-between max-w-[700px] ${
              answer3 ? "bg-gray-300" : "bg-white"
            }`}
          >
            <div className="text-2xl font-bold pl-2">
              How are your equipments?
            </div>
            <div onClick={showAnswer3}>
              {answer3 === false ? (
                <FaCaretDown className="border bg-red-700 text-white text-4xl cursor-pointer" />
              ) : (
                <FaCaretUp className="border bg-red-700 text-white text-4xl cursor-pointer" />
              )}
            </div>
          </div>

          {answer3 && (
            <div className="text-[20px] text-gray-600 pl-2 text-opacity-70">
              We have world class equipments like the power cage, squat racks
              and multiple olympic lifting platforms with bumper plates and but
              some of them are located in the general area so we kindly ask
              members to share during peak hours.
            </div>
          )}
        </div>
      </div>

      <div className="right-section ml-2">
        <div className="text-red-600 text-2xl">Our FAQ</div>
        <div className="text-7xl font-bold mb-2">
          Get every single answer here.
        </div>
        <div className="text-[20px] text-gray-600 mb-2">
          Our gym is fully equipped for every type of workout whether yo re
          power lifting, functional training, cardio or rehab friendly
          exercises. We have multiple equipments fully functional and also world
          class. If you are are new or you need low impact options we offer
          selected machines, cable systems and resistance bands for safe
          controlled movements.
        </div>
        <div className="text-[20px] text-gray-600">
          During peak hours, we recommend using the sign-up sheets for weight
          equipments and limit cardio sessions to 30 minutes to keep things
          fair. Staffs are always around to help with adjustments or demo
          equipments-just ask!
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
