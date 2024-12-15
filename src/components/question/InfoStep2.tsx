import React from 'react';
import Balloon from "../question/Balloon";
import Typography from "../common/Typography";

interface Step2Props {
    birthday: string;
    setBirthday: React.Dispatch<React.SetStateAction<string>>;
    handleBirthdaySubmit: () => void;
}

const Step2 = ({ birthday, setBirthday, handleBirthdaySubmit }: Step2Props) => {
    return (
        <div className="mt-6 text-center">
            <Balloon arrowPosition="center">
                <Typography title="생일이 언제인가요?" type="body5" />
            </Balloon>
            <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="mt-4 p-2 border rounded w-full"
            />
            <div className="mt-4 flex justify-center gap-4">
                <button
                    onClick={handleBirthdaySubmit}
                    className="px-4 py-2 rounded bg-blue-500 text-white"
                >
                    완료
                </button>
            </div>
        </div>
    );
};

export default Step2;
