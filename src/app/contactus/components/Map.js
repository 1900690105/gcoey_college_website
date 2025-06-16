// components/Map.js
const Map = () => {
  return (
    <div className="container py-12">
      <div className="h-[450px] w-full -mt-8">
        <iframe
          className="w-full h-full rounded-sm"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.959316792251!2d-122.08424948469086!3d37.4219999798259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e8dd7c1e41%3A0x4c0f8e4b6e7f217b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1587664134807!5m2!1sen!2sus"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
