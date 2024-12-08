import { useNavigate } from "react-router-dom";
import { UserRound, ChartColumn } from "lucide-react";
import Logo from "../../assets/images/mainLogo.png";

interface HeaderProps {
    backgroundWidth?: string;
}

const Header = ({ backgroundWidth }: HeaderProps) => {
    const navigate = useNavigate();

    return (
        <div
            className={`flex flex-row justify-between items-center px-7 py-3`}
            style={{
                width: backgroundWidth || "100%",
            }}
        >
            <img src={Logo} alt="Main Logo"
                 className="h-10 cursor-pointer"
                 onClick={() => navigate('/')}
            />
            <div className="flex flex-row gap-4">
                <ChartColumn
                    className="font-black cursor-pointer"
                    onClick={() => navigate('/rank')}
                />
                <UserRound
                    className="font-black cursor-pointer"
                    onClick={() => navigate('/mypage')}
                />
            </div>
        </div>
    );
};

export default Header;
