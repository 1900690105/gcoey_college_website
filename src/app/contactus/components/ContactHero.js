// components/ContactHero.js

const ContactHero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[28rem] sm:h-[32rem] flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/hero/hero (1).png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          Get in Touch with Us
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto">
          We are here to help. Feel free to reach out with any questions or
          concerns.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
