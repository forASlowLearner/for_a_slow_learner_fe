import React from 'react';
import MainLayout from './../components/layout/Layout';
import BackGround from './../assets/images/backgroundImg.png';
import Bookmark from '../components/bookmark/Bookmark';

interface MainLayoutProps {
    backgroundWidth?: string; // 배경 이미지 너비
}

const BookMark = ({ backgroundWidth }: MainLayoutProps) => {
    return (
        <MainLayout backgroundImage={BackGround}>
            <Bookmark/>
        </MainLayout>
    );
};

export default BookMark;
