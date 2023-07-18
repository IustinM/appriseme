import React, { useContext } from 'react'
import PieContainer from '../components/Dashboard/PieContainer'
import Button from '../components/utils/Button'
import IconNavigation from '../components/utils/IconNavigation'
import PieChart from '../components/utils/PieChart'
import { faMugHot,faChartPie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddHabbit from '../components/Dashboard/AddHabbit'
import { HabbitContext } from '../Context/HabbitContext'

const Dashboard = () => {
    const {setHideAddHabbit,hideAddHabbit}  = useContext(HabbitContext)!;
  return (
    <div className=' min-h-[100vh]'>
        {hideAddHabbit && <AddHabbit/>}
        <div className=" flex  h-[12vh] justify-between border-b-[1px] items-center">
            <div className="w-[90%] mx-auto flex justify-between items-center">
                <IconNavigation/>
                <div className="flex items-center ">
                    <p className="mx-3">Zziustin145</p>
                    <div className="w-[60px] h-[60px] bg-slate-400 rounded-full">

                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between w-[90%] mx-auto items-center  mt-6">
            <div className="flex items-center">
                <FontAwesomeIcon className='w-[50px] text-buttonBlue h-[50px]' icon={faChartPie}/>
                <h3 className='mx-5  text-[2rem]'>Habbits</h3>
            </div>
            <Button text={'Add habbit'} event={() => setHideAddHabbit(true)} backgroundColor={'blue'} icon faIcon={faMugHot}/>
        </div>
        <div className=" flex  mx-5 min-h-[70vh] items-center">
            <PieContainer interval='Daily'/>
            <PieContainer interval='Weekly'/>
            <PieContainer interval='Monthly' order='last'/>
        </div>
    </div>
  )
}

export default Dashboard