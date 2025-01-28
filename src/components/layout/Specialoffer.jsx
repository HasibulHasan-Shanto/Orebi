import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import cap from '../../assets/cap.png'
import Image from '../Image'

const Specialoffer = () => {
  return (
    <div className="Offer_part">
        <Container>
            <Flex className={'justify-between'}>
            <div className={"w-[24%] relative mt-[120px]"}>
                <Image imgSrc={cap} imgAlt="cap.png" className={"w-full"} />
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
                <Image imgSrc={cap} imgAlt="cap.png" className={"w-full"} />
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
                <Image imgSrc={cap} imgAlt="cap.png" className={"w-full"} />
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
                <Image imgSrc={cap} imgAlt="cap.png" className={"w-full"} />
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
        </Container>
    </div>
  )
}

export default Specialoffer