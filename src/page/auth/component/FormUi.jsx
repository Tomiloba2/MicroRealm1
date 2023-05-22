import { Style } from './FormStyles';
import {
    Box,
    FormControl, FormLabel, Input,
    Button,
    Card,
    CardBody,
    CardHeader, Text, InputRightElement, InputGroup
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';


const FormUI = (props) => {
    const {
        InputList,
        id,
        handleSubmit,
        val } = props
    return (
        <>
            <Box>
                <Card sx={Style.card}>
                    <CardHeader sx={Style.cardHeader}>
                        {id}
                    </CardHeader>
                    <CardBody>
                        <Box>
                            <form action="" onSubmit={handleSubmit} method='POST'>
                                {InputList.map((item, id) => {
                                    return (
                                        <FormControl isRequired key={id} my='5'>
                                            <FormLabel>{item.label}</FormLabel>
                                            <InputGroup>
                                                <Input
                                                    type={item.type}
                                                    name={item.name}
                                                    value={item.value}
                                                    onChange={val.handleChange}
                                                    onBlur={item.isblur} />
                                                <InputRightElement onClick={item.pswdChange}>{item.icon}</InputRightElement>
                                            </InputGroup>
                                            <Text color='red.400'>{item.error}</Text>
                                        </FormControl>
                                    )
                                })}
                                <Box sx={Style.boxButton}>
                                    <Button type='submit' variant='solid' sx={Style.button}>
                                        send
                                    </Button>
                                </Box>

                            </form>
                        </Box>
                    </CardBody>
                </Card>
                <Box sx={Style.bottomBox}>
                    <Text>
                        Already have an account? &nbsp;
                        <Link
                            to={id === 'login' ? `/auth/signup` : `/auth/login`}
                            style={{ color: 'green' }}>
                            {id === 'login' ? 'sign up' : 'login'}
                        </Link>
                    </Text>
                </Box>
            </Box>
        </>
    );
}

export default FormUI;