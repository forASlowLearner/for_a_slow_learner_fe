import React from "react";
import MainLayout from './../components/layout/Layout';
import TestStep from "./../components/question/TestStep";
import BackGround from "./../assets/images/backgroundImg.png";

const Quiz = () => {
    return (
        <MainLayout backgroundImage={BackGround}>
            <TestStep />
        </MainLayout>
    );
};

export default Quiz;
