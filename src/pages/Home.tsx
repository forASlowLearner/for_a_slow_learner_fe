import React, { useEffect, useState } from "react";
import MainLayout from "./../components/layout/Layout";
import BackGround from "./../assets/images/backgroundImg.png";
import Splash from "./../components/common/Splash";
import Login from "./Login";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogon, setIsLogon] = useState(false);
  setTimeout(() => {
    console.log("TimeOut");
    setIsLoading(false);
  }, 1500);
  useEffect(() => {
    console.log("Home page is loaded");
  }, [isLoading]);
  return (
    <>
      {isLoading && (
        <MainLayout backgroundImage={BackGround}>
          <Splash>
            <div>Created by Yukbibim</div>
          </Splash>
        </MainLayout>
      )}
      {!isLoading &&
        !isLogon && ( //로그인 안 한 상태
          <MainLayout backgroundImage={BackGround}>
            <Login />
          </MainLayout>
        )}
      {!isLoading &&
        isLogon && ( //로그인 한 상태
          <MainLayout backgroundImage={BackGround}>
            <h1 className="text-xl font-bold text-center">Welcome to My App</h1>
            <p className="text-center text-gray-600">
              This is a sample home page
            </p>
          </MainLayout>
        )}
    </>
  );
};

export default Home;
