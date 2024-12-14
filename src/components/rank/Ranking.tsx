import React from 'react'
import Typography from '../common/Typography';
import RankImg from '../../assets/images/rankImg.png';
import RankingID from './RankingID';

type Props = {}

function Ranking({ }: Props) {
    return (
        <>
            <div className='bg-[#C7DDF8] w-[90%] m-[auto] rounded-[16px] relative'>
                <div className='text-center my-[20px]'>
                    <Typography title='랭킹' type='body1' />
                </div>
                <div className='bg-[white] w-[90%] m-[auto] rounded-[16px] mb-[100px] h-[480px]'>
                    <RankingID />
                </div>
                <div className='absolute top-[52%] left-[0%] transform -translate-y-1/2 z-[1]'>
                    <img src={RankImg} />
                </div>
            </div>
            <button className='bg-[#C7DDF8] w-[90%] m-[auto] rounded-[16px] mt-[15px] h-[50px]'>
                <Typography title='내 순위 확인하기' type='small1' />
            </button>
        </>
    )
}

export default Ranking