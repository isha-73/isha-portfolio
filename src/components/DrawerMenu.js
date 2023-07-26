import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import '../css/DrawerMenu.css';
import { HamburgerIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useDisclosure } from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react';
import { Flex, Spacer, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isRotated, setIsRotated] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(true);

  const handleCombinedClick = () => {
    onOpen();
    setIsIconVisible(false);
  };
  const closeDrawer = () => {
    setIsIconVisible(true);
    onClose();
  };

  return (
    <>
      <Flex justify="space-between">
        <Box position={'fixed'} zIndex={1}>
          <Button
            className="draw"
            height={'10vh'}
            onClick={handleCombinedClick}
            variant="unstyled"
            borderRadius={'20px'}
            size="lg"
            _hover={{
              transform: !isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {isIconVisible && <HamburgerIcon color="teal.500" boxSize={8} />}
          </Button>

          <Drawer placement="left" onClose={closeDrawer} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent bg="transparent">
              <DrawerHeader
                borderBottomWidth="1px"
                color="white"
                textAlign={'center'}
                width="170px"
              >
                {' '}
                <CloseButton onClick={closeDrawer} />
                Hello
              </DrawerHeader>
              <DrawerBody className="drawerbody" width="170px">
                <Flex direction={'column'}>

                  <Button
                    className="drawerbody-button"
                    height={'16'}
                    variant={'unstyled'}
                    color="white"
                  > <Link to='/'>
                      Home
                    </Link>
                  </Button>

                  <Button
                    className="drawerbody-button"
                    height={'16'}
                    variant={'unstyled'}
                    color="white"
                  > <Link to='/about'>
                      About Me
                    </Link>

                  </Button>

                  <Button
                    className="drawerbody-button"
                    height={'16'}
                    variant={'unstyled'}
                    color="white"
                  > <Link to="/projects">
                      Projects
                    </Link>
                  </Button>

                  <Button
                    className="drawerbody-button"
                    height={'16'}
                    variant={'unstyled'}
                    color="white"
                  ><Link to='/blogs'>
                      Blogs
                    </Link>
                  </Button>

                  {/* <Button className='drawerbody-button' height={'16'} variant={"unstyled"} color="white"  >Timeline</Button> */}
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        <Spacer />
        <Box color={'teal.500'} paddingTop={'4vh'} paddingRight={'5vh'}>
          <SunIcon position={'fixed'} boxSize={6} zIndex={'1'} />
        </Box>
      </Flex>
    </>
  );
}
