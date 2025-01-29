import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import { RiArrowRightSLine } from "react-icons/ri";
import { FaPlus , FaSortUp , FaSortDown , FaHeart , FaShoppingCart} from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import head from '../../assets/head.png'
import Image from '../Image'

const Shope = () => {
  return (
    <>
    <Header/>
    <Container>
        <div className="">
            <Heading as={"p"} text={"Products"} className="font-bold text-textColor text-[49px] mt-[70px]"/>
            <div className="flex">
                <span className='font-regular text-menuColor text-[12px]'>Home </span>
                <RiArrowRightSLine className='text-menuColor'/>
                <span className='font-regular text-menuColor text-[12px]'> Product</span>
            </div> 
        </div>
        <div className="">
            <Flex className={''}>
                <div className="w-[24%]">
                    <Heading as={"p"} text={"Shop by Category"} className="font-bold text-textColor text-[20px] mt-[70px]"/>
                    <div className="flex justify-between items-center  border-b-2 w-full ">
                        <Heading as={"p"} text={"Catagory 1"} className="font-regular text-menuColor text-[16px] py-7"/>
                        <FaPlus className='text-menuColor text-[12px]'/>
                    </div>
                    <div className="flex items-center  border-b-2 w-full ">
                        <Heading as={"p"} text={"Catagory 2"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex justify-between items-center mt-7  border-b-2 w-full ">
                        <Heading as={"p"} text={"Catagory 3"} className="font-regular text-menuColor text-[16px] py-7"/>
                        <FaPlus className='text-menuColor text-[12px]'/>
                    </div>
                    <div className="flex items-center  border-b-2 w-full ">
                        <Heading as={"p"} text={"Catagory 4"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex items-center  border-b-2 w-full ">
                        <Heading as={"p"} text={"Catagory 5"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex justify-between items-center mt-[50px]  border-b-2 w-full ">
                        <Heading as={"p"} text={"Shop by Color"} className="font-bold text-textColor text-[20px] "/>
                        <FaSortUp/>
                    </div>
                    <div className="flex gap-2 items-center  border-b-2 w-full ">
                        <div className="h-[11px] w-[11px] rounded-full bg-black"></div>
                        <Heading as={"p"} text={"Color 1"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex gap-2 items-center  border-b-2 w-full ">
                        <div className="h-[11px] w-[11px] rounded-full bg-secondColor"></div>
                        <Heading as={"p"} text={"Color 1"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex gap-2 items-center  border-b-2 w-full ">
                        <div className="h-[11px] w-[11px] rounded-full bg-thirdColor"></div>
                        <Heading as={"p"} text={"Color 1"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex gap-2 items-center  border-b-2 w-full ">
                        <div className="h-[11px] w-[11px] rounded-full bg-fourColor"></div>
                        <Heading as={"p"} text={"Color 1"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex gap-2 items-center  border-b-2 w-full ">
                        <div className="h-[11px] w-[11px] rounded-full bg-fiveColor"></div>
                        <Heading as={"p"} text={"Color 1"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex justify-between items-center mt-[50px]">
                        <Heading as={"p"} text={"Shop by brand"} className="font-bold text-textColor text-[20px] "/>
                        <FaSortUp/>
                    </div>
                    <div className="flex items-center  border-b-2 w-full ">
                        <Heading as={"p"} text={"Brand 1"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex items-center  border-b-2 w-full ">
                        <Heading as={"p"} text={"Brand 2"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex items-center  border-b-2 w-full ">
                        <Heading as={"p"} text={"Brand 3"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex items-center  border-b-2 w-full ">
                        <Heading as={"p"} text={"Brand 4"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex items-center  border-b-2 w-full ">
                        <Heading as={"p"} text={"Brand 5"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className=" mt-[50px]">
                        <Heading as={"p"} text={"Shop by price"} className="font-bold text-textColor text-[20px] "/>
                    </div>
                    <div className="flex items-center  border-b-2 w-full ">
                        <Heading as={"p"} text={"$0.00 - $9.99"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex items-center  border-b-2 w-full ">
                        <Heading as={"p"} text={"$10.00 - $19.99"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex items-center  border-b-2 w-full ">
                        <Heading as={"p"} text={"$20.00 - $29.99"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex items-center  border-b-2 w-full ">
                        <Heading as={"p"} text={"$30.00 - $39.99"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                    <div className="flex items-center  border-b-2 w-full ">
                        <Heading as={"p"} text={"$40.00 - $69.99"} className="font-regular text-menuColor text-[16px] py-7"/>
                    </div>
                </div>
                <div className=" w-full pt-[65px] ">
                <Flex className={'gap-10 justify-end'}>
                <div className="flex items-center">
                <Heading as={"p"} text={"Sort by :"} className="font-regular text-menuColor text-[16px] pr-3"/>
                <div className=" flex gap-32 p-2 border">
                     <Heading as={"p"} text={"Featured :"} className="font-regular text-menuColor text-[16px] pl-3"/>
                     <FaSortDown/>
                </div>
                </div>
                <div className="flex items-center">
                <Heading as={"p"} text={"show :"} className="font-regular text-menuColor text-[16px] pr-3"/>
                <div className=" flex gap-32 p-2 border">
                     <Heading as={"p"} text={"36 :"} className="font-regular text-menuColor text-[16px] pl-3"/>
                     <FaSortDown/>
                </div>
                </div>
                </Flex>
                <Flex className={'ml-[33px] justify-between mt-14  flex-wrap'}>
                    <div className="w-[300px] relative group">
                    <Image imgSrc={head} imgAlt={head} className={"w-full h-full"} />
                    <Heading
                  text={"New"}
                  as={"p"}
                  className={"font-bold text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
                    <div className="">
                  <Flex className={"items-center justify-between pt-4"}>
                    <Heading
                      text={"Basic Crew Neck Tee"}
                      as={"p"}
                      className={"font-bold text-textColor text-[20px]"}
                    />
                    <Heading
                      text={"$44.00"}
                      as={"p"}
                      className={"font-regular text-menuColor text-[16px]"}
                    />
                  </Flex>
                </div>
                <div className="bg-red-500 p-7 absolute group-hover:block hidden top-[218px] left-0 w-full">
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
                    <div className="w-[300px] relative group">
                    <Image imgSrc={head} imgAlt={head} className={"w-full h-full"} />
                    <Heading
                  text={"New"}
                  as={"p"}
                  className={"font-bold text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
                    <div className="">
                  <Flex className={"items-center justify-between pt-4"}>
                    <Heading
                      text={"Basic Crew Neck Tee"}
                      as={"p"}
                      className={"font-bold text-textColor text-[20px]"}
                    />
                    <Heading
                      text={"$44.00"}
                      as={"p"}
                      className={"font-regular text-menuColor text-[16px]"}
                    />
                  </Flex>
                </div>
                <div className="bg-red-500 p-7 absolute group-hover:block hidden top-[218px] left-0 w-full">
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
                    <div className="w-[300px] relative group">
                    <Image imgSrc={head} imgAlt={head} className={"w-full h-full"} />
                    <Heading
                  text={"New"}
                  as={"p"}
                  className={"font-bold text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
                    <div className="">
                  <Flex className={"items-center justify-between pt-4"}>
                    <Heading
                      text={"Basic Crew Neck Tee"}
                      as={"p"}
                      className={"font-bold text-textColor text-[20px]"}
                    />
                    <Heading
                      text={"$44.00"}
                      as={"p"}
                      className={"font-regular text-menuColor text-[16px]"}
                    />
                  </Flex>
                </div>
                <div className="bg-red-500 p-7 absolute group-hover:block hidden top-[218px] left-0 w-full">
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
                    <div className="w-[300px] mt-[100px] relative group">
                    <Image imgSrc={head} imgAlt={head} className={"w-full h-full"} />
                    <Heading
                  text={"New"}
                  as={"p"}
                  className={"font-bold text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
                    <div className="">
                  <Flex className={"items-center justify-between pt-4"}>
                    <Heading
                      text={"Basic Crew Neck Tee"}
                      as={"p"}
                      className={"font-bold text-textColor text-[20px]"}
                    />
                    <Heading
                      text={"$44.00"}
                      as={"p"}
                      className={"font-regular text-menuColor text-[16px]"}
                    />
                  </Flex>
                </div>
                <div className="bg-red-500 p-7 absolute group-hover:block hidden top-[218px] left-0 w-full">
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
                    <div className="w-[300px] mt-[100px] relative group">
                    <Image imgSrc={head} imgAlt={head} className={"w-full h-full"} />
                    <Heading
                  text={"New"}
                  as={"p"}
                  className={"font-bold text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
                    <div className="">
                  <Flex className={"items-center justify-between pt-4"}>
                    <Heading
                      text={"Basic Crew Neck Tee"}
                      as={"p"}
                      className={"font-bold text-textColor text-[20px]"}
                    />
                    <Heading
                      text={"$44.00"}
                      as={"p"}
                      className={"font-regular text-menuColor text-[16px]"}
                    />
                  </Flex>
                </div>
                <div className="bg-red-500 p-7 absolute group-hover:block hidden top-[218px] left-0 w-full">
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
                    <div className="w-[300px] mt-[100px] relative group">
                    <Image imgSrc={head} imgAlt={head} className={"w-full h-full"} />
                    <Heading
                  text={"New"}
                  as={"p"}
                  className={"font-bold text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
                    <div className="">
                  <Flex className={"items-center justify-between pt-4"}>
                    <Heading
                      text={"Basic Crew Neck Tee"}
                      as={"p"}
                      className={"font-bold text-textColor text-[20px]"}
                    />
                    <Heading
                      text={"$44.00"}
                      as={"p"}
                      className={"font-regular text-menuColor text-[16px]"}
                    />
                  </Flex>
                </div>
                <div className="bg-red-500 p-7 absolute group-hover:block hidden top-[218px] left-0 w-full">
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
                    <div className="w-[300px] mt-[100px] relative group">
                    <Image imgSrc={head} imgAlt={head} className={"w-full h-full"} />
                    <Heading
                  text={"New"}
                  as={"p"}
                  className={"font-bold text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
                    <div className="">
                  <Flex className={"items-center justify-between pt-4"}>
                    <Heading
                      text={"Basic Crew Neck Tee"}
                      as={"p"}
                      className={"font-bold text-textColor text-[20px]"}
                    />
                    <Heading
                      text={"$44.00"}
                      as={"p"}
                      className={"font-regular text-menuColor text-[16px]"}
                    />
                  </Flex>
                </div>
                <div className="bg-red-500 p-7 absolute group-hover:block hidden top-[218px] left-0 w-full">
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
                    <div className="w-[300px] mt-[100px] relative group">
                    <Image imgSrc={head} imgAlt={head} className={"w-full h-full"} />
                    <Heading
                  text={"New"}
                  as={"p"}
                  className={"font-bold text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
                    <div className="">
                  <Flex className={"items-center justify-between pt-4"}>
                    <Heading
                      text={"Basic Crew Neck Tee"}
                      as={"p"}
                      className={"font-bold text-textColor text-[20px]"}
                    />
                    <Heading
                      text={"$44.00"}
                      as={"p"}
                      className={"font-regular text-menuColor text-[16px]"}
                    />
                  </Flex>
                </div>
                <div className="bg-red-500 p-7 absolute group-hover:block hidden top-[218px] left-0 w-full">
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
                    <div className="w-[300px] mt-[100px] relative group">
                    <Image imgSrc={head} imgAlt={head} className={"w-full h-full"} />
                    <Heading
                  text={"New"}
                  as={"p"}
                  className={"font-bold text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
                    <div className="">
                  <Flex className={"items-center justify-between pt-4"}>
                    <Heading
                      text={"Basic Crew Neck Tee"}
                      as={"p"}
                      className={"font-bold text-textColor text-[20px]"}
                    />
                    <Heading
                      text={"$44.00"}
                      as={"p"}
                      className={"font-regular text-menuColor text-[16px]"}
                    />
                  </Flex>
                </div>
                <div className="bg-red-500 p-7 absolute group-hover:block hidden top-[218px] left-0 w-full">
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
                    <div className="w-[300px] mt-[100px] relative group">
                    <Image imgSrc={head} imgAlt={head} className={"w-full h-full"} />
                    <Heading
                  text={"New"}
                  as={"p"}
                  className={"font-bold text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
                    <div className="">
                  <Flex className={"items-center justify-between pt-4"}>
                    <Heading
                      text={"Basic Crew Neck Tee"}
                      as={"p"}
                      className={"font-bold text-textColor text-[20px]"}
                    />
                    <Heading
                      text={"$44.00"}
                      as={"p"}
                      className={"font-regular text-menuColor text-[16px]"}
                    />
                  </Flex>
                </div>
                <div className="bg-red-500 p-7 absolute group-hover:block hidden top-[218px] left-0 w-full">
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
                    <div className="w-[300px] mt-[100px] relative group">
                    <Image imgSrc={head} imgAlt={head} className={"w-full h-full"} />
                    <Heading
                  text={"New"}
                  as={"p"}
                  className={"font-bold text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
                    <div className="">
                  <Flex className={"items-center justify-between pt-4"}>
                    <Heading
                      text={"Basic Crew Neck Tee"}
                      as={"p"}
                      className={"font-bold text-textColor text-[20px]"}
                    />
                    <Heading
                      text={"$44.00"}
                      as={"p"}
                      className={"font-regular text-menuColor text-[16px]"}
                    />
                  </Flex>
                </div>
                <div className="bg-red-500 p-7 absolute group-hover:block hidden top-[218px] left-0 w-full">
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
                    <div className="w-[300px] mt-[100px] relative group">
                    <Image imgSrc={head} imgAlt={head} className={"w-full h-full"} />
                    <Heading
                  text={"New"}
                  as={"p"}
                  className={"font-bold text-white text-[14px] bg-black py-3 px-7 absolute top-5 left-6"}
                />
                    <div className="">
                  <Flex className={"items-center justify-between pt-4"}>
                    <Heading
                      text={"Basic Crew Neck Tee"}
                      as={"p"}
                      className={"font-bold text-textColor text-[20px]"}
                    />
                    <Heading
                      text={"$44.00"}
                      as={"p"}
                      className={"font-regular text-menuColor text-[16px]"}
                    />
                  </Flex>
                </div>
                <div className="bg-red-500 p-7 absolute group-hover:block hidden top-[218px] left-0 w-full">
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
                </Flex>
                </div>
            </Flex>
        </div>
    </Container>
    <Footer/>
    </>
  )
}

export default Shope