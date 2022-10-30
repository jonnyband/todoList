import styled from "styled-components";

export const Taskbar = styled.div`

border: 4px solid #1B263B;
border-radius: 15px;
background-color: #247BA0;
width: 30vh;
height: 70vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;


`


export const TaskTypeDone = styled.div`
background-color: #26A96C;
width: 100%;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;


h1{
    font: bold;
    color: lightgray;
}

`

export const TaskTypeCurrent = styled.div`
background-color: #DC965A;
width: 100%;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;


h1{
    font: bold;
    color:lightgray;
}

`


export const TaskTypePending = styled.div`
background-color: #931621;
width: 100%;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;


h1{
    font: bold;
    color: lightgray;
}

`