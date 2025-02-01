const BtnLight = ({btnText}: {btnText: string}) => {
  return (
    <button className="bg-black border border-neutral-800 text-white px-4 py-2 rounded hover:bg-neutral-800 transition-colors">
      {btnText}
    </button>
  );
};

export default BtnLight;
