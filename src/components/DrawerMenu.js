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

export default function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isRotated, setIsRotated] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(true);

  const style = {};

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
      <Box>
        <Flex>
          <Box position={'fixed'} zIndex={1}>
            <Button
              className="draw"
              height={'10vh'}
              onClick={handleCombinedClick}
              variant="unstyled"
              borderRadius={'20px'}
              size="lg"
              _hover={{
                transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease-in-out',
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
                    >
                      Home
                    </Button>
                    <Button
                      className="drawerbody-button"
                      height={'16'}
                      variant={'unstyled'}
                      color="white"
                    >
                      About Me
                    </Button>
                    <Button
                      className="drawerbody-button"
                      height={'16'}
                      variant={'unstyled'}
                      color="white"
                    >
                      Projects
                    </Button>
                    <Button
                      className="drawerbody-button"
                      height={'16'}
                      variant={'unstyled'}
                      color="white"
                    >
                      Blogs
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
      </Box>
    </>
  );
}
