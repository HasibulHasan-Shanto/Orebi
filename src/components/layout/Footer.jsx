import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Image from '../Image'
import Logo from '../../assets/Logo (2).png'
import { FaFacebookF , FaLinkedinIn , FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footerColor w-[100%] p-[60px] mt-[100px]">
        <Container>
            <Flex>
                <div className="">
                      <Heading as={"h6"} text={"Menu"} className="font-bold text-textColor text-[16px]"/>
                      <Heading as={"p"} text={"Home"} className="font-reggular text-guarantyP text-[14px] mt-4"/>
                      <Heading as={"p"} text={"Shope"} className="font-reggular text-guarantyP text-[14px] mt-2"/>
                      <Heading as={"p"} text={"About"} className="font-reggular text-guarantyP text-[14px] mt-2"/>
                      <Heading as={"p"} text={"Contact"} className="font-reggular text-guarantyP text-[14px] mt-2"/>
                </div>
                <div className="px-[150px]">
                      <Heading as={"h6"} text={"SHOP"} className="font-bold text-textColor text-[16px]"/>
                      <Heading as={"p"} text={"Category 1"} className="font-reggular text-guarantyP text-[14px] mt-4"/>
                      <Heading as={"p"} text={"Category 2"} className="font-reggular text-guarantyP text-[14px] mt-2"/>
                      <Heading as={"p"} text={"Category 3"} className="font-reggular text-guarantyP text-[14px] mt-2"/>
                      <Heading as={"p"} text={"Category 4"} className="font-reggular text-guarantyP text-[14px] mt-2"/>
                      <Heading as={"p"} text={"Category 5"} className="font-reggular text-guarantyP text-[14px] mt-2"/>
                </div>
                <div className="pr-[150px]">
                      <Heading as={"h6"} text={"HELP"} className="font-bold text-textColor text-[16px]"/>
                      <Heading as={"p"} text={"Privacy Policy"} className="font-reggular text-guarantyP text-[14px] mt-4"/>
                      <Heading as={"p"} text={"Terms & Conditions"} className="font-reggular text-guarantyP text-[14px] mt-2"/>
                      <Heading as={"p"} text={"Special E-shop"} className="font-reggular text-guarantyP text-[14px] mt-2"/>
                      <Heading as={"p"} text={"Shipping"} className="font-reggular text-guarantyP text-[14px] mt-2"/>
                      <Heading as={"p"} text={"Secure Payments"} className="font-reggular text-guarantyP text-[14px] mt-2"/>
                </div>
                <div className="">
                      <Heading as={"h6"} text={"(052) 611-5711"} className="font-bold text-textColor text-[16px]"/>
                      <Heading as={"h6"} text={"company@domain.com"} className="font-reggular text-guarantyP text-[14px] mt-4"/>
                      <Heading as={"p"} text={"575 Crescent Ave. Quakertown, PA 18951"} className="font-reggular text-guarantyP text-[14px] mt-2"/>
                </div>
                <div className="ml-[150px]">
                    <Image imgSrc={Logo} imgAlt={Logo}/>
                </div>
            </Flex>
            <div className="flex gap-5 items-center mt-10">
                <FaFacebookF/>
                <FaLinkedinIn/>
                <FaInstagram/>
                <Heading as={"p"} text={"2020 Orebi Minimal eCommerce Figma Template by Adveits"} className="font-reggular text-guarantyP text-[14px] ml-[877px]"/>
            </div>
        </Container>
    </footer>
  )
}

export default Footer