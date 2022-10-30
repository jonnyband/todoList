import {React, useState} from "react";
import { Task } from "../Task";
import { Taskbar, TaskTypePending, TaskTypeCurrent, TaskTypeDone, Content } from "./styled";

export function TaskColumns(){


    const [tasks, setTasks] = useState([
        {
            id: Math.random(),
            content: "Comentario Padrao"
        }
    ])

    const [newTaskTxt, setNewTaskTxt] = useState('');

    function handleNewTask(event) {
        setNewTaskTxt(event.target.value)
    }


    function handleCreateNewTask(event) {
        event.preventDefault();

        const NewTask = {
            id: Math.random(),
            content: newTaskTxt,
        }

        setTasks([...tasks, NewTask]);
        setNewTaskTxt('')

    }

    function deleteTask(id) {
        const taskWithoutDeletedOne = tasks.filter((task) => task.id !== id)

        setTasks(taskWithoutDeletedOne);
    }



    return(
        <>
<Taskbar><TaskTypePending><h1>Pendente</h1></TaskTypePending>

</Taskbar>    
<Taskbar><TaskTypeCurrent><h1>Em andamento</h1></TaskTypeCurrent>


</Taskbar>
<Taskbar><TaskTypeDone><h1>Relizadas</h1></TaskTypeDone>

                {tasks.map(task => {
                    return (
                        <Task
                            key={task.id}
                            task={task}
                            onDeleteTask={deleteTask}
                        />
                    )
                })}
           
</Taskbar>
</>
    )
}