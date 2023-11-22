import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {

  const [tag,setTag]= useState('car');
  const {gif,loading,fetchData}= useGif(tag);

  function clickHandler(){
    fetchData();

  }

  function changeHandler(event){
    setTag(event.target.value)
  }

  return (
    <div className='w-1/2 h-[400px] bg-rose-300 rounded-2xl border-[5px] border-rose-500 flex flex-col items-center gap-y-5 mt-[10px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="400" alt='gif' className='overflow-hidden' />)
      }
      
      <input type="text" className='w-10/12  bg-white opacity-80 text-lg py-2 rounded-lg mb-[2px] text-center text-bold'
        onChange={changeHandler}
        value={tag}
      />
      <button onClick={clickHandler}
      className='w-10/12 bg-white opacity-80 text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Tag
