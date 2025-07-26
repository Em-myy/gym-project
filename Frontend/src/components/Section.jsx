const Section = () => {
  return (
    <div className="w-full flex justify-center absolute z-10 bottom-[-80px]">
      <div className="flex flex-col min-w-screen md:flex-row md:justify-evenly bg-red-700 text-white p-5 m-0 w-5/6 rounded-2xl">
        <div>
          <div className="text-4xl">874</div>
          <div className="text-2xl">Our Happy Clients</div>
        </div>

        <div>
          <div className="text-4xl">789</div>
          <div className="text-2xl">Our Best Trainers</div>
        </div>

        <div>
          <div className="text-4xl">985</div>
          <div className="text-2xl">Cup Of Coffee</div>
        </div>

        <div>
          <div className="text-4xl">698</div>
          <div className="text-2xl">Our Latest Equipments</div>
        </div>
      </div>
    </div>
  );
};

export default Section;
