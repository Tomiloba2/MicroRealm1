import { Box, Text, Button } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import surburb from '../asset/cinema2.jpg'
import game2 from '../asset/videogame.jpg'
import movie1 from '../asset/cinema1.jpg'
import { useNavigate } from 'react-router-dom';

//import * as React from 'react';


export function LandingPage_Hero() {
    const navigate = useNavigate()
    const heroList = [
        {
            id: 1,
            text: 'The best movies',
            img: surburb
        },
        {
            id: 2,
            text: 'The best Games',
            img: game2
        },
        {
            id: 3,
            text: 'All in one',
            img: movie1
        }
    ]
    return (
        <Box>
            <Box>
                <Swiper spaceBetween={10}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                >
                    {heroList.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Box sx={{ position: 'relative' }}>
                                    <img src={item.img} alt="" style={{
                                        width: "100vw",
                                        height: "75vh",
                                        opacity: '0.5'
                                    }} />
                                    <Box sx={{
                                        position: 'absolute',
                                        top: { base: 200, },
                                        left: { base: 50, sm: 100, md: 200, lg: 350 },
                                        right: { base: 50, sm: 100, md: 200, lg: 350 },
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Box>
                                            <Text sx={{
                                                fontSize: "2.5rem",
                                                fontStyle: 'italic'
                                            }}>{item.text}</Text>
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Button onClick={() => navigate('/auth/signup')} sx={{
                                                    bgColor: 'whatsapp.600',
                                                    color: "white",
                                                    w: "200px",
                                                    p: '2',
                                                    my: 5,
                                                    '&:hover': {
                                                        color: 'black'
                                                    }
                                                }}>
                                                    get started
                                                </Button>

                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Box>
        </Box>
    );
}
