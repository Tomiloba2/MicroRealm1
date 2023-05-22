import { Box, HStack, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { MdLiving, MdSportsEsports, MdContactMail, MdAccountCircle, MdSettings } from "react-icons/md";
import { NavLink } from "react-router-dom";
const SideBar = () => {
    const sideMenu = [
        {
            text: 'Movie', Icon: MdLiving,to:''
        },
        {
            text: 'Games', Icon: MdSportsEsports,to:''
        },
        {
            text: 'Contact', Icon: MdContactMail,to:''
        },
        {
            text: 'Setting', Icon: MdSettings,to:''
        },

        {
            text: 'Profile', Icon: MdAccountCircle,to:''
        },

    ]
    return (
        <>
            <Box sx={{
                px: 5,
                boxShadow:'0 5px 2px 0 #dd'
            }}>
                <List p='5'>
                    {sideMenu.map((item, id) => {
                        return (
                            <ListItem key={id} sx={{
                                py:5,
                                fontSize:15
                            }}>
                                <NavLink to={item.to}>
                                <HStack>
                                    <ListIcon as={item.Icon} />
                                    <Text>{item.text}</Text>
                                </HStack>
                                </NavLink>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </>
    );
}

export default SideBar;