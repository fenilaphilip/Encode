const InfoBox: React.FC<{ heading: string; children: string }> = ({
  heading,
  children,
}) => {
  return (
    <>
      <div className="bg-blue-300 rounded-lg p-4 mt-2 border-solid border-4 border-cyan-700  ">
        <h2 className="text-lg text-cyan-700">{heading}</h2>
        <p>{children}</p>
      </div>
    </>
  );
};

export default InfoBox;
