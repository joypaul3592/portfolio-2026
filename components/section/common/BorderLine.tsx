export default function BorderLine() {
  return (
    <div className="border-b h-10 w-full relative ">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="w-full h-full relative">
          {Array.from({ length: 300 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-4 w-2 rotate-[-45deg] origin-top-left border-b border-[rgba(52,52,53,0.75)] dark:border-[rgba(52,52,53,0.35)]"
              style={{
                top: `${i * 10 - 120}px`,
                left: "-50%",
                width: "300%",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
