import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import './DrawerMenu.css'
import { PhoneIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Button, useDisclosure } from "@chakra-ui/react"
import { CloseButton } from '@chakra-ui/react'

export default function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    

    return (
      <>
      
        <Button className='draw' backgroundColor='#282c34' height={'10vh'}  borderRadius={'0'} onClick={onOpen}variant="unstyled">
          <HamburgerIcon color="red.500" boxSize={6} />
        </Button>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent backgroundColor={'black'}>
            <DrawerHeader borderBottomWidth='1px' textAlign={'center'}color= "white" fontSize={'30px'}> <CloseButton onClick={onClose} />Hello</DrawerHeader>
            <DrawerBody className='drawerbody'>
             <Button className='drawerbody-button' bg="black"  color= "white" _hover={{ bg: "red.500" }}>Home</Button>
             <Button className='drawerbody-button' bg="black"color= "white" _hover={{ bg: "red.500", color: "white" }}>About Me</Button>
             <Button className='drawerbody-button' bg="black"color= "white" _hover={{ bg: "red.500", color: "white" }}>Blogs</Button>
            <Button className='drawerbody-button' bg="black" color= "white"_hover={{ bg: "red.500", color: "white" }}>Projects</Button>
            <Button className='drawerbody-button' bg="black" color= "white"_hover={{ bg: "red.500", color: "white" }}>Timeline</Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }