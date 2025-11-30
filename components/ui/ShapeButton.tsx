const ResourceButton = ({ value}: {value: any}) => {
  return (
    <div
      className="btn-hexagon relative flex items-center justify-center w-10 h-5 text-white font-bold text-xl p-1"
>
      <span className="relative z-10 text-[11px] px-1 py-2 m-2 font-mono font-extralight tracking-wider">{value}</span>
    </div>
  )
};

export default ResourceButton;
