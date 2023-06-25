import '../css/info.css'
import pic from './pics/IshaGit.png'
import { Container } from '@chakra-ui/react'
import { Flex, Spacer, Box } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { ButtonGroup } from '@chakra-ui/react'
import { Center, AbsoluteCenter } from '@chakra-ui/react'
export default function Info() {

    let info = {
        name: 'Isha Bule',
        status: 'Computer Engineering Student',
        enthu: 'Learning Web Development, cloud technologies, databases and data structures',
        like: 'I like reading books, listening to audiobooks and podcasts.See my collection. I am gardening enthusiast and love to grow plants.Also I like to travel and explore new places.'
    }
    return (
        <>
            <Container maxW="container.xl" className='info-container' position='relative' >

                <Center>
                    
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        width={{ base: '100%', sm: '80%' }}
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '30%' }}
                            src={pic}
                            alt='My pic'
                        />

                        <Stack>
                            <CardBody py='5vh'>
                                <Heading as='h1' size='3xl' noOfLines={1}>{info.name}</Heading>

                                <Text py='2' fontSize='md'>
                                    {info.status} <br />
                                    {info.enthu}
                                </Text>
                            </CardBody>

                            <CardFooter marginTop="-5">
                               <Text>{info.like}</Text>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Center>
            </Container>
        </>
    )
}