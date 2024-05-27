export default function WithArrow({
  children,
  className,
  sizeText = "2rem",
  letterSpace = "tracking-wide",
}) {
  return (
    <div className={className}>
      <h1
        className={`font-bold text-[#15F5BA] text-[${sizeText}] ${letterSpace}`}
      >
        {"< "}
        <span className="text-[#fff]">{children}</span>
        {" />"}
      </h1>
    </div>
  );
}
