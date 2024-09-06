import React from "react";
import {
  FaReact,
  FaPaypal,
  FaSlack,
  FaTrello,
  FaAmazonPay,
  FaHtml5,
  FaWix,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import Slider from "react-slick";

const companiesData = [
  {
    id: 1,
    icon: <FaReact size={28} />,
    name: "Reactjs",
  },
  {
    id: 2,
    icon: <RiTailwindCssFill size={28} />,
    name: "TailwindCss",
  },
  {
    id: 3,
    icon: <RiNextjsFill size={28} />,
    name: "Nextjs",
  },
  {
    id: 4,
    icon: <FaHtml5 size={28} />,
    name: "HTML5",
  },
  {
    id: 5,
    icon: <FaTrello size={28} />,
    name: "Trello",
  },
  {
    id: 6,
    icon: <FaPaypal size={28} />,
    name: "paypal",
  },
  {
    id: 7,
    icon: <FaSlack size={28} />,
    name: "slack",
  },
  {
    id: 8,
    icon: <FaWix size={28} />,
    name: "Wix",
  },
];

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlides: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlides: 2,
        },
      },
    ],
  };
  return (
    <div className="bg-black text-white py-4">
      <div className="container">
        <Slider {...settings}>
          {companiesData.map((ele) => (
            <div className=" flex text-center space-x-3" key={ele.id}>
              <span className=" inline-block mt-2">{ele.icon}</span>
              <h1 className=" inline-block text-2xl font-bold">{ele.name}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
