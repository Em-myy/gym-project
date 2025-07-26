import { useState } from "react";
import { Link } from "react-router-dom";
import { Schedule } from "./Schedule";
const ClassSchedule = () => {
  const [schedule1, setSchedule1] = useState(Schedule[0].classes[0]);
  const [schedule2, setSchedule2] = useState(Schedule[0].classes[1]);
  const [schedule3, setSchedule3] = useState(Schedule[0].classes[2]);
  const [active, setActive] = useState(null);

  const getScheduleLevel1 = (idx) => {
    setSchedule1(Schedule[idx].classes[0]);
  };
  const getScheduleLevel2 = (idx) => {
    setSchedule2(Schedule[idx].classes[1]);
  };
  const getScheduleLevel3 = (idx) => {
    setSchedule3(Schedule[idx].classes[2]);
  };

  const handleActive = (idx) => {
    setActive(idx === active ? null : idx);
  };

  const getSchedule = (idx) => {
    getScheduleLevel1(idx);
    getScheduleLevel2(idx);
    getScheduleLevel3(idx);
    handleActive(idx);
  };

  return (
    <div className="bg-gray-900 pt-20 z-0 text-white">
      <div className="pt-10 flex flex-col items-center w-full">
        <div className="mb-10 flex flex-col justify-center items-center">
          <div className="text-2xl text-red-700">Our Schedule</div>
          <div className="text-6xl text-center">Weekly Class Schedule</div>
        </div>

        <div className="grid grid-row-7 gap-2 text-center md:w-full lg:w-4/5 md:flex md:justify-evenly w-4/5 mb-8">
          <h3
            className={`rounded-full cursor-pointer pt-3 pb-3 pl-5 pr-5 ${
              active === 0 ? "bg-red-900" : "bg-gray-800 hover:bg-red-700"
            }`}
            onClick={() => getSchedule(0)}
          >
            Sunday
          </h3>
          <h3
            className={`rounded-full cursor-pointer pt-3 pb-3 pl-5 pr-5 ${
              active === 1 ? "bg-red-900" : "bg-gray-800 hover:bg-red-700"
            }`}
            onClick={() => getSchedule(1)}
          >
            Monday
          </h3>
          <h3
            className={`rounded-full cursor-pointer pt-3 pb-3 pl-5 pr-5 ${
              active === 2 ? "bg-red-900" : "bg-gray-800 hover:bg-red-700"
            }`}
            onClick={() => getSchedule(2)}
          >
            Tuesday
          </h3>
          <h3
            className={`rounded-full cursor-pointer pt-3 pb-3 pl-5 pr-5 ${
              active === 3 ? "bg-red-900" : "bg-gray-800 hover:bg-red-700"
            }`}
            onClick={() => getSchedule(3)}
          >
            Wednesday
          </h3>
          <h3
            className={`rounded-full cursor-pointer pt-3 pb-3 pl-5 pr-5 ${
              active === 4 ? "bg-red-900" : "bg-gray-800 hover:bg-red-700"
            }`}
            onClick={() => getSchedule(4)}
          >
            Thursday
          </h3>
          <h3
            className={`rounded-full cursor-pointer pt-3 pb-3 pl-5 pr-5 ${
              active === 5 ? "bg-red-900" : "bg-gray-800 hover:bg-red-700"
            }`}
            onClick={() => getSchedule(5)}
          >
            Friday
          </h3>
          <h3
            className={`rounded-full cursor-pointer pt-3 pb-3 pl-5 pr-5 ${
              active === 6 ? "bg-red-900" : "bg-gray-800 hover:bg-red-700"
            }`}
            onClick={() => getSchedule(6)}
          >
            Saturday
          </h3>
        </div>

        {/* For the first level */}
        <div className="grid grid-row-4 gap-3 md:grid-cols-5 w-4/5 bg-gray-700 p-4 mb-6 rounded-2xl">
          <div className="flex justify-center">{schedule1.days}</div>

          <div className="flex gap-2 justify-center md:flex-col md:items-center">
            <h1>Class-Name:</h1>
            <h1>{schedule1.class}</h1>
          </div>

          <div className="flex gap-2 justify-center md:flex-col md:items-center">
            <h1>Our-Time:</h1>
            {schedule1.time}
          </div>

          <div className="flex gap-2 justify-center md:flex-col md:items-center">
            <h1>Trainer-Name:</h1>
            {schedule1.instructor}
          </div>

          <Link
            to="/services"
            className="border-2 border-dotted rounded-full border-red-700 text-red-500 p-2 flex justify-center items-center"
          >
            <div>Discover More</div>
          </Link>
        </div>

        {/* For the second level */}
        <div className="grid grid-row-4 gap-3 md:grid-cols-5 w-4/5 bg-gray-700 p-4 mb-6 rounded-2xl">
          <div className="flex justify-center">{schedule1.days}</div>

          <div className="flex gap-2 justify-center md:flex-col md:items-center">
            <h1>Class-Name:</h1>
            {schedule2.class}
          </div>

          <div className="flex gap-2 justify-center md:flex-col md:items-center">
            <h1>Our-Time:</h1>
            {schedule2.time}
          </div>

          <div className="flex gap-2 justify-center md:flex-col md:items-center">
            <h1>Trainer-Name:</h1>
            {schedule2.instructor}
          </div>

          <Link
            to="/services"
            className="border-2 border-dotted rounded-full border-red-700 text-red-500 p-2 flex justify-center items-center"
          >
            <div>Discover More</div>
          </Link>
        </div>

        {/* For the third level */}
        <div className="grid grid-row-4 gap-3 md:grid-cols-5 w-4/5 bg-gray-700 p-4 mb-6 rounded-2xl">
          <div className="flex justify-center">{schedule1.days}</div>

          <div className="flex gap-2 justify-center md:flex-col md:items-center">
            <h1>Class-Name:</h1>
            {schedule3.class}
          </div>

          <div className="flex gap-2 justify-center md:flex-col md:items-center">
            <h1>Our-Time:</h1>
            {schedule3.time}
          </div>

          <div className="flex gap-2 justify-center md:flex-col md:items-center">
            <h1>Trainer-Name:</h1>
            {schedule3.instructor}
          </div>

          <Link
            to="/services"
            className="border-2 border-dotted rounded-full border-red-700 text-red-500 p-2 flex justify-center items-center"
          >
            <div>Discover More</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;
