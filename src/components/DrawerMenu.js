import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import '../css/DrawerMenu.css'
import { HamburgerIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useDisclosure } from "@chakra-ui/react"
import { CloseButton } from '@chakra-ui/react'
import { Flex, Spacer, Box } from '@chakra-ui/react'

export default function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()



  return (
    <>
    <Box>
      <Flex>
        <Box position={'fixed'} zIndex={1} >

          <Button className='draw' backgroundColor='#282c34' height={'10vh'}  onClick={onOpen}  variant="unstyled" borderRadius={'20px'} >
            <HamburgerIcon color="red.500" boxSize={6}  />
          </Button>

          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent backgroundColor={'black'}>
              <DrawerHeader borderBottomWidth='1px' textAlign={'center'} color="white" fontSize={'30px'}> <CloseButton onClick={onClose} />Hello</DrawerHeader>
              <DrawerBody className='drawerbody'>
                <Flex direction={'column'}>
                  <Button className='drawerbody-button' bg="black" color="white" _hover={{ bg: "red.500" }}>Home</Button>
                  <Button className='drawerbody-button' bg="black" color="white" _hover={{ bg: "red.500", color: "white" }}>About Me</Button>
                  <Button className='drawerbody-button' bg="black" color="white" _hover={{ bg: "red.500", color: "white" }}>Blogs</Button>
                  <Button className='drawerbody-button' bg="black" color="white" _hover={{ bg: "red.500", color: "white" }}>Projects</Button>
                  <Button className='drawerbody-button' bg="black" color="white" _hover={{ bg: "red.500", color: "white" }}>Timeline</Button>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

        </Box>
        <Spacer />
        <Box  color={'red.500'} paddingTop={'4vh'} paddingRight={'5vh'}>
          <SunIcon position={'fixed'}boxSize={6}  zIndex={'1'} />
        </Box>
      </Flex>
      </Box>
    </>
  )
}