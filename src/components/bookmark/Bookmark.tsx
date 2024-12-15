import React from 'react';
import cBlue from '../../assets/images/categoryBlue.png';
import cYellow from '../../assets/images/categoryYellow.png';

interface MainLayoutProps {
  backgroundWidth?: string; // 배경 이미지 너비
}

const Bookmark = ({ backgroundWidth }: MainLayoutProps) => {
  return (
    <>
      <div className='grid grid-cols-2 gap-[5%] '>
        <img className='w-[100%]' src={cBlue} />
        <img className='w-[100%]' src={cYellow} />
        <img className='w-[100%]' src={cYellow} />
        <img className='w-[100%]' src={cBlue} />
        <img className='w-[100%]' src={cBlue} />
        <img className='w-[100%]' src={cYellow} />
      </div>
    </>
  );
};

export default Bookmark;
