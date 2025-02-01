const BtnActive = ({btnText}: {btnText: string}) => {
  return (
    <button className="bg-white text-black px-4 py-2 rounded hover:bg-neutral-200 transition-colors">
      {btnText}
    </button>
  );
};

export default BtnActive;
