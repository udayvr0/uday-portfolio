function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-16">

      <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>

    </div>
  );
}

export default SectionTitle;