'use client'
import React from 'react';
//import { Backdrop, CircularProgress } from '@mui/material';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
interface LoadingInterface {
    open: boolean;
}

const LoadingCustom = ({ open = true }: LoadingInterface) => (
    <Backdrop
        open={open}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1000 }}
    >
        <CircularProgress color='inherit' />
    </Backdrop>
);

export default LoadingCustom;
