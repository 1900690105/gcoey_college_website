const textClasses = "text-lg md:text-xl mb-4";
const sectionClasses =
  "bg-background text-foreground py-12 px-6 md:px-12 lg:px-24";
const containerClasses = "max-w-7xl mx-auto";
const headingClasses = "text-3xl md:text-4xl font-bold mb-6 text-center";
const gridClasses = "grid grid-cols-1 md:grid-cols-2 gap-8";
const imageClasses = "w-full h-auto rounded-lg shadow-lg";

// Image Component
const StoryImage = () => (
  <div>
    <img
      src="/assets/hero/hero (2).png"
      alt="A journey through our history"
      className={imageClasses}
    />
  </div>
);

// Text Content Component
const StoryText = () => (
  <div className="flex flex-col justify-center">
    <p className={textClasses}>
      Our journey began with a simple idea: to create something extraordinary.
      From our humble beginnings, we've grown into a team of passionate
      individuals dedicated to making a difference.
    </p>
    <p className={textClasses}>
      Over the years, we've faced challenges and celebrated successes, each
      experience shaping who we are today. Our commitment to quality and
      innovation drives us forward, and we're excited for what the future holds.
    </p>
    <p className="text-lg md:text-xl">
      Join us as we continue to write our story, one chapter at a time.
    </p>
  </div>
);

// Main Component
const OurStory = () => {
  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        <h2 className={headingClasses}>Our Story</h2>
        <div className={gridClasses}>
          <StoryImage />
          <StoryText />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
