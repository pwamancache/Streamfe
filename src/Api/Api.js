import React from 'react';

const Apicall = async (url)=>
    {
    try
        {
        const res = await fetch(url,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        const result = await res.json()
        return result
    }
    catch(e)
    {
        console.log("Error in api call " + e)
    }
    }


export default Apicall;