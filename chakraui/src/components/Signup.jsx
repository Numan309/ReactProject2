import { Button, Container, Heading, Input, VStack ,Text, Avatar} from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
<form>
  <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
<Heading>VIDEO HUB</Heading>
<Avatar alignSelf={'center'} boxSize={'32'}/>
<Input placeholder='Enter Username' type='text' required/>
<Input placeholder='Enter Email' type='Email' required/>
<Input placeholder=' New Password' type='password' required/>
<Input placeholder='confirm password' type='password' required/>

<Button colorScheme='purple' type='submit'>Sign Up</Button>
<Text textAlign={'right'}>Already sign up?{''}
<Button variant={'link'} colorScheme='purple'><Link to={'/signup'}>Log In
  </Link></Button>
  </Text>
  </VStack>
</form>
   </Container>
  )
}

export default Signup;
