import React from 'react';
import cBlue from '../../assets/images/categoryBlue.png';
import cYellow from '../../assets/images/categoryYellow.png';
import BookmarkContent from './BookmarkContent';
import Typography from '../common/Typography'; 

interface MainLayoutProps {
  backgroundWidth?: string; 
}

const Bookmark = ({ backgroundWidth }: MainLayoutProps) => {
  const bookmarks = [
    { category: "물" }, 
    { category: "사탕" },
    { category: "전자레인지" },
    { category: "전자레인지" },
    { category: "물" },
    { category: "사탕" },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-[5%]">
        {bookmarks.map((bookmark, index) => {
          const imageSrc = (index % 4 === 0 || index % 4 === 3) ? cBlue : cYellow;

          return (
            <div key={index} className="relative">
              <img className="w-[100%]" src={imageSrc} />
              <div className="absolute inset-0 flex items-center justify-center z-[1]">
                <Typography title={bookmark.category} type='body4' />
              </div>
            </div>
          );
        })}
      </div>
      <BookmarkContent />
    </>
  );
};

export default Bookmark;
