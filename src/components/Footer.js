
import { Flex, Spacer, Box, Text, Link, IconButton, Icon } from '@chakra-ui/react'
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
            <Flex width="100%" >


                <Box>
                    <Link href="#" isExternal mx={2}>
                        <IconButton
                            aria-label="Twitter"
                            icon={<Icon as={FaTwitter} boxSize={6} />}
                            variant="unstyled"
                        />
                    </Link>
                    <Link href="#" isExternal mx={2}>
                        <IconButton
                            aria-label="Instagram"
                            icon={<Icon as={FaInstagram} boxSize={6} />}
                            variant="unstyled"
                        />
                    </Link>
                    <Link href="#" isExternal mx={2}>
                        <IconButton
                            aria-label="Facebook"
                            icon={<Icon as={FaFacebook} boxSize={6} />}
                            variant="unstyled"
                        />
                    </Link>
                    <Link href="#" isExternal mx={2}>
                        <IconButton
                            aria-label="LinkedIn"
                            icon={<Icon as={FaLinkedin} boxSize={6} />}
                            variant="unstyled"
                        />
                    </Link>
                </Box>
            </Flex>
        </>
    );
}
