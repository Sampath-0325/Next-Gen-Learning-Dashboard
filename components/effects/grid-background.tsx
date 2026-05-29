export default function GridBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-[#09090B]" />

      <div className="pointer-events-none fixed inset-0 -z-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_45%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </>
  );
}