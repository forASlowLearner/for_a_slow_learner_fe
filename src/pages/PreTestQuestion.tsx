import React from "react";
import MainLayout from './../components/layout/Layout';
import Balloon from "./../components/question/Balloon";
import Typography from "./../components/common/Typography";
import useUserInfo from './../hooks/userInfo';
import Button from "./../components/common/Button";
import BackGround from "./../assets/images/backgroundImg.png";

function PreTestQuestion() {
    const {
        handleNextPage,
    } = useUserInfo();

    return (
        <MainLayout backgroundImage={BackGround}>
            <Balloon arrowPosition="center">
                <Typography title="만나서 반가워요 👍
                                    그러면 가입 전에 몇가지 질문에
                                    답변 부탁드릴게요!" type="body5" />
            </Balloon>
            <div className="mt-4 text-center px-8">
                <Typography className="text-gray-400 w-[70%] m-auto"
                            title="해당 질문들은 사용자의 경계성 지능 장애 유무를 확인하기 위한 절차입니다."
                            type="body5"
                />
                <Button
                    type="button"
                    color="green"
                    onClick={handleNextPage}
                    className="mt-8 px-4 py-2"
                >
                    답변하러 가기
                </Button>
            </div>
        </MainLayout>
    );
};

export default PreTestQuestion;
