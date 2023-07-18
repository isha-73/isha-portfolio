import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    SimpleGrid,
    Text,
    Link,
    useMediaQuery,
} from '@chakra-ui/react';

export default function Body() {
    const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
    const cardData = [
        {
            id: 1,
            title: 'Projects',
            description:
                'Showcasing a collection of my innovative projects, combining creativity and technical expertise to deliver impactful solutions.',
        },
        {
            id: 2,
            title: 'Blogs',
            description:
                'Delve into my collection of insightful and thought-provoking blog posts, covering various topics',
        },
        {
            id: 3,
            title: 'My Interest',
            description:
                'Take a glimpse into my diverse range of interests, including hobbies, books, travel, and more.',
        },
    ];

    return (
        <Box paddingBottom={'3'} width={'73%'}>
            <SimpleGrid
                spacing={5}
                columns={{ base: 1, sm: 2, md: 3 }}
                justifyContent="center"
                alignItems={'center'}
            >
                {cardData.map((card) => (
                    <Link
                        key={card.id}
                        textDecoration="none"
                        borderRadius={'6px'}
                        _hover={{
                            textDecoration: 'none',
                            boxShadow: '0 0 3px teal',
                            backgroundImage: 'linear-gradient(to bottom, #111111,#222222)',
                        }}
                    >
                        <Card
                            backgroundColor="blur"
                            color="white"
                            borderColor="gray.800"
                            borderWidth="0.5px"
                            minHeight={'170px'}
                            boxShadow="md"

                        // _hover={{
                        //     boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                        // }}
                        >
                            <CardBody
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'center'}
                            >
                                <Heading size={'md'} padding={'1'}>
                                    {card.title}
                                </Heading>

                                <Text>{card.description}</Text>
                            </CardBody>
                        </Card>
                    </Link>
                ))}
            </SimpleGrid>
        </Box>
    );
}
