import React from 'react'
import styled from 'styled-components'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const Image = styled.img`

width:50%;
zindex:0;
height:100vh;
border-radius: 30%;
display: flex;
align-self: center;
`
// const Para = styled.

// const p 
const NasaCard = (props) => {

    const { title, date, hdurl, explanation, newDate, setNewDate} = props

    return (

              <div className='info' key={props.key}>
                <Card className='card'>
                  <CardBody>
                    <CardTitle className='title' >Todays Nasa Image: {title} </CardTitle>
                    <CardSubtitle>{date}</CardSubtitle>
                    <label>
                        Search a new date: <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
                    </label>
                  </CardBody>
                  <Image src={hdurl} />
                  <CardBody>
                    <CardText className='para'>{explanation}</CardText>
                  </CardBody>
                </Card>
              </div>
            );
          };

export default NasaCard;
