import { Trash } from 'phosphor-react'

import {TaskContainer} from "./styled"


    export function Task({ task, onDeleteTask }) {

    function handleDeleteTask() {
        onDeleteTask(task.id)
    }

    return (
        <TaskContainer>
        <p>{task.content}</p>
        <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={24} />
        </button>
        </TaskContainer>
    )
}