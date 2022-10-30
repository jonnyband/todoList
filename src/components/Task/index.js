// import { Trash } from 'phosphor-react'


    export function Task({ task, onDeleteTask }) {

    function handleDeleteTask() {
        onDeleteTask()
    }

    return (
        <>

            <p>{task.content}</p>
            <button onClick={handleDeleteTask} title="Deletar tarefa">
                
            </button>
            </>
    )
}