import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assests/1.jpg'
import img2 from '../assests/6.jpg'
import img3 from '../assests/3.jpg'
import img4 from '../assests/4.jpg'
import img5 from '../assests/5.png'
import { transform } from 'framer-motion'

const headingOptions ={
    pos:'absolute',
    left:'50%',
    top:'50%',
    transform:"translate(-50%,-50%)",
   p:"4",
   size:'4xl'
}

const Home = () => {
  return (
  <Box>
<MyCarousel/>
<Container maxW={'container.xl'}minH={'100vh'} p='16'>
    <Heading textTransform={'uppercase'} py="2" w={'fit-content'} borderBottom={"2px solid"} m='auto'
    >Services</Heading>
    <Stack h={"full"} p={'4'} alignItems={'center'} direction={['column','row']}>
<Image src={img5} h={['40','400']}filter={'hue-rotate(-130deg)'}/>
<Text letterSpacing={"widest"} lineHeight={"190%"} p={['4','16']} textAlign={'center'}>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, voluptates. Debitis voluptatem ratione molestias? Iure officiis doloremque nulla assumenda dicta velit voluptatibus fuga nihil corrupti sint, quam nostrum tempora aliquam quo corporis, accusantium cum laboriosam perspiciatis natus! Quidem vitae fugit rem autem odit omnis voluptates eum, tenetur sunt iure, illum quia aut repellat mollitia debitis sequi impedit voluptatibus dignissimos hic itaque quod vero consequuntur quibusdam? Molestiae voluptatibus, doloremque enim dolorum, fuga odio, cupiditate alias sit assumenda ad maiores architecto ullam numquam hic laudantium sequi. Velit, mollitia debitis deserunt dolore saepe dolores, illo cumque totam vero sequi voluptatum ad error laboriosam quidem. Recusandae dolor vero ipsa minima assumenda 
</Text>
    </Stack>
    </Container>
  </Box>
  )
}
const MyCarousel = ()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
<Box w={'full'} h={'100vh'} >
<Image src={img1}/>
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>WATCH THE FUTURE</Heading>
</Box>

<Box w={'full'} h={'100vh'}>
<Image src={img3}/>
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>FUTURE IS GAMING</Heading>
</Box>

<Box w={'full'} h={'100vh'}>
<Image src={img2}/>
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>GAMING ON CONSOLE</Heading>
</Box>

<Box w={'full'} h={'100vh'}>
<Image src={img4}/>
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>PLAY THE GAME</Heading>
</Box>
    </Carousel>
)

export default Home
