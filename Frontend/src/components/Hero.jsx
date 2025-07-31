import image1 from "/gym_7924091.png";
const Hero = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center h-1/2 mt-10 gap-y-4 md:pb-[50px]">
        <img className="w-[200px] h-[200px]" src={image1} />
        <p className="text-8xl">Classes</p>
        <p className="text-4xl">Home / Classes</p>
      </div>
    </div>
  );
};

export default Hero;
