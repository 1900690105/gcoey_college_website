import React from "react";

// Shared Tailwind class strings
const sharedClasses = {
  container: "relative bg-cover bg-center h-64",
  overlay: "absolute inset-0 bg-black opacity-50",
  content:
    "relative z-10 flex flex-col items-center justify-center h-full text-center text-white",
  heading: "text-4xl md:text-6xl font-bold mb-4",
  paragraph: "text-lg md:text-2xl mb-8",
  button:
    "bg-primary text-primary-foreground hover:bg-primary/80 px-6 py-3 rounded-lg",
};

// Background component
const Background = ({ imageUrl }) => (
  <div
    className={sharedClasses.container}
    style={{ backgroundImage: `url('${imageUrl}')` }}
  >
    <div className={sharedClasses.overlay}></div>
    <Content />
  </div>
);

// Content component
const Content = () => (
  <div className={sharedClasses.content}>
    <Heading text="Welcome to GCoEY" />
  </div>
);

// Heading component
const Heading = ({ text }) => <h1 className={sharedClasses.heading}>{text}</h1>;

// Paragraph component
const Paragraph = ({ text }) => (
  <p className={sharedClasses.paragraph}>{text}</p>
);

// Button component
const Button = ({ text }) => (
  <button className={sharedClasses.button}>{text}</button>
);

// Main component
const HeroSection = () => {
  const imageUrl = "/assets/hero/hero (1).png";

  return <Background imageUrl={imageUrl} />;
};

export default HeroSection;
