import Image from "next/image"

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from "../styles/pages/home"

import shirt01 from '../assets/shirt01.png';
import shirt02 from '../assets/shirt02.png';
import shirt03 from '../assets/shirt03.png';

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  });

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className="keen-slider__slide">
        <Image src={shirt01} width={520} height={480} alt="" />

        <footer>
          <strong>Shirt</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt02} width={520} height={480} alt="" />

        <footer>
          <strong>Shirt</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt03} width={520} height={480} alt="" />

        <footer>
          <strong>Shirt</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>       
    </HomeContainer>
  )
}