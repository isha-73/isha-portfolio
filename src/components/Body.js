import {
  Box,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


export default function Body() {
  // const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
  const cardData = [
    {
      id: 1,
      title: 'Projects',
      description:
        'Showcasing a collection of my projects, combining creativity and technical expertise.',
      link: "/projects"
    },
    {
      id: 2,
      title: 'Blogs',
      description:
        'Delve into my collection of insightful blog posts, covering various topics',
      link: "/blogs"
    },
    {
      id: 3,
      title: 'My Interest',
      description:
        'Take a glimpse into my diverse range of interests, including hobbies, books, travel, and more.',
      link: "/interests"
    },
  ];

  return (
    <Box paddingBottom={'3'} width={'70%'}>
      <SimpleGrid
        spacing={5}
        columns={{ base: 1, sm: 2, md: 3 }}
        justifyContent="center"
        alignItems={'center'}
      >
        {cardData.map((card) => (
          <Link
            to={card.link}
            key={card.id}
          >

            <Card
              backgroundColor="blur"
              color="white"
              borderColor="gray.800"
              borderWidth="0.5px"
              minHeight={'160px'}
              boxShadow="md"
              textDecoration="none"
              borderRadius={'6px'}
              _hover={{
                textDecoration: 'none',
                boxShadow: '0 0 3px teal',
                backgroundImage: 'linear-gradient(to bottom, #111111,#222222)',
              }}
            >
              <CardBody
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
              >
                <Heading size={'sm'} padding={'1'}>
                  {card.title}
                </Heading>

                <Text fontSize={'15px'}>{card.description}</Text>
              </CardBody>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
}
