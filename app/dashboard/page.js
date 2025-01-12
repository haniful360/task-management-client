'use client'
import withAuth from '@/component/hoc/withAuth';
import MainContent from '@/components/MainContent/MainContent';
import React from 'react';

const page = () => {
    return (
        <div>
             <MainContent />
        </div>
    );
};

export default withAuth(page);