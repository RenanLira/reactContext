import { ReactNode } from "react"
import { LevelContext } from "../Contexts/LevelContext"

interface sectionProps {
    level: number
    children: ReactNode
}


export const Section = ({level, children}: sectionProps) => {

    return (
        <section>
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </section>
    )
}