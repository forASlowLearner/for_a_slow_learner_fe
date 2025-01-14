import React from 'react';
import Balloon from "../question/Balloon";
import Typography from "../common/Typography";
import Input from "../common/Input";
import Button from "../common/Button";

interface Step2Props {
    birthday: string;
    setBirthday: React.Dispatch<React.SetStateAction<string>>;
    handleBirthdaySubmit: () => void;
}

const Step2 = ({ birthday, setBirthday, handleBirthdaySubmit }: Step2Props) => {
    return (
        <div>
            <Balloon arrowPosition="center">
                <Typography title="생일이 언제인가요?" type="body5"/>
            </Balloon>
            <Input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="mt-4 p-2 border rounded"
            />
            <Button
                color="green"
                onClick={handleBirthdaySubmit}
                className="mt-4 p-2 rounded"
            >
                완료
            </Button>
        </div>
    );
};

export default Step2;
