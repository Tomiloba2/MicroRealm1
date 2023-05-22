//import * as React from 'react';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Heading, Text, useDisclosure } from '@chakra-ui/react'
import { MdMenu } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


export function LandingPage_Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navLinks = [
        { id: 1, to: '#about', text: "About" },
        { id: 2, to: '#recent', text: "Recent" },
        { id: 3, to: '#feature', text: "Features" },
        { id: 4, to: '#contact', text: "Contact" },
    ]
    const navigate = useNavigate()
    return (
        <Box as='nav' sx={{
            p: 5,
            display: 'flex',
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: '0 10px 10px 0 #000'
        }}>
            <Box>
                <Heading>MicroRealm</Heading>
            </Box>
            <Box display={{ base: "block", md: 'none' }} onClick={onOpen} fontSize='1.5rem'>
                <MdMenu />
            </Box>
            <Box display={{ base: 'none', md: 'block' }}>
                <HStack>
                    {navLinks.map((item) => {
                        return (
                            <Box key={item.id} sx={{
                                px: 5
                            }}>
                                <a href={item.to} >
                                    <Text>{item.text}</Text>
                                </a>
                            </Box>
                        )
                    })}
                    <Button onClick={() => navigate('/auth/signup')} sx={{
                        bgColor: 'whatsapp.600',
                        color: "white",
                        '&:hover': {
                            color: 'whatsapp.600'
                        }
                    }}>
                        get started
                    </Button>
                </HStack>
            </Box>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement='right'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        Microrealm
                    </DrawerHeader>
                    <DrawerBody>
                        <Box p='2'>
                            {navLinks.map((item) => {
                                return (
                                    <Box key={item.id} sx={{
                                        p: 5
                                    }}>
                                        <a href={item.to}>
                                            <Text>{item.text}</Text>
                                        </a>
                                    </Box>
                                )
                            })}
                            <Button onClick={() => navigate('/auth/signup')} sx={{
                                bgColor: 'whatsapp.600',
                                color: "white",
                                '&:hover': {
                                    color: 'whatsapp.600'
                                }
                            }}>
                                get started
                            </Button>
                        </Box>
                    </DrawerBody>
                    <DrawerFooter></DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
