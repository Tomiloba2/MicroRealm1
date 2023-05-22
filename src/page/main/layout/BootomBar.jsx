import {
    Box,
    HStack,
    List,
    ListIcon,
    ListItem,
    Text,
    Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure
} from "@chakra-ui/react";
import { MdLiving, MdSportsEsports, MdAccountCircle, MdMenu,MdContactMail,MdSettings } from "react-icons/md";
import { NavLink } from "react-router-dom";
const BottomBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const sideMenu = [
        {
            text: 'Movie', Icon: MdLiving, to: ''
        },
        {
            text: 'Games', Icon: MdSportsEsports, to: ''
        },
        {
            text: 'Profile', Icon: MdAccountCircle, to: ''
        },
        {
            text: 'Contact', Icon: MdContactMail, to: ''
        },
        {
            text: 'Setting', Icon: MdSettings, to: ''
        },
    ]
    if(isOpen===false){
        sideMenu.splice(3,2)
    }
    return (
        <>
            <Box sx={{
                px: 5,
                boxShadow: '0 5px 2px 0 #dd',
                textAlign: 'center'
            }}>
                <List p='5' sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center"
                }}>
                    <HStack>
                        {sideMenu.map((item, id) => {
                            return (
                                <ListItem key={id} sx={{
                                    p: 4,
                                    fontSize: 15
                                }}>
                                    <NavLink to={item.to}>
                                        <ListIcon as={item.Icon} fontSize='20' />
                                        <Text>{item.text}</Text>
                                    </NavLink>
                                </ListItem>
                            )
                        })}
                        <Box fontSize='20' onClick={onOpen}>
                            <MdMenu />
                        </Box>
                    </HStack>
                </List>
            </Box>
            {/*Drawer*/}
            <Box>
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
                                {sideMenu.map((item) => {
                                    return (
                                        <Box key={item.id} sx={{
                                            p: 5
                                        }}>
                                            <NavLink to={item.to}>
                                                <Text>{item.text}</Text>
                                            </NavLink>
                                        </Box>
                                    )
                                })}
                            </Box>
                        </DrawerBody>
                        <DrawerFooter></DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Box>
        </>
    );
}

export default BottomBar;