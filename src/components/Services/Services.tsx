import React from "react";
import ServiceCard from "./ServiceCard";
import { MdOutlineWeb } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaSearch, FaCloudflare } from "react-icons/fa";

const serviceData = [
  {
    id: 1,
    icon: <MdOutlineWeb size={45} />,
    title: "Web Design",
    description:
      "Our professional UX/UI designer will create a unique design tailored specifically for your brand.",
    color: "bg-tertiary",
  },
  {
    id: 2,
    icon: <FaSearch size={45} />,
    title: "SEO",
    description:
      "We ensure that your website is SEO optimized and meets the main search engine optimazation requirements.",
    color: "bg-secondary/30",
  },
  {
    id: 3,
    icon: <FaCode size={45} />,
    title: "Web Development",
    description:
      "We can provide range of web development services to suit the needs of your growing business.",
    color: "bg-secondary",
  },
  {
    id: 4,
    icon: <GiShoppingBag size={45} />,
    title: "Ecommerce",
    description:
      "Our Professional team can help set up, manage and grow your business online e-commerce store using latest technologies.",
    color: "bg-primary",
  },
  {
    id: 5,
    icon: <FaCloudflare size={45} />,
    title: "Hosting & Deployment",
    description:
      "We can help Hosting your business websites using secure,scalable and fast hosting services.",
    color: "bg-primary/50",
  },
];

const Services = () => {
  return (
    <div className=" min-h-screen container  bg-white/20 flex flex-col justify-center items-center gap-10 py-10">
      <h1
        data-aos="fade-up"
        className=" text-3xl md:text-5xl font-bold text-center px-6 w-full md:w-3/4"
      >
        Save time managing your business with our services
      </h1>
      <p
        data-aos="fade-up"
        className=" text-md text-gray-500 font-semibold leading-4 tracking-wide px-8  md:text-base w-full md:w-3/4 text-center"
      >
        We specialize in a small business web design and development for clients
        anywhere in the world.
      </p>

      <div
        data-aos="fade-up"
        className=" grid grid-cols-2 gap-2 md:grid-cols-3  md:gap-10"
      >
        {serviceData.map((ele) => (
          <ServiceCard
            key={ele.id}
            id={ele.id}
            icon={ele.icon}
            title={ele.title}
            description={ele.description}
            color={ele.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
