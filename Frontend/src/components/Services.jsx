import Card from "./Card";
import { cardTexts } from "./cardTexts";
import image1 from "../assets/1741a162-f6be-4940-97ee-8af75122804d.jpeg";
import image2 from "../assets/bd411b2e-b897-4181-b927-d39a9a5f1fc6.jpeg";
import image3 from "../assets/58d22e78-bb91-4d70-abaf-3e9fbb8cce16.jpeg";
import image4 from "../assets/360d7744-2e05-4df0-817c-847d31792cc1.jpeg";
import image5 from "../assets/ce279a25-4cef-4c50-abf1-707daa1045a0.jpeg";
import image6 from "../assets/d19b7dea-438e-4f83-b266-448a83c944c0.jpeg";

const Services = () => {
  return (
    <main className="p-2">
      <div className="text-center text-4xl mb-4 font-bold">Our Services</div>
      <div className="flex justify-evenly mb-12">
        <div className="grid md:grid-cols-3 gap-4 w-4/5">
          <Card>
            <img className="h-96 w-full rounded-b-3xl" src={image1} />
            <div className="p-2">
              <h4 className="text-red-600 text-3xl mb-3">Gym Fit</h4>
              <h2 className="text-4xl mb-3 font-bold">Weight Loss Training</h2>
              <h3 className="text-[18px] mb-3 text-gray-700 text-opacity-80">
                {cardTexts[0]}
              </h3>
            </div>
          </Card>

          <Card>
            <img className="h-96 w-full rounded-b-3xl" src={image2} />
            <div className="p-2">
              <h4 className="text-red-600 text-3xl mb-3">Gym Fit</h4>
              <h2 className="text-4xl mb-3 font-bold">Martial Arts Training</h2>
              <h3 className="text-[18px] mb-3 text-gray-700 text-opacity-80">
                {cardTexts[1]}
              </h3>
            </div>
          </Card>

          <Card>
            <img className="h-96 w-full rounded-b-3xl" src={image3} />
            <div className="p-2">
              <h4 className="text-red-600 text-3xl mb-3">Gym Fit</h4>
              <h2 className="text-4xl mb-3 font-bold">Meditation & Yoga</h2>
              <h3 className="text-[18px] mb-3 text-gray-700 text-opacity-80">
                {cardTexts[2]}
              </h3>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex justify-evenly">
        <div className="grid md:grid-cols-3 gap-4 w-4/5">
          <Card>
            <img className="h-96 w-full rounded-b-3xl" src={image4} />
            <div className="p-2">
              <h4 className="text-red-600 text-3xl mb-3">Gym Fit</h4>
              <h2 className="text-4xl mb-3 font-bold">Weight Lifting</h2>
              <h3 className="text-[18px] mb-3 text-gray-700 text-opacity-80">
                {cardTexts[3]}
              </h3>
            </div>
          </Card>
          <Card>
            <img className="h-96 w-full rounded-b-3xl" src={image5} />
            <div className="p-2">
              <h4 className="text-red-600 text-3xl mb-3">Gym Fit</h4>
              <h2 className="text-4xl mb-3 font-bold">Martial Arts</h2>
              <h3 className="text-[18px] mb-3 text-gray-700 text-opacity-80">
                {cardTexts[4]}
              </h3>
            </div>
          </Card>
          <Card>
            <img className="h-96 w-full rounded-b-3xl" src={image6} />
            <div className="p-2">
              <h4 className="text-red-600 text-3xl mb-3">Gym Fit</h4>
              <h2 className="text-4xl mb-3 font-bold">Yoga</h2>
              <h3 className="text-[18px] mb-3 text-gray-700 text-opacity-80">
                {cardTexts[5]}
              </h3>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Services;
