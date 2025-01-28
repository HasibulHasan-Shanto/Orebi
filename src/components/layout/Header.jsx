import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Logo (2).png'
import Menu from '../Menu'
import { HiBars2 } from "react-icons/hi2";
import { FaSearch , FaUser , FaCaretDown ,FaShoppingCart} from "react-icons/fa";
import Heading from '../Heading'

const Header = () => {
  return (
    <>
    {/* Header Part Start  */}
    <div className="py-8 bg-white">
        <Container>
            <Flex className={"justify-between"}>
                <div className="Logo w-[40%]">
                    <Image imgSrc={Logo}/>
                </div>
                <div className="Menu w-[60%]">
                    <Menu className={"font-regular text-menuColor text-sm"}>
                        <li className='hover:text-black hover:font-bold duration-300'>Home</li>
                        <li className='hover:text-black hover:font-bold duration-300'>Shope</li>
                        <li className='hover:text-black hover:font-bold duration-300'>About</li>
                        <li className='hover:text-black hover:font-bold duration-300'>Contact</li>
                        <li className='hover:text-black hover:font-bold duration-300'>Journal</li>
                    </Menu>
                </div>
            </Flex>
        </Container>
    </div>

    <div className="catagory_section bg-catagoryColor py-6">
            <Container>
                <Flex>
                    <div className="w-[33%]">
                        <Flex className={"gap-3 items-center"}>
                        <HiBars2 />
                        <Heading as={"p"} text={"Shope by Category"}/>
                        </Flex>
                    </div>
                    <div className="w-[40%] relative">
                        <input type="text" placeholder='Search Products' className='w-full p-4 rounded-md'/>
                        <FaSearch className='absolute right-5 top-1/2 -translate-y-1/2'/>
                    </div>
                    <div className="w-[20%] py-4">
                        <Flex className={"items-center justify-center"}>
                            <Flex className={"gap-1 "}>
                                <FaUser />
                                <FaCaretDown/>
                                <FaShoppingCart className='ml-6'/>
                            </Flex>
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </div>
    {/* Header Part Start  */}
    </>
  )
}

export default Header