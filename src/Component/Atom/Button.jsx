export default function Button({
  children,
  onClick,
  className,
  color = "bg-[#836FFF]",
  hoverColor = "hover:bg-[#950FFF]",
}) {
  return (
    <button
      className={`px-6 py-3 rounded-xl font-bold ${color} ${className} ${hoverColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
