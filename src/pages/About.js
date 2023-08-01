
import React from 'react';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';

const About = () => {
    const about={
        me:"I am a passionate pre-final year computer engineering student with a strong desire to create meaningful and innovative projects. Hard work comes naturally to me, and I am constantly exploring the exciting field of web development, specifically focusing on frameworks like React and Next.js. I have an insatiable thirst for knowledge and eagerly apply what I learn.As a dedicated tech enthusiast, I find immense joy in nurturing plants and have developed a deep love for nature. My dream is to become a nature conservationist, and I am committed to taking steps towards making a positive impact on our planet. Combining my technical skills with my passion for environmental conservation, I aspire to contribute to a greener and sustainable future for our world.",
        dob: " 7 May 2003 ",
        edu:[
            {
                id:1,
                title:"Bachelor's Degree, XYZ University, Graduation Year"
            },
            {
                id:2,
                title:"High School Diploma, ABC School, Graduation Year"
            }
        ],
    
        extra:[
            {
                id:11,
                title:"Content Specialist at Google Developers Student Clubs "
            },
            {
                id:12,
                title:"Active core team member of GDSC Cummins "
            },
            {
                id:13,
                title:"Best performer of WEB Campaign by GDSC Cummins"
            },
            {
                id:14,
                title:"Completed Google Cloud Careers Practitioner Course"

            },
            {
                id:15,
                title:"Contributor at GirlScript Summer of Code, Social Winter of Code"

            },
            {
                id:16,
                title:"Postman API Fundamentals Student Expert Certification"
            },
            {
                id:17,
                title:"First runner-up team member of Dodgeball intracollege tournament."
            }


        ],
        coCurricular:[
            {
                id:21,
                title:"Participated in 30 hour hackathon 'Hackanova' in second year of college"
            },
            {
                id:22,
                title:"Participated in Hack Web3Conf Hackathon"
            },
            {
                id:23,
                title:"Participated in all India Women Hackathon 2023"
            }

        ]

        

    }
    
   
  return (
    <Box p="10" display={'flex'} justifyContent={'center'} alignItems={'center'} color={'white'}>
            <Grid templateColumns="repeat(2, 1fr)" gridGap={10}  maxWidth={"80%"}>
                {/* First row */}
                <Box gridColumn="1 / span 2">
                    <Heading size="lg">About Me</Heading>
                </Box>
                {/* Second row */}
                <Box>
                    <Heading size={"md"}>Myself</Heading>
                </Box>
                <Box>
                    <Text fontSize="sm">{about.me}</Text>
                </Box>
                {/* Third row */}
                <Box>
                    <Text fontSize="sm">{about.dob}</Text>
                </Box>
                <Box>
                    <Heading size={"md"}>Date of Birth</Heading>
                </Box>
                {/* third row */}
                <Box>
                    <Heading size={"md"}>Education</Heading>
                </Box>
                <Box>
                    {/* List of your education items */}
                    
                    <ul>
            {about.edu.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>

                  
                </Box>
              

                {/* Fourth row */}
               
                <Box>
                <ul>
            {about.coCurricular.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
                </Box>
                <Box>
                    <Heading size={"md"}>Co-curricular Activities</Heading>
                </Box>
                {/* Fifth row */}
                <Box>
                    <Heading size={"md"}>Extra-curricular Activities</Heading>
                </Box>
                <Box>
                    <Text fontSize="sm">
                    <ul>
            {about.extra.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
                    </Text>
                </Box>
               


                {/* Add more rows as needed */}
            </Grid>
        </Box>
  );
};

export default About;

// const About = () => {
   
//     }
//     return (

        
//     );
// };

// export default About;
