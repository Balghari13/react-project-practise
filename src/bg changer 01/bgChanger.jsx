import React,{useState} from 'react'
import '../index.css'


const BgChanger = () => {
    const [color, setColor]= useState('black')
 return(
    <>
    <div className='w-full h-screen duration-200' 
    style={{
        backgroundColor:color
    }}>
        <h2 className='text-white
        h-screen flex items-center justify-center '>Change background color</h2>
    
    <div className='fixed justify-center bottom-12 flex flex-wrap inset-x-0 px-2'>
       <div className='flex flex-wrap justify-center bg-red-200 gap-3 shadow-lg px-2 py-2 rounded-3xl'>

        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-700'  onClick={()=>setColor('red')}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-700' onClick={()=>setColor('green')}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-700' onClick={()=>setColor('yellow')}>Yellow</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-700' onClick={()=>setColor('purple')}>Purple</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-700' onClick={()=>setColor('orange')}>Orange</button>
        </div>
    </div>
    
    </div>
   
    </>
 )
}

export default BgChanger