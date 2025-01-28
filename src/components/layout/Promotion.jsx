import React from 'react'
import Image from '../Image'
import Ad_1 from '../../assets/Ad_1.png'
import Ad_2 from '../../assets/Ad_2.png'
import Ad_3 from '../../assets/Ad_3.png'
import Container from '../Container'
import Flex from '../Flex'

const Promotion = () => {
  return (
    <>
    <Container>
        <Flex className={"gap-10 mt-[170px]"}>
            <div className="w-1/2">
            <Image imgSrc={Ad_1} imgAlt={Ad_1}/>
            </div>
            <div className="w-1/2">
            <Image imgSrc={Ad_2} imgAlt={Ad_2}/>
            <Image imgSrc={Ad_3} imgAlt={Ad_3} className={"mt-10"}/>
            </div>
        </Flex>
    </Container>
    </>
  )
}

export default Promotion