import styled from "styled-components";

export const TaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    border-top: 1px solid;
    border-color: black;
    



    p{
     word-break: break-all;
     width: 15vh;
    }

    button {
        background: transparent;
        border: 0;
        color: #8d8d99;
        line-height: 0;
    }
    :hover button {
        color: red;
    }
    `