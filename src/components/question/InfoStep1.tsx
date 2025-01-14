import React from 'react';
import Balloon from "../question/Balloon";
import Typography from "../common/Typography";
import Input from "../common/Input";
import Button from "../common/Button";

interface Step1Props {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    handleNameSubmit: () => void;
}

const Step1 = ({ name, setName, handleNameSubmit }: Step1Props) => {
    return (
        <div className="px-4">
            <Balloon arrowPosition="center">
                <Typography
                    title='안녕하세요😳 저는 당신과 함께 걸어갈 표표입니다! 제가 당신을 뭐라고 부르면 될까요?' type='body5' />
            </Balloon>
            <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력하세요"
                className="mt-4 p-2 border rounded"
            />
            <Button
                color="green"
                onClick={handleNameSubmit}
                className="mt-4 p-2 rounded"
            >
                입력하기
            </Button>
        </div>
    );
};

export default Step1;
