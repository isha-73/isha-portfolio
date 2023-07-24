import {
  Flex,
  Spacer,
  Box,
  Text,
  Link,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <Box color={'white'}>
        <Link
          href="http://www.linkedin.com/in/isha-bule-23a51820b"
          isExternal
          mx={2}
        >
          <IconButton
            aria-label="LinkedIn"
            icon={<Icon as={FaLinkedin} boxSize={6} />}
            variant="unstyled"
          />
        </Link>
        <Link href="https://github.com/isha-73" isExternal mx={2}>
          <IconButton
            aria-label="Github"
            icon={<Icon as={FaGithub} boxSize={6} />}
            variant="unstyled"
          />
        </Link>
        <Link href="https://twitter.com/BuleIsha" isExternal mx={2}>
          <IconButton
            aria-label="Twitter"
            icon={<Icon as={FaTwitter} boxSize={6} />}
            variant="unstyled"
          />
        </Link>
        <Link href="https://www.instagram.com/isha.bule/" isExternal mx={2}>
          <IconButton
            aria-label="Instagram"
            icon={<Icon as={FaInstagram} boxSize={6} />}
            variant="unstyled"
          />
        </Link>
      </Box>
    </>
  );
}
