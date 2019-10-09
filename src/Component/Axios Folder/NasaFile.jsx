import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NasaCard from './NasaCard'


const NasaFile = () => {
    const [nasa, setNasa] = useState([])
    let nasaKey = `JGYKNM6h2ZRuzKYCFlKHU3q8PovytMseIoTGK5h0`
    let pullData = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`
    

    useEffect(() => {
        axios.get(pullData)
            .then(response => {
                console.log(response.data)
                setNasa(response.data)
            })
            .catch(error =>{
                console.log(`No Good`, error)
            })
    }, [])
    return(
        <div className='info-card'>
          
                <NasaCard key={nasa.index} title={nasa.title} date={nasa.date} explanation={nasa.explanation} hdurl={nasa.hdurl}   />
                
        </div>
    )
}
export default NasaFile;