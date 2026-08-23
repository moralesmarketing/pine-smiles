export default function PageHero({
  eyebrow,
  title,
  color = "pink",
}: {
  eyebrow?: string;
  title: string;
  color?: "pink" | "orange" | "blue" | "purple";
}) {
  const bg = {
    pink: "bg-pine-pink",
    orange: "bg-pine-orange",
    blue: "bg-pine-blue",
    purple: "bg-pine-purple",
  }[color];

  return (
    <div className={`${bg} text-white`}>
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20 text-center">
        {eyebrow && (
          <p className="uppercase tracking-widest text-sm font-semibold text-white/80 mb-2">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading text-3xl md:text-5xl">{title}</h1>
      </div>
    </div>
  );
}
