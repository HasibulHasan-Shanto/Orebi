import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { RiNumber2 } from "react-icons/ri";
import { FaCarSide , FaUndo} from "react-icons/fa";
import Heading from '../Heading';
const Guaranty = () => {
  return (
    <>
    <div className="bg-guarantyColor h-20">
        <Container>
            <Flex className={"justify-between items-center leading-[80px] border-b-2 border-guarantyColor"}>
                <div className={"flex items-center gap-4"}>
                    <RiNumber2 />
                    <Heading text={"Two years warranty"} as={"p"} className={"font-regular text-[16px] text-guarantyP"}/>
                </div>
                <div className={"flex items-center gap-4"}>
                    <FaCarSide />
                    <Heading text={"Free shipping"} as={"p"} className={"font-regular text-[16px] text-guarantyP"}/>
                </div>
                <div className={"flex items-center gap-4"}>
                    <FaUndo />
                    <Heading text={"Return policy in 30 days"} as={"p"} className={"font-regular text-[16px] text-guarantyP"}/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Guaranty