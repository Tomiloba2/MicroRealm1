import {
    Box,
    Container,
    Heading,
    Text
} from '@chakra-ui/react';
//import * as React from 'react';
import game3 from '../asset/game3.jpg'
import movie2 from '../asset/movie1.jpg'

export function LandingPage_About() {
    const imgStyle={
        borderRadius:"20px"
    }
    return (
        <div>
            <Container maxWidth='60vw'>
                <Heading sx={{
                    textAlign: "center"
                }}>
                    About Us
                </Heading>
                <Box>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: {md:'auto auto'},
                        gap:5
                    }}>
                        <img src={movie2} alt="movie" style={imgStyle} />
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Veritatis magni excepturi ad cumque reprehenderit esse,
                            obcaecati illo ullam facilis, ducimus doloribus, mollitia
                        </Text>
                    </Box>
                    <br />
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: {md:"auto auto"},
                        gap:5
                    }}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Veritatis magni excepturi ad cumque reprehenderit esse,
                            obcaecati illo ullam facilis, ducimus doloribus, mollitia
                        </Text>
                        <img src={game3} alt="movie" style={imgStyle} />
                    </Box>
                </Box>
            </Container>
        </div>
    );
}
