import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react';
import {FaFacebook,FaTwitter,FaLinkedin,FaGithub} from 'react-icons/fa'
//import * as React from 'react';



const LandingPage_Footer = () => {
    const socialLink=[
        {id:1, to:'/',icon:<FaFacebook/>},
        {id:2,to:'/',icon:<FaTwitter/>},
        {id:3,to:'/',icon:<FaLinkedin/>},
        {id:4,to:'/',icon:<FaGithub/>}
    ]
    const navLinks = [
        { id: 1, to: '#about', text: "About" },
        { id: 2, to: '#recent', text: "Recent" },
        { id: 3, to: '#feature', text: "Features" },
        { id: 4, to: '#contact', text: "Contact" },
    ]    
    return (
        <Box sx={{
            boxShadow:"0 10px 10px 0 #ddd"
        }}>
            <Box bgColor='blackAlpha.500' color='black'>.</Box>
            <Box sx={{
                p:5,
                gap:'5',
                display:"grid",
                gridTemplateColumns:{md:'3fr 5fr 5fr'},
                textAlign:'center'
            }}>
                <Box>
                    <Heading color='purple.500'textDecoration='underline'>MicroRealm</Heading>
                    <Text>
                        Lorem ipsum dolor, sit a
                        met consectetur adipisicing elit. Exercitationem, soluta quos eum id enim vel tenetur,
                        architecto odit dignissimos quasi, molestiae blanditiis veniam ut. Ea ad
                        reiciendis libero dolorum esse!
                    </Text>
                </Box>
                <Box>
                    <Text fontSize='1.5rem' textDecoration='underline'>Link</Text>
                    {navLinks.map((item)=>{
                        return(
                            <Box key={item.id}>
                                <a href={item.to}>{item.text}</a>
                            </Box>
                        )
                    })}
                </Box>
                <Box>
                    <Text textDecoration='underline'>
                        Social Link
                    </Text>
                    {socialLink.map((item)=>{
                        return(
                            <Box key={item.id} sx={{
                                display:'flex',
                                justifyContent:'center'
                            }}>
                                <a href={item.to}>
                                    <Text sx={{
                                        textAlign:'center',
                                        fontSize:'1.5rem',
                                        p:2,
                                        color:'blue.300'
                                    }}>
                                    {item.icon}
                                    </Text>
                                </a>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    );
}

export default LandingPage_Footer
