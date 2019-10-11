import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NasaCard from './NasaCard'

const NasaFile = () => {
    let separate = new Date ();
    console.log(separate)
    console.log({separate})
    let month = separate.getUTCMonth( +1);
    let day = separate.getUTCDate();
    let year = separate.getUTCFullYear();

    let date = `${year}-${month}-${day}`

    const [nasa, setNasa] = useState([])
    const [newDate, setNewDate] = useState(date)

    let nasaKey = `JGYKNM6h2ZRuzKYCFlKHU3q8PovytMseIoTGK5h0&date=${newDate}`
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
    }, [newDate])
    return(
        <div className='info-card'>
                <NasaCard key={nasa.index} title={nasa.title} date={nasa.date} explanation={nasa.explanation} hdurl={nasa.hdurl} neDate={newDate} setNewDate={setNewDate}  />  
                
        </div>
    )
}
export default NasaFile;