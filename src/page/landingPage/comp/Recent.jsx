import { Box, Card, CardBody, Heading, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { LandingPage_Loading } from '../utils/Loading';
import * as React from 'react'


//fetching data
const movieapiKey = import.meta.env.VITE_movieApiKey
const gameapikey = import.meta.env.VITE_gameApiKey
const fetchMovie = async () => {
    const movie = await fetch(`https://api.themoviedb.org/3//movie/popular?api_key=${movieapiKey}`)
    if (!movie.ok) {
        return ('an error occured')
    }
    const data = await movie.json()
    return data.results
}
const fetchGame = async () => {
    const game = await fetch(`https://api.rawg.io/api/games?key=${gameapikey}&dates=2022-09-01,2023-09-30&platforms=18,1,7`)
    if (!game.ok) {
        return ("an error occured")
    }
    const data = await game.json()
    return data.results
}
//tsx element


const LandingPage_Recent = () => {

    const movies = useQuery({
        queryKey: ['popular'],
        queryFn: fetchMovie
    })
    const games = useQuery({
        queryKey: ['gaming'],
        queryFn: fetchGame
    })

    //loading movies
    if (movies.isLoading) {
        return (
            <Box><LandingPage_Loading /></Box>
        )
    }
    if (movies.error instanceof Error) {
        return (
            <>
            {movies.error?.message}
            </>
        )
    }
    // loading games
    if (games.isLoading) {
        return (
            <Box><LandingPage_Loading /></Box>
        )
    }
    if (games.error instanceof Error) {
        return (
            <>{games.error?.message}</>
        )
    }


    return (
        <>
            <Box as='div' textAlign='center'>
                <Card sx={{
                    m: 10,
                    p: 5,
                    bgColor: 'blackAlpha.500',
                    color: 'whiteAlpha.500'
                }}>
                    <CardBody>
                        <Box>
                            <Heading sx={{
                                textAlign: 'center'
                            }}>
                                Recent Movies
                            </Heading>
                            <Box sx={{
                                m: 5,
                                display: "grid",
                                gridTemplateColumns: { md: 'auto auto auto' },
                                gap: 5
                            }}>
                                {movies.data?.slice(0, 3).map((list) => {
                                    return (
                                        <Box key={list.id}>
                                            <img src={`https://image.tmdb.org/t/p/original/${list.backdrop_path}`} alt={list.original_title} />
                                            <Text fontSize='1rem'>{list.original_title}</Text>
                                            <br />
                                            <Text>
                                                {list.overview.slice(0, 100)}...
                                            </Text>
                                            <br />
                                        </Box>
                                    )
                                })}
                            </Box>
                        </Box>
                        <br />
                        <Box>
                            <Heading sx={{
                                textAlign: 'center'
                            }}>
                                Recent Games
                            </Heading>
                            <Box sx={{
                                m: 5,
                                display: "grid",
                                gridTemplateColumns: { md: 'auto auto auto' },
                                gap: 5
                            }}>
                                {games.data?.slice(0, 3).map((list, id) => {
                                    return (
                                        <Box key={id}>
                                            <img src={list.background_image} alt={list.slug} />
                                            <Text>{list.name}</Text>
                                            <br />
                                        </Box>
                                    )
                                })}
                            </Box>
                        </Box>
                    </CardBody>
                </Card>
            </Box>
        </>
    );
}

export default LandingPage_Recent