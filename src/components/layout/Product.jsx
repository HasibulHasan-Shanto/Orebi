import React from 'react';
import Heading from '../Heading';
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import prouduct from '../../assets/product.png'; // Ensure this path is correct
import secondPart from '../../assets/2nd product image.png'
import seondBanner from '../../assets/secondBanner.png'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";

const Product = () => {
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
          
          <div>
            <Flex className={"justify-between"}>
              {/* Product 1 */}
              <div className={"w-[24%] relative group"}>
                <Image imgSrc={prouduct} imgAlt="Product Image" className={"w-full"} />
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

              {/* Product 2 */}
              <div className={"w-[24%] relative group"}>
                <Image imgSrc={prouduct} imgAlt="Product Image" className={"w-full"} />
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

              {/* Product 3 */}
              <div className={"w-[24%] relative group"}>
                <Image imgSrc={prouduct} imgAlt="Product Image" className={"w-full"} />
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

              {/* Product 4 */}
              <div className={"w-[24%] relative group"}>
                <Image imgSrc={prouduct} imgAlt="Product Image" className={"w-full"} />
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
            </Flex>
          </div>

        <div className="">
          <Flex className={'justify-between'}>
          <div className={"w-[24%] relative mt-[120px]"}>
                <Image imgSrc={secondPart} imgAlt="2nd product image.png" className={"w-full"} />
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
            </div>
          <div className={"w-[24%] relative mt-[120px]"}>
                <Image imgSrc={secondPart} imgAlt="2nd product image.png" className={"w-full"} />
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
            </div>
          <div className={"w-[24%] relative mt-[120px]"}>
                <Image imgSrc={secondPart} imgAlt="2nd product image.png" className={"w-full"} />
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
            </div>
          <div className={"w-[24%] relative mt-[120px]"}>
                <Image imgSrc={secondPart} imgAlt="2nd product image.png" className={"w-full"} />
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
            </div>
          </Flex>
          <div className="mt-[120px]">
            <Image imgSrc={seondBanner} imgAlt={seondBanner}/>
          </div>
        </div>
        </Container>
      </div>
    </>
  );
};

export default Product;
