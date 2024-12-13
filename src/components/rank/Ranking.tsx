import React from 'react'
import Typography from '../common/Typography';
import RankImg from './../assets/images/rankImg.png';
import RankingID from './RankingID';

type Props = {}

function Ranking({ }: Props) {
    return (
        <>
            <div className='bg-[#C7DDF8] w-[90%] m-[auto] rounded-[16px]'>
                <div className='text-center'>
                    <Typography title='랭킹' type='body1' />
                </div>
                <div className='bg-[white]'>
                    <RankingID/>
                </div>
            </div>
        </>
    )
}

export default Ranking