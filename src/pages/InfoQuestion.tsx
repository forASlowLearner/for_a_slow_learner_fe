import React from 'react';
import MainLayout from './../components/layout/Layout';
import BackGround from './../assets/images/backgroundImg.png';
import Typography from "./../components/common/Typography";
import Modal from './../components/common/Modal';
import useUserInfo from './../hooks/userInfo';
import Step1 from './../components/question/InfoStep1';
import Step2 from './../components/question/InfoStep2';

function InfoQuestion() {
    const {
        name,
        setName,
        birthday,
        setBirthday,
        showModal,
        step,
        handleNameSubmit,
        handleNextStep,
        handleModalClose,
        handleBirthdaySubmit
    } = useUserInfo();

    return (
        <MainLayout backgroundImage={BackGround}>
            { step === 1 ? (
                <Step1 name={name} setName={setName} handleNameSubmit={handleNameSubmit} />
            ) : step === 2 ? (
                <Step2 birthday={birthday} setBirthday={setBirthday} handleBirthdaySubmit={handleBirthdaySubmit} />
            ): null }

            <Modal isOpen={showModal} onClose={handleModalClose}>
                <div className="text-center">
                    <Typography title={`${name}님이 맞으신가요?`}
                                type='body4' />
                    <div className="mt-4 flex justify-center gap-4">
                        <button onClick={handleNextStep} className="px-4 py-2 rounded bg-blue-500 text-white">
                            네
                        </button>
                        <button onClick={handleModalClose} className="px-4 py-2 rounded bg-gray-500 text-white">
                            아니요
                        </button>
                    </div>
                </div>
            </Modal>
        </MainLayout>
    );
}

export default InfoQuestion;
