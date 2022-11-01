import styled from "styled-components";

export const Taskbar = styled.div`

border: 4px solid #1B263B;
border-radius: 15px;
background-color: #247BA0;
width: 30vh;
height: 70vh;
display: flex;
flex-direction: column;
align-items: top;
justify-content: flex-start;


`

export const ScrollableContainer = styled.div`

background-color: #247BA0;
display: flex;
flex-direction: column;
align-items: top;
justify-content: flex-start;
min-height: 45vh;
max-height: 45vh;
overflow-y: scroll;

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
    font-size: 1.5rem;
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
    font-size: 1.5rem;
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
    font-size: 1.5rem;
}

`



export const Form = styled.form`
    width: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    strong {
        line-height: 1.6;
        color: #e1e1e6
    }

    textarea {
        width: 100%;
        resize: none;
        max-width: 97%;
        background-color:#04151F ;
        margin-left: 0.5vh;

        color: #e1e1e6;
    }

    button {
        padding: 0.5rem 1.0rem;
        margin-top: 1rem;
        border-radius: 8px;
        border: 0;
        background-color: #B8B8D1;
        color: white;
        transition: background-color 0.5s;
    }

    button[type=submit]:not(:disabled):hover{
        background: #FFC145;
    }

`;