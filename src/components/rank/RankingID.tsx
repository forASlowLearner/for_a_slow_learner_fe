import React from 'react'
import Typography from '../common/Typography';
import RankProfile from '../assets/images/rankProfile.png';
type Props = {}

function RankingID({ }: Props) {
    return (
        <>
            <div className='px-[20px] py-[10px]'>
            <img src={RankProfile}/>
            <div>
                <Typography title='닉네임' type='small1' />
            </div>
            </div>

        </>
    )
}

export default RankingID