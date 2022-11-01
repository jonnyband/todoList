import { React, useState } from "react";
import { Task } from "../Task";
import { Taskbar, TaskTypePending, TaskTypeCurrent, TaskTypeDone, Form, ScrollableContainer } from "./styled";

export function TaskColumns() {


    const [tasks, setTasks] = useState(
        {
            pending: [],
            current: [],
            done: []

        }

    );

    const [newTaskTxt, setNewTaskTxt] = useState(

        {
            pending:'',
            current:'',
            done:''
        }
    
    );

    function handleNewTask(event, role) {
        if(role === "pending"){
        setNewTaskTxt({...newTaskTxt, pending:event.target.value})
        }
        else if(role === "current"){
            setNewTaskTxt({...newTaskTxt, current:event.target.value})

        }
        else if(role === "done"){
        setNewTaskTxt({...newTaskTxt, done:event.target.value})
        }
    }
    


    function handleCreateNewTask(event, role) {
        event.preventDefault();

        const NewTask = {
            id: Math.random(),
            content: newTaskTxt,
        }

        if (role === "pending") {

            const NewTask = {
                id: Math.random(),
                content: newTaskTxt.pending,
            }

            setTasks({ ...tasks, pending: [...tasks.pending, NewTask] });
            setNewTaskTxt({...newTaskTxt, pending:''})
        } else if (role === "current") {

            const NewTask = {
                id: Math.random(),
                content: newTaskTxt.current,
            }

            setTasks({ ...tasks, current: [...tasks.current, NewTask] });
            setNewTaskTxt({...newTaskTxt, current:''})
        }
        else {

            const NewTask = {
                id: Math.random(),
                content: newTaskTxt.done,
            }

            setTasks({ ...tasks, done: [...tasks.done, NewTask] });
            setNewTaskTxt({...newTaskTxt, done:''})

        }



    }

    function deleteTask(id, role) {

        if (role === "pending") {
            const taskWithoutDeletedOne = tasks.pending.filter((task) => task.id !== id)
            setTasks({ ...tasks, pending: [...taskWithoutDeletedOne] });
        }
        else if (role === "current") {
            const taskWithoutDeletedOne = tasks.current.filter((task) => task.id !== id)
            setTasks({ ...tasks, current: [...taskWithoutDeletedOne] });
        }
       else if (role === "done") {
            const taskWithoutDeletedOne = tasks.done.filter((task) => task.id !== id)
            setTasks({ ...tasks, done: [...taskWithoutDeletedOne] });
        }
    }

    return (
        <>
            <Taskbar><TaskTypePending><h1>Pendente</h1></TaskTypePending>
                <ScrollableContainer>
                    {tasks.pending.map(task => {
                        return (
                            <Task
                                key={task.id}
                                task={task}
                                onDeleteTask={() => deleteTask(task.id, "pending")}
                            />
                        )
                    })}
                </ScrollableContainer>
                <Form onSubmit={(e) => handleCreateNewTask(e, "pending")}>
                    <textarea
                        placeholder="Nova tarefa..."
                        required
                        value={newTaskTxt.pending}
                        onChange={(e) => handleNewTask(e, "pending")}
                    />

                    <footer>
                        <button type="submit">Publicar</button>
                    </footer>
                </Form>
            </Taskbar>
            <Taskbar><TaskTypeCurrent><h1>Em Andamento</h1></TaskTypeCurrent>
                <ScrollableContainer>
                    {tasks.current.map(task => {
                        return (
                            <Task
                                key={task.id}
                                task={task}
                                onDeleteTask={() => deleteTask(task.id, "current")}
                            />
                        )
                    })}
                </ScrollableContainer>
                <Form onSubmit={(e) => handleCreateNewTask(e, "current")}>
                    <textarea
                        placeholder="Nova tarefa..."
                        required
                        value={newTaskTxt.current}
                        onChange={(e) => handleNewTask(e, "current")}
                    />

                    <footer>
                        <button type="submit">Publicar</button>
                    </footer>
                </Form>
            </Taskbar>

            <Taskbar><TaskTypeDone><h1>Relizadas</h1></TaskTypeDone>
                <ScrollableContainer>
                    {tasks.done.map(task => {
                        return (
                            <Task
                                key={task.id}
                                task={task}
                                onDeleteTask={() => deleteTask(task.id, "done")}
                            />
                        )
                    })}
                </ScrollableContainer>
                <Form onSubmit={(e) => handleCreateNewTask(e, "done")}>
                    <textarea
                        placeholder="Nova tarefa..."
                        required
                        value={newTaskTxt.done}
                        onChange={(e) => handleNewTask(e, "done")}
                    />

                    <footer>
                        <button type="submit">Publicar</button>
                    </footer>
                </Form>
            </Taskbar>

        </>
    )
}
