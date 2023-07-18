import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text, Link } from '@chakra-ui/react'
export default function Body() {
    return (

        <SimpleGrid spacing={5} templateColumns='repeat(auto-fill)' display={"flex"}
            flexDirection="row" width={"80%"} height={"100"} flex={"wrap"}>
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }} > <Card backgroundColor={'blur'} color={'white'} borderColor="gray.800" borderWidth="0.5px" >

                <CardBody>
                    <Heading size='sm'> Projects</Heading>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>

            </Card></Link>

            <Link textDecoration="none" _hover={{ textDecoration: 'none' }} > <Card backgroundColor={'blur'} color={'white'} borderColor="gray.800" borderWidth="0.5px" boxShadow="md"
                _hover={{
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                }}>

                <CardBody>
                    <Heading size='sm'> Blogs</Heading>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>

            </Card></Link>

            <Link textDecoration="none" _hover={{ textDecoration: 'none' }} > <Card backgroundColor={'blur'} color={'white'} borderColor="gray.800" borderWidth="0.5px" >

                <CardBody>
                    <Heading size='sm'> My Interest</Heading>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>

            </Card></Link>
        </SimpleGrid>
    )
}