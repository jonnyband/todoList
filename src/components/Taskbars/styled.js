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



export const Form = styled.form`
    width: 100%;
    margin-top: 1.5rem;
    padding: 1.5rem 0;
    border-top: 1px solid #323238;

    strong {
        line-height: 1.6;
        color: #e1e1e6
    }

    textarea {
        width: 100%;
        resize: none;
        max-width: 97%;
        background-color: #121214;

        color: #e1e1e6;
    }

    button {
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        border-radius: 8px;
        border: 0;
        background-color: #00875f;
        color: white;
        transition: background-color 0.5s;
    }

    button[type=submit]:not(:disabled):hover{
        background: #00b37E;
    }

`;