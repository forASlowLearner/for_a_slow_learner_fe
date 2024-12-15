import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUserInfo } from './../services/userService';

const useUserInfo = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState<number>(1);

    const handleNameSubmit = () => {
        if (name.trim()) {
            setShowModal(true);
        }
    };

    const handleNextPage = () => {
        navigate('/quiz');
    }

    const handleNextStep = () => {
        setShowModal(false);
        setStep(2);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setStep(1);
    };

    const handleBirthdaySubmit = async () => {
        if (birthday.trim()) {
            try {
                const response = await saveUserInfo(name, birthday);
                if (response.status === 200) {
                    alert(`성공적으로 정보가 저장되었습니다. 이름: ${name}, 생일: ${birthday}`);
                } else {
                    alert('서버에서 정보를 처리하는 동안 오류가 발생했습니다.');
                }
            } catch (error) {
                alert('서버와 연결하는 동안 문제가 발생했습니다.');
                console.error(error);
            }
        }
        navigate('/pre-test');
    };

    return {
        name,
        setName,
        birthday,
        setBirthday,
        showModal,
        setShowModal,
        step,
        setStep,
        handleNameSubmit,
        handleNextStep,
        handleNextPage,
        handleModalClose,
        handleBirthdaySubmit,
    };
};

export default useUserInfo;
