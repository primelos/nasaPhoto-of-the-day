import React from 'react'


const NasaCard = (props) => {

    const { title, date, hdurl, explanation} = props

    return (
        <div className='info'>
            <div key={props.key}>
                <h1>Todays Nasa Image: {title} </h1>
                <h4>Photo date: {date} </h4>
            </div>
            <div>
                <img src={hdurl} />
            </div>
            <div>
                <p>
                    {explanation}
                </p>
            </div>
        </div>


    )

}
export default NasaCard;
