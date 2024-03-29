import { Button, Container, Heading, Input, VStack ,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
<form>
  <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
<Heading>LogIn Page</Heading>
<Input placeholder='Enter Email' type='Email' required/>
<Input placeholder='Enter Password' type='password' required/>
<Button variant={'link'} alignSelf={'flex-end'}><Link to={'/forgetpassword'}></Link>Forget Password?</Button>
<Button colorScheme='purple' type='submit'>Log In</Button>
<Text textAlign={'right'}>New User?{'   '}
<Button variant={'link'} colorScheme='purple'><Link to={'/signup'}>SignUp
  </Link></Button>
  </Text>
  </VStack>
</form>
   </Container>
  )
}

export default Login
