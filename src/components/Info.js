import '../css/info.css'
import pic from '../pics/IshaGit.png'
import { Container } from '@chakra-ui/react'
import { Flex, Spacer, Box } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { ButtonGroup } from '@chakra-ui/react'
import { Center, AbsoluteCenter } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'



import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
export default function Info() {

    let info = {
        name: 'Isha Bule',
        status: 'Computer Engineering Student',
        enthu: 'Learning Web Development, cloud technology, databases and data structures',
        like: {
            line1: 'I Read books, listen to audiobooks and podcasts.',
            line2: 'I am Gardening enthusiast and love to grow plants.',
            line3: 'I like to Travel and explore new places.',
            line4: 'You can have a look on my books and audiobooks collection :)'
        }
    }
    return (
        <>
            <Container maxW="container.xl" className='info-container' padding={'5vh'} >

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

                                <Text py='1' fontSize='md'>
                                    {info.status}
                                </Text>
                                <Box><Text fontSize={'2.6vh'}>{info.enthu}</Text> </Box>
                            </CardBody>
                            <hr />
                            <CardFooter marginTop="-5" display={'flex'}  flexDirection={'column'}>
                               
                                <List spacing={1} fontSize={'2.8vh'} textAlign={'left'}>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='green.500' />
                                        {info.like.line1}
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='green.500' />
                                        {info.like.line2}
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='green.500' />
                                        {info.like.line3}
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='green.500' />
                                        {info.like.line4}
                                    </ListItem>
                                    {/* You can also use custom icons from react-icons */}
                                </List>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Center>
            </Container>
        </>
    )
}