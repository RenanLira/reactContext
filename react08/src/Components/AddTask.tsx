import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { TaskActionType, taskDispatch, taskState} from "../Contexts/TaskContext"



export function AddTask(){

    const [taskText, setTaskText] = useState('')
    const dispatch = useContext(taskDispatch)

    const handlerDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }

    const handlerSubmit = (event: FormEvent) => {
        event.preventDefault()
        // onAddTask(taskText)
        dispatch({
            type: TaskActionType.ADDED,
            payload: {
                id: nextId++,
                text: taskText,
                done: false
            }
        })
        setTaskText('')
    }

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input 
                    type="text" 
                    value={taskText} 
                    onChange={handlerDescriptionChange}  
                    placeholder="Descrição" />
                <input type="submit" value="Adicionar Tarefa" />
            </form>
        </>
    )
}
let nextId = 3