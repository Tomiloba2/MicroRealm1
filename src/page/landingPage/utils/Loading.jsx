import { Box, Skeleton, Stack } from '@chakra-ui/react';
//import * as React from 'react';


export function LandingPage_Loading () {
  return (
    <div>
      <Box m='10'>
        <Stack m='5'>
            <Skeleton height='30px'/>
            <Skeleton height='30px'/>
            <Skeleton height='30px'/>
        </Stack>
      </Box>
    </div>
  );
}
