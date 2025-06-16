"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert("Contact details sent to your email!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center mb-12 max-w-2xl mx-auto text-center">
      <div className="mb-6 p-4 bg-white/10 rounded-full backdrop-blur-sm">
        <Image
          src="/logo.jpg"
          alt="GCOEY Logo"
          className="w-16 h-16 object-contain"
          height={64}
          width={64}
        />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
        Get In Touch With Us
      </h2>
      <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
        Enter your email to receive detailed contact information of our staff
        and student representatives for guidance.
      </p>
      <div className="w-full max-w-md">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 p-4 border border-gray-600 rounded-lg bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send →"}
          </button>
        </div>
      </div>
    </div>
  );
};

const LinkList = ({ title, links, icon }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      {icon && <span className="text-blue-400 text-xl">{icon}</span>}
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href="#"
            className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 block py-1"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const DepartmentsList = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <span className="text-blue-400 text-xl">🎓</span>
      <h3 className="text-lg font-bold text-white">Departments</h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
      {[
        {
          code: "CSE",
          name: "Computer Engineering",
          link: "/department?dept=CSE",
        },
        {
          code: "EE",
          name: "Electrical Engineering",
          link: "/department?dept=EE",
        },
        {
          code: "EXTC",
          name: "Electronics & Telecom",
          link: "/department?dept=EXTC",
        },
        { code: "CE", name: "Civil Engineering", link: "/department?dept=CE" },
        {
          code: "ME",
          name: "Mechanical Engineering",
          link: "/department?dept=ME",
        },
      ].map((dept, index) => (
        <div key={index} className="group">
          <div className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-700/30">
            <div className="text-sm opacity-75 group-hover:opacity-100 transition-opacity">
              <Link href={dept.link}> {dept.name}</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SocialLinks = () => (
  <div className="flex justify-center space-x-6 mb-8">
    {[
      { name: "Facebook", icon: "📘" },
      { name: "Twitter", icon: "🐦" },
      { name: "LinkedIn", icon: "💼" },
      { name: "Instagram", icon: "📷" },
      { name: "YouTube", icon: "📺" },
    ].map((social, index) => (
      <a
        key={index}
        href="#"
        className="w-12 h-12 bg-gray-700/50 hover:bg-blue-600 rounded-full flex items-center justify-center text-xl transition-all duration-300 transform hover:scale-110 hover:rotate-6"
        aria-label={social.name}
      >
        {social.icon}
      </a>
    ))}
  </div>
);

const Footer = () => (
  <footer className="pt-8 border-t border-gray-700/50">
    <SocialLinks />
    <div className="text-center space-y-4">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400 text-sm">
        <p>© 2024 Government College of Engineering Yavatmal</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
      <p className="text-xs text-gray-500">
        Empowering minds, building futures since 1984
      </p>
    </div>
  </footer>
);

const FooterHome = () => (
  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>

    <div className="relative z-10 p-6 sm:p-8 lg:p-12 max-w-7xl mx-auto">
      <ContactForm />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
        <LinkList
          title="Quick Links"
          links={["Home", "About Us", "Admissions", "Contact"]}
          icon="🏛️"
        />
        <LinkList
          title="Student Hub"
          links={["Projects", "Events", "Gallery", "Placement"]}
          icon="🎯"
        />
        <LinkList
          title="Resources"
          links={["Library", "Labs", "Research", "Faculty"]}
          icon="📚"
        />
        <DepartmentsList />
      </div>

      <Footer />
    </div>
  </div>
);

export default FooterHome;

// import Image from "next/image";

// const textMutedForeground = "text-white";
// const hoverTextForeground = "hover:text-foreground";
// const fontBold = "font-bold";

// const ContactForm = () => (
//   <div className="flex flex-col items-center mb-8 ">
//     <Image
//       src={"/logo.jpg"}
//       alt="Logo"
//       className="mb-4 w-20"
//       height={100}
//       width={700}
//     />
//     <h2 className="text-xl font-bold text-white">
//       Enter Email For Contact Details
//     </h2>
//     <p className={`${textMutedForeground} text-white`}>
//       We Send You Our Details With Proper Contact Of Staff And Student Head For
//       Your Guide.
//     </p>
//     <div className="flex gap-2 items-center justify-center">
//       <input
//         type="email"
//         placeholder="Your Email Address"
//         className="mt-4 p-2 border border-border rounded-md w-80"
//       />
//       <button className="mt-4 bg-primary text-primary-foreground p-2 rounded-md">
//         Send ➔
//       </button>
//     </div>
//   </div>
// );

// const LinkList = ({ title, links }) => (
//   <div>
//     <h3 className={fontBold}>{title}</h3>
//     <ul>
//       {links.map((link, index) => (
//         <li key={index}>
//           <a
//             href="#"
//             className={`${textMutedForeground} ${hoverTextForeground}`}
//           >
//             {link}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const DepartmentsList = () => (
//   <div>
//     <h3 className={fontBold}>Departments</h3>
//     <ul>
//       {["CO", "EE", "EXTC", "CE", "ME"].map((dept, index) => (
//         <li key={index} className={textMutedForeground}>
//           {dept}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const Footer = () => (
//   <footer className="mt-8 text-center text-muted-foreground">
//     <p>Copywrite @ gcoey 2024</p>
//   </footer>
// );

// const FooterHome = () => (
//   <div className="bg-background text-white p-8 bg-gray-800">
//     <ContactForm />
//     <div className="grid grid-cols-4 gap-8">
//       <LinkList title="Company" links={["Home", "About", "FAQs", "Contact"]} />
//       <LinkList
//         title="Get In Touch"
//         links={["Projects", "Posts", "Gallery", "Events"]}
//       />
//       <DepartmentsList />
//     </div>
//     <Footer />
//   </div>
// );

// export default FooterHome;
