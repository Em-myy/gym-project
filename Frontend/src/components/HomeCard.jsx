import { useState } from "react";
import Card from "./Card";
import image1 from "../assets/1741a162-f6be-4940-97ee-8af75122804d.jpeg";
import image2 from "../assets/bd411b2e-b897-4181-b927-d39a9a5f1fc6.jpeg";
import image3 from "../assets/58d22e78-bb91-4d70-abaf-3e9fbb8cce16.jpeg";
import { cardTexts } from "./cardTexts";
const HomeCard = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  const getText = (idx, expanded) =>
    expanded === true
      ? cardTexts[idx]
      : cardTexts[idx].substring(0, 100) + "...";

  return (
    <div className="bg-gray-200 w-full max-h-full pb-[250px] md:pb-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 w-full mx-auto md:w-4/5 md:gap-x-20">
        <Card>
          <img className="w-full h-96 rounded-b-3xl" src={image1} />
          <div className="p-3 text-center md:text-start">
            <h4 className="text-red-600 text-3xl mb-3">Gym Fit</h4>
            <h1 className="text-4xl mb-3">Weight Loss Training</h1>
            <p className="text-1xl mb-3">{getText(0, isExpanded1)}</p>
            <h4
              className="text-2xl text-red-600 cursor-pointer"
              onClick={() => setIsExpanded1((prev) => !prev)}
            >
              {isExpanded1 === false ? "Read More" : "Show Less"}
            </h4>
          </div>
        </Card>

        <Card>
          <img className="w-full h-96 rounded-b-3xl" src={image2} />
          <div className="p-3 text-center md:text-start">
            <h4 className="text-red-600 text-3xl mb-3">Gym Fit</h4>
            <h1 className="text-4xl mb-3">Martial Arts Training</h1>
            <p className="text-1xl mb-3">{getText(1, isExpanded2)}</p>
            <h4
              className="text-2xl text-red-600 cursor-pointer"
              onClick={() => setIsExpanded2((prev) => !prev)}
            >
              {isExpanded2 === false ? "Read More" : "Show Less"}
            </h4>
          </div>
        </Card>

        <Card>
          <img className="w-full h-96 rounded-b-3xl" src={image3} />
          <div className="p-3 text-center md:text-start">
            <h4 className="text-red-600 text-3xl mb-3">Gym Fit</h4>
            <h1 className="text-4xl mb-3">Meditation & Yoga</h1>
            <p className="text-1xl mb-3">{getText(2, isExpanded3)}</p>
            <h4
              className="text-2xl text-red-600 cursor-pointer"
              onClick={() => setIsExpanded3((prev) => !prev)}
            >
              {isExpanded3 === false ? "Read More" : "Show Less"}
            </h4>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomeCard;
