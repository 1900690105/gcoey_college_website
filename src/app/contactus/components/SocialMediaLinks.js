// components/SocialMediaLinks.js
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const socialMedia = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com",
    color: "bg-blue-600",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://www.twitter.com",
    color: "bg-blue-400",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com",
    color: "bg-pink-500",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com",
    color: "bg-blue-700",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com",
    color: "bg-red-600",
  },
];

const SocialMediaLinks = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Connect With Us
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Stay updated with the latest news, events, and opportunities. Follow
          us on our social media channels.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {socialMedia.map((platform) => (
            <SocialMediaButton key={platform.name} {...platform} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SocialMediaButton = ({ name, icon: Icon, url, color }) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} text-white p-4 rounded-full transition duration-300 transform hover:scale-110 hover:shadow-lg flex items-center justify-center`}
      aria-label={`Follow us on ${name}`}
    >
      <Icon className="text-2xl" />
    </Link>
  );
};

export default SocialMediaLinks;
