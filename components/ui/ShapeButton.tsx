type ResourceButtonProps = {
  value : any;
  className?: string;
  style?: React.CSSProperties;
}

const ResourceButton = ({value, className, style}: ResourceButtonProps) => {
  return (
    <div
      className={`btn-hexagon relative flex items-center justify-center w-fit h-5 text-white font-bold text-xl ${className} `}
      style={style}
>
      <span className="relative z-10 text-[12px] px-1 py-2 m-2 font-mono font-extralight tracking-wider pointer-none:">{value}</span>
    </div>
  )
};

export default ResourceButton;
