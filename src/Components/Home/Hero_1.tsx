import image_2 from "../../assets/image_2.png"

import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon} from '@chakra-ui/icons'

const Hero_1  = () => {
  return  (
    <section className="">
  <div className="grid max-w-screen-xl  px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-2 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl text-secondary mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl">Digital Services for Doctors</h1>
          <p className="max-w-2xl text-black mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum at harum rem quae dolorem illum temporibus consequatur accusamus nisi impedit?</p>
        
          <Button colorScheme='teal' variant='outline' rightIcon={<ArrowForwardIcon />}>
              Explore
        </Button>
      </div>
      <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <img src={image_2} alt="mockup"/>
      </div>                
  </div>
</section>
  )

};

export default Hero_1 ;
