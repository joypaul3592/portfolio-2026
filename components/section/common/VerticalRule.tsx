export default function VerticalRule({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`mx-auto w-px bg-border ${className || "h-20 "}`}
    />
  );
}
