import React from 'react';
import MainLayout from './../components/layout/MainLayout';
import BackGround from './../assets/images/backgroundImg.png';

const Home = () => {
    return (
        <MainLayout backgroundImage={BackGround}>
            <h1 className="text-xl font-bold text-center">Welcome to My App</h1>
            <p className="text-center text-gray-600">
                This is a sample home page
            </p>
        </MainLayout>
    );
};

export default Home;
