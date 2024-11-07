import React from "react";
import Slider from './Slider'
import Discount1 from "./discount1";
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material/styles';

export default function Home(){

    const theme = useTheme();

    return (
        <>
            <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }} role="presentation">
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' , padding:'25px'}}>
                    <Slider/>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Discount1/>
                </Box>
                <Box sx={{ flexGrow: 1 ,bgcolor:'purple'}}>
                    <h1>Cos tu bedzie okok2</h1>
                </Box>
            </Box>
        </>
    )
}