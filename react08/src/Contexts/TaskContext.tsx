import React, { Children, createContext, ReactNode, useReducer } from "react"


export const taskState = createContext<Task[]>([])
export const taskDispatch = createContext<React.Dispatch<TaskAction>>(undefined!)


interface TaskContextInterface {
    children: ReactNode
}

export const TaskContext = ({children}: TaskContextInterface) => {
    const [state, dispatch] = useReducer(taskReducer, initialTasks)

    return (
        <taskState.Provider value={state}>
            <taskDispatch.Provider value={dispatch}>
                {children}
            </taskDispatch.Provider>
        </taskState.Provider>
    )
}


export interface Task{
    id: number
    text: string
    done: boolean
}
  
export enum TaskActionType {
    ADDED = 'added',
    CHANGED = 'changed',
    DELETED = 'deleted'
}
  
interface TaskAction {
    type: TaskActionType,
    payload: Task
}


const taskReducer = (tasks: Task[], action: TaskAction ): Task[] => {

    const { type, payload } = action
  
    switch (type) {
      case TaskActionType.ADDED: {
        return [
          ...tasks,
          payload,
        ]
      }
  
      case TaskActionType.CHANGED: {
  
        return tasks.map((t) => {
          if (t.id === payload.id) {
            return payload;
          } else {
            return t;
          }
        })
      }
  
      case TaskActionType.DELETED: {
        return tasks.filter((t) => t.id !== payload.id)
      }
    
      default: {
        
        throw Error('valor não encontrado')
      }
    }
  
    return tasks
  }

export let nextId = 3;

const initialTasks: Task[] = [
    {id: 0, text: 'Elaborar Aulas', done: true},
    {id: 1, text: 'Estudar Flutter - Estados', done: false},
    {id: 2, text: 'Correr avenida Raul Lopres', done: false},
  ];