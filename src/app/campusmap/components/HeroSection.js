export default function HeroSection() {
  return (
    <section
      className="bg-cover bg-center h-96 text-white"
      style={{
        backgroundImage: `url(/assets/hero/hero.jpg)`,
      }} // Use the imported image
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Campus Infrastructure & Map</h1>
          <p className="mt-4 text-lg">
            Explore our campus facilities and navigate easily.
          </p>
        </div>
      </div>
    </section>
  );
}
