import {React, useEffect, useState} from 'react';

const Cities = () => {

    const [city, setCity] = useState('')

    const onSubmit =  (e) => {
       console.log(city); 
    }
    
    
    useEffect(() => {
        onSubmit()
    },[])


    return (
        <div className=' form '>
            <form onSubmit={onSubmit}>
                <div className=' search'>
                    <input type="text" placeholder='City' onChange = {(e)=> setCity(e.target.value)} />
                    <button type="submit"> Search </button>
                </div>
            </form>
        </div>
    );
};

export default Cities;