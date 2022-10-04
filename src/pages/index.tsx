import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import shirt01 from '../assets/shirt01.png';
import shirt02 from '../assets/shirt02.png';
import shirt03 from '../assets/shirt03.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt01} width={520} height={480} alt="" />

        <footer>
          <strong>Shirt</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={shirt02} width={520} height={480} alt="" />

        <footer>
          <strong>Shirt</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>      
    </HomeContainer>
  )
}