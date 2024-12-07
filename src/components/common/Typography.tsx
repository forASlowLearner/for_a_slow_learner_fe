import React from 'react'

interface Props {
    title: string,
    type: "h1" | "h2" | "h3" | "h4" | "body1"| "body2"| "body3"| "body4"| "small1" | "small2" | "small3" ,
}

export default function Typography({title, type}: Props) {
    const render = () => {
        if(type === 'h1'){
            return <div className='text-[40px] font-extrabold'>{title}</div>
        } else if(type === 'h2'){
            return <div className='text-[35px] font-bold'>{title}</div>
        } else if(type === 'h3'){
            return <div className='text-[30px] font-semibold'>{title}</div>
        } else if(type === 'h4'){
            return <div className='text-[25px] font-semibold'>{title}</div>
        } else if(type === 'body1'){
            return <div className='text-[20px] font-bold'>{title}</div>
        } else if(type === 'body2'){
            return <div className='text-[20px] font-medium'>{title}</div>
        } else if(type === 'body3'){
            return <div className='text-[18px] font-bold'>{title}</div>
        } else if(type === 'body4'){
            return <div className='text-[18px] font-medium'>{title}</div>
        } else if(type === 'small1'){
            return <div className='text-[15px] font-medium'>{title}</div>
        } else if(type === 'small2'){
            return <div className='text-[15px] font-medium'>{title}</div>
        } else if(type === 'small3'){
            return <div className='text-[13px] font-regular'>{title}</div>
        } 
        
    }

    return (
        <>
            {render()}
        </>
    )
}