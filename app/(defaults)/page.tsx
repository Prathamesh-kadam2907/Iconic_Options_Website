import Home from '@/components/components/HomePage/Home';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Iconic Options',
};

const page = () => {
    return <Home />;
};

export default page;
