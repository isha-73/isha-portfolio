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
            <Container maxW="container.xl" padding="5vh">
                <Center>
                    <Box
                        bgGradient="linear(to bottom, teal.800, black)"
                        color="white"
                        borderRadius="md"
                        overflow="hidden"
                        boxShadow="xl"
                        width={{ base: '100%', sm: '90%' }}
                    >
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            alignItems="center"
                            py={{ base: '6', md: '8' }}
                            px={{ base: '4', md: '6' }}
                            spacing={{ base: '4', md: '8' }}
                        >
                            <Box maxW={{ base: '100%', sm: '30%' }}>
                                <Image
                                    objectFit="cover"
                                    src={pic}
                                    alt="My pic"
                                    borderRadius="md"
                                    boxShadow="md"
                                />
                            </Box>

                            <Stack flex="1" textAlign="center">
                                <Heading as="h1" size="3xl" noOfLines={1} fontFamily={"candara"}>
                                    {info.name}
                                </Heading>
                                <Text py="1" fontSize="lg" fontFamily={"calibri"}>
                                    {info.status}
                                </Text>
                                <Text fontSize="lg" fontFamily={"calibri"}>{info.enthu}</Text>
                                <hr />
                                <List spacing={1} fontSize="lg" p={'10'} textAlign="left" fontFamily={"cursive"}>
                                    <ListItem>&#x1F4DA;
                                        {info.like.line1}
                                    </ListItem>
                                    <ListItem> &#x1F333;
                                        {info.like.line2}
                                    </ListItem>
                                    <ListItem>&#x1F682;
                                        {info.like.line3}
                                    </ListItem>
                                    <ListItem>&#x1F60A;
                                        {info.like.line4}
                                    </ListItem>
                                </List>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>
            </Container>
        </>
    )
}