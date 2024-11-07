import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material/styles';
import Image from '../../imgs/DiscountContexImage.png'

export default function Discount1() {
    const theme = useTheme();

    return (
        <>
            <Box sx={{
                width: '100%',
                height: '30vw',
                display: 'flex',
                flexDirection: 'row',
                bgcolor: theme.palette.background,
                padding: '0px 100px',
                margin: '25px 0',
            }} role="presentation">
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    width: '30%',
                    bgcolor: theme.palette.primary.main,
                    borderTopLeftRadius: '20px',
                    borderBottomLeftRadius: '20px',
                    padding: '30px',
                }}>
                    <img
                        src={Image}
                        alt="Discount Context"
                        style={{width: '100%', height: 'auto', borderRadius: '10px'}}/>
                </Box>
                <Box sx={{
                    flexGrow: 1,
                    bgcolor: theme.palette.secondary.main,
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px',
                    padding: '30px',
                }}>
                    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', height: '20%' }}>
                            <p>Oglnie mega wazyny tekst <br /> I jakis mniej wazny</p>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Box sx={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between', // dodano wyśrodkowanie i odstępy
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                    width: '25%',
                                    borderRadius: '20px',
                                    bgcolor: theme.palette.third.main,
                                }}>
                                    :)
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                    width: '25%',
                                    borderRadius: '20px',
                                    bgcolor: theme.palette.third.main,
                                }}>
                                    :/
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                    width: '25%',
                                    borderRadius: '20px',
                                    bgcolor: theme.palette.third.main,
                                }}>
                                    :(
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
