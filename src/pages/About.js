import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, StackDivider, Stack } from '@chakra-ui/react'


const About = () => {
    return (
        <Box p="6" display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
            <Card textAlign={'center'} width={'60%'} bg={'black'}>
                <CardHeader>
                    <Heading size='md'>Client Report</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Summary
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                View a summary of all your clients over the last month.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Overview
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Check out the overview of your clients.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                See a detailed analysis of all your business clients.
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    );
};

export default About;
