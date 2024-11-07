import React, { useState } from "react";
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import Slider1 from '../../imgs/Slider1.png';
import Slider2 from '../../imgs/Slider2.png';
import Slider3 from '../../imgs/Slider3.png';

const images = [
    Slider1,
    Slider2,
    Slider3
]

export default function Slider() {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }

    const handleNext = () => {
        setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }

    return (
        <Box sx={{ width: '100%', margin: '0 auto' }}>
            <Box sx={{ position: 'relative', width: '100%', height: '400px' }}>
                <Box
                    component="img"
                    src={images[index]}
                    alt={`Slide ${index}`}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <IconButton
                    onClick={handlePrev}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                        },
                    }}
                >
                    <ArrowBackIos />
                </IconButton>
                <IconButton
                    onClick={handleNext}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                        },
                    }}
                >
                    <ArrowForwardIos />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                {images.map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => setIndex(i)}
                        sx={{
                            height: 10,
                            width: 10,
                            bgcolor: i === index ? 'black' : 'grey.500',
                            borderRadius: '50%',
                            display: 'inline-block',
                            mx: 0.5,
                            cursor: 'pointer',
                        }}
                    />
                ))}
            </Box>
        </Box>
    )
}
