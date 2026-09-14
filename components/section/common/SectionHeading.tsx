export default function SectionHeading({
  title,
  meta,
}: {
  title: string;
  meta?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-baseline justify-between gap-5">
      <h2 className="text-base font-semibold tracking-tight">{title}</h2>
      {meta ? (
        <span className="text-xs text-muted-foreground">{meta}</span>
      ) : null}
    </div>
  );
}
