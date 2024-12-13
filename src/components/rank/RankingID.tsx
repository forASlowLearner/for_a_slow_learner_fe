import React from 'react'
import Typography from '../common/Typography';
import RankProfile from '../../assets/images/rankProfile.png';
type Props = {}

function RankingID({ }: Props) {
    return (
        <>
            <div className='px-[30px] py-[7px] flex justify-between'>
                <div className='flex gap-[5%] items-center'>
                    <Typography title='1' type='body4' />
                    <img src={RankProfile} />
                    <div>
                        <Typography title='닉네임' type='small1' />
                        <Typography title='(abcabc@kakao.com)' type='small3' />
                    </div>
                </div>
                <div className='mt-[8px]'>
                    <Typography title='150점' type='body4' />
                </div>
            </div>
            
        </>
    )
}

export default RankingID