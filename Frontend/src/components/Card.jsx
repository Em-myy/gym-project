const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {children}
    </div>
  );
};

export default Card;
