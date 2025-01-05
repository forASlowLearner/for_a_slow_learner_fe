import React from 'react';
import Typography from '../common/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiper.css';
import { Navigation } from 'swiper/modules';

type Props = {};

function BookmarkContent({ }: Props) {
    const contents = [
        { ai_chat_id: 1, ai_response_text: '전자레인지에는 종이를 돌리지 마세요' },
        { ai_chat_id: 2, ai_response_text: '두 번째 카드 내용입니다.' },
        { ai_chat_id: 3, ai_response_text: '세 번째 카드 내용입니다.' },
        { ai_chat_id: 4, ai_response_text: '네 번째 카드 내용입니다.' },
        { ai_chat_id: 5, ai_response_text: '다섯 번째 카드 내용입니다.' },
    ];

    return (
        <div className="relative w-full">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={1.3} 
                centeredSlides={true}
                spaceBetween={20}
                loop={true} 
                className="mySwiper"
            >
                {contents.map((content, index) => (
                    <SwiperSlide
                        key={content.ai_chat_id}
                        className="bg-gray-100 rounded-[16px] shadow-lg p-5 flex items-center justify-center h-[300px]"
                    >
                        <div className="absolute top-4 right-4 text-black font-bold cursor-pointer">X</div>
                        <div className="text-center">
                            <Typography title={content.ai_response_text} type="body4" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default BookmarkContent;
