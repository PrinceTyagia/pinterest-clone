import React from 'react'
import styled from 'styled-components'
import Pin from './Pin';
import './Mainboard.css';

function MainBoard(props) {


   let { pins } = props;

   



    return (
        <Wrapper>
             <Container className="mainboard_container">
             {pins.map((pin, index) => {
                    let {urls} = pin;
                    return <Pin key={index} urls={urls}/>
             })}
                   
            </Container>
        </Wrapper>
    )
}

export default MainBoard;

const Wrapper =  styled.div`
        background-color:white;
        display: flex;
        width:100%;
        height:100%;
        margin-top:15px;
        justify-content: center;

`

const Container = styled.div`
    
        /* display: flex;
        flex-wrap:wrap;
        align-items: flex-start; */
        
        /* column-gap: 10px; */
        margin : 0 auto;
        height: 100%;
        background-color:white;
`