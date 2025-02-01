import React from 'react';
import Heading from '../Heading';
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import prouduct from '../../assets/product.png'; 
import second from '../../assets/Productsec.png'
import third from '../../assets/Producthi.png'
import four from '../../assets/Productfou.png'
import secondPik from '../../assets/secondPik.png'
import thirdPik from '../../assets/thirdPik.png'
import fourPik from '../../assets/fourPik.png'
import secondPart from '../../assets/2nd product image.png';
import seondBanner from '../../assets/secondBanner.png';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from '../NextArrow';
import PrevArrow from '../PrevArrow';

function Product() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Array of products for the slider
  const products = [
    { id: 1, image: prouduct, name: "Basic Crew Neck Tee", price: "$44.00" },
    { id: 2, image: second, name: "Basic Crew Neck Tee", price: "$44.00" },
    { id: 3, image: third, name: "Basic Crew Neck Tee", price: "$44.00" },
    { id: 4, image: four, name: "Basic Crew Neck Tee", price: "$44.00" },
    // { id: 5, image: secondPart, name : "Basic Crew Neck Tee", price : "$44.00"}
  ];
  const secondproduct = [
    { id: 1, image: secondPart, name: "Basic Crew Neck Tee", price: "$44.00" },
    { id: 2, image: secondPik, name: "Basic Crew Neck Tee", price: "$44.00" },
    { id: 3, image: thirdPik, name: "Basic Crew Neck Tee", price: "$44.00" },
    { id: 4, image: fourPik, name: "Basic Crew Neck Tee", price: "$44.00" },

  ];

  return (
    <>
      <div className="productPart">
        <Container>
          <div className="pt-[128px] pb-[48px]">
            <Heading
              text={"New Arrival"}
              as={"h3"}
              className={"font-bold text-textColor text-[39px]"}
            />
          </div>

          {/* Slider Container */}
          <div className="slider-container">
            <Slider {...settings}>
              {products.map((product) => (
                <div key={product.id} className="w-full relative group px-2">
                  <Image imgSrc={product.image} imgAlt="Product Image" className={"w-full"} />
                  <Heading
                    text={"New"}
                    as={"p"}
                    className={"font-bold text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                  />
                  <div className="">
                    <Flex className={"items-center justify-between pt-4"}>
                      <Heading
                        text={product.name}
                        as={"p"}
                        className={"font-bold text-textColor text-[20px]"}
                      />
                      <Heading
                        text={product.price}
                        as={"p"}
                        className={"font-regular text-menuColor text-[16px]"}
                      />
                    </Flex>
                  </div>
                  <div className="bg-white p-7 absolute group-hover:block hidden top-[195px] left-0 w-full">
                    <Flex className={"items-center gap-4 justify-end"}>
                      <Heading
                        text={"Add to wish list"}
                        as={"p"}
                        className={"font-regular text-menuColor text-[16px] hover:text-black"}
                      />
                      <FaHeart />
                    </Flex>
                    <Flex className={"items-center gap-4 justify-end"}>
                      <Heading
                        text={"Compare"}
                        as={"p"}
                        className={"font-regular text-menuColor text-[16px] hover:text-black"}
                      />
                      <IoGitCompare />
                    </Flex>
                    <Flex className={"items-center gap-4 justify-end"}>
                      <Heading
                        text={"Add to cart"}
                        as={"p"}
                        className={"font-regular text-menuColor text-[16px] hover:text-black"}
                      />
                      <FaShoppingCart />
                    </Flex>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Second Part of Products */}
          <div className="">
            <Flex className={'justify-between'}>
              {secondproduct.map((product) => (
                <div key={product.id} className={"w-[24%] relative mt-[120px]"}>
                  <Image imgSrc={product.image} imgAlt="2nd product image.png" className={"w-full"} />
                  <Heading
                    text={"New"}
                    as={"p"}
                    className={"font-bold text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                  />
                  <div className="">
                    <Flex className={"items-center justify-between pt-4"}>
                      <Heading
                        text={product.name}
                        as={"p"}
                        className={"font-bold text-textColor text-[20px]"}
                      />
                      <Heading
                        text={product.price}
                        as={"p"}
                        className={"font-regular text-menuColor text-[16px]"}
                      />
                    </Flex>
                  </div>
                </div>
              ))}
            </Flex>
            <div className="mt-[120px]">
              <Image imgSrc={seondBanner} imgAlt={seondBanner} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Product;