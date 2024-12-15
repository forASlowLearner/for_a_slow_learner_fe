import React from 'react';
import MainLayout from './../components/layout/Layout';
import BackGround from './../assets/images/backgroundImg.png';

const Home = () => {
  // const [inputValue, setInputValue] = useState("");
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };
  return (
    <MainLayout backgroundImage={BackGround}>
      <h1 className="text-xl font-bold text-center">Welcome to My App</h1>
      <p className="text-center text-gray-600">This is a sample home page</p>
      {/* <Input
        type="text"
        placeholder="텍스트를 입력하세요"
        value={inputValue}
        onChange={handleInputChange}
        className="mt-4"
      />
      <Button type="button" className="mt-4" onClick={() => alert(inputValue)}>
        <div>test</div>
      </Button> */}
    </MainLayout>
  );
};

export default Home;
