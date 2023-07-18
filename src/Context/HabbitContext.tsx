import React,{createContext, useState} from 'react';

export interface habitData{
    daily:any[],
    weekly:any[],
    monthly:any[],
}
interface ContextValues {
    hideAddHabbit:boolean,
    setHideAddHabbit:React.Dispatch<React.SetStateAction<boolean>>,
    habitData:habitData,
    setHabitData:React.Dispatch<React.SetStateAction<habitData>>,
}

export const HabbitContext = createContext<ContextValues | null>(null)

export default function HabbitProvider({children}:{children:React.ReactNode}) {
    
    const [hideAddHabbit,setHideAddHabbit] = useState<boolean>(false);

    //this is the state that holds data of the habit pie
    const [habitData,setHabitData] = useState<any>({
        daily:[],
        weekly:[],
        monthly:[],
    });

    return (
        <HabbitContext.Provider value={{hideAddHabbit,setHideAddHabbit,habitData,setHabitData}}>
            {children}
        </HabbitContext.Provider>
    )
}