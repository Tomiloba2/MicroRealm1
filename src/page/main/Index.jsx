import { Box } from "@chakra-ui/react";
import SideBar from "./layout/Sidebar";
import MainPage_Section from "./Main";
import BottomBar from "./layout/BootomBar";

const MainPage = () => {
    return (
        <>
            <Box sx={{
                overflow: 'hidden',
                height: "100vh",
                bgColor:'blackAlpha.900',
                color:'whiteAlpha.700'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection:{base:'column-reverse',sm:'row'},
                    height: '100vh'
                }}>
                    <Box flex='1 0 10%' sx={{
                        display:{base:'none',sm:'block'}
                    }}>
                        <SideBar />
                    </Box>
                    <Box sx={{
                        display:{base:'block',sm:'none'}
                    }}>
                        <BottomBar/>
                    </Box>
                    <Box overflowY='auto'>
                        <MainPage_Section />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default MainPage;