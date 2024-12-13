import React from 'react';
import MainLayout from './../components/layout/Layout';
import BackGround from './../assets/images/backgroundImg.png';
import Ranking from '../components/rank/Ranking';

const Rank = () => {
    return (
        <MainLayout backgroundImage={BackGround}>
            <Ranking/>
        </MainLayout>
    );
};

export default Rank;
