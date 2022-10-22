
import { useContext } from "react"
import { taskState, Task } from "../Contexts/TaskContext"
import { TaskItem } from "./ItemTask"

interface TaskListProps{
    tasks: Task[]
    onChangeTask: any
    onDeleteTask: (taskId: number) => void
}


export function TaskList(){

    const tasks = useContext(taskState)

    return (
        <>
            <ul>
                {tasks.map(task => (
                   <TaskItem key={task.id} 
                        task={task} />
                ))}
            </ul>
        </>
    )
}