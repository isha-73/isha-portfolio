import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';


const About = () => {
    return (
        <Box p="6"> {/* Add a parent Box to wrap your content */}
            <Heading as="h1" size="xl" mb="4">
                About Page
            </Heading>
            <Text>
                Welcome to the About page. This is your default landing page.
            </Text>
        </Box>
    );
};

export default About;
