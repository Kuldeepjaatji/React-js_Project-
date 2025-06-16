import React, { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../Api/postApi';
import { Loader } from '../components/UI/Loader';

export const Country = () => {

  const [ispending,startTransition] = useTransition();
  const [countries,setcountries] = useState([]);

  useEffect(()=>{
    startTransition(async()=>{
      const res = await getCountryData()
      setcountries(res.data);
    })
    
  },[])

  if (ispending) return <Loader/>

  return (
    <>
    <h1>loading
      
    </h1>
    </>
  )
}
