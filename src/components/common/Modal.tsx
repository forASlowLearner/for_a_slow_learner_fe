import React from 'react'

type Props = {}

export default function Modal({ }: Props) {
    return (
        <>
            <div className='bg-[#363636e6] w-[100%] h-[100vh] relative'></div>
            <div className='absolute inset-0 flex items-center justify-center '>
                <div className='bg-gray-200 p-4 rounded w-[310px]'>
                </div>
            </div>
        </>
    )
}