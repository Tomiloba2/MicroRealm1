import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    FormControl,
    FormHelperText,
    FormLabel, Input,
    Textarea,
    Container,
    Heading, Text
} from '@chakra-ui/react';
import { MdSearch, MdShare, MdPages, MdWatchLater } from 'react-icons/md'
import * as React from 'react'


export function LandingPage_Contact() {
    const [inputVal,setInputVal]=React.useState({name:"",email:"",feedback:""})
    const handleChange=(e)=>{
        setInputVal({...inputVal, [e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    
    const features = [
        { title: 'search', icon: <MdSearch /> },
        { title: 'watch', icon: <MdWatchLater /> },
        { title: 'page', icon: <MdPages /> },
        { title: 'share', icon: <MdShare /> },
    ]
    return (
        <div>
            {/*key feature*/}
            <Box id='feature' sx={{
                textAlign: 'center',
                display:"flex",
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Box>
                    <Heading>
                        Key Features
                    </Heading> <br />
                    <Container maxW='75vw'>
                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: { sm: 'auto auto', md: 'auto auto auto auto' },
                        }}>
                            {features.map((li, id) => {
                                return (
                                    <Box key={id} mx='10'>
                                        <Text sx={{
                                            fontSize: '5rem',
                                        }}>
                                            {li.icon}
                                        </Text>
                                        <Text sx={{ fontSize: "1.5rem", textAlign: "left" }}>
                                            {li.title}
                                        </Text>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Card sx={{
                m: { base: '4', md: "20" },
                p: '10',
                bgColor: 'blackAlpha.500',
                color: 'whiteAlpha.700'
            }}>
                <CardHeader sx={{
                    textAlign: 'center',
                    fontSize: '1.5rem'
                }}>
                    Contact Us
                </CardHeader>
                <CardBody>
                    <Box>
                        <form action='' method='POST'>
                            <FormControl isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input
                                 type='text' name='name' value={inputVal.name} onChange={handleChange} />
                                <FormHelperText>hello</FormHelperText>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input 
                                type='email' name="email" value={inputVal.email} onChange={handleChange} />
                                <FormHelperText>test@gmail.com</FormHelperText>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Feedback</FormLabel>
                                <Textarea 
                                placeholder='feedback' name='feedback' value={inputVal.feedback}
                                onChange={handleChange} />
                                <FormHelperText>
                                    send your feedback
                                </FormHelperText>
                            </FormControl>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: 'center'
                            }}>
                                <Button type='submit' onClick={handleSubmit} variant='solid' sx={{
                                    bgColor: 'whatsapp.700',
                                    w: '30vw',
                                    "&:hover":{
                                        bgcolor:'white',
                                        color:"whatsapp.700"
                                    },
                                }}>
                                    send
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </CardBody>
            </Card>
        </div>
    );
}
