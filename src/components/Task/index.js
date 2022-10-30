// import { Trash } from 'phosphor-react'

import { Container } from "./styled";

export function Task({ task, onDeleteTask }) {

    function handleDeleteTask() {
        onDeleteTask()
    }

    return (
        <Container>
            <p>{task.content}</p>
            <button onClick={handleDeleteTask} title="Deletar tarefa">
                {/* <Trash size={24} /> */}
            </button>
        </Container>
    )
}