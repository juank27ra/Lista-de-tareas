import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getTask, deleteTask } from '../redux/actions'  
import { Link } from 'react-router-dom'
import Create from './CreateTask'
import Footer from './Footer'


function Task () {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.tasks)  
    
    useEffect(() => {
        dispatch(getTask())
    }, [dispatch])
    
    const handledelete = (e) => {
    dispatch(deleteTask(e._id))
    dispatch(getTask())
    }
return (
    <div>
        <div className="container mx-auto mt-5">
            <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight">Tasks</span>
                    </div>
                    <div className="block lg:hidden">
                        <button id='boton' className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                <div id='menu' className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="#responsive-header" 
                        className=
                        "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 transition ease-in-out duration-500">
                        Prior: High
                        </a>
                        <a href="#responsive-header" 
                        className=
                        "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 transition ease-in-out duration-500">
                        Prior: Medium
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 transition ease-in-out duration-500">
                        Prior: Low
                        </a>
                    </div>
                </div>
            </nav>
            <Create/>
                       <table className="table-fixed w-full ml-3 mb-12 mt-12 p-4 border-separate border-spacing-2 border border-slate-500 ">
                        <thead className= "bg-blue-700 p-7 ">
                            <tr >
                            <th className="border border-slate-600" >Tarea</th>
                            <th className="border border-slate-600" >Prioridad</th>
                            <th className="border border-slate-600" >fecha</th>
                            <th className="border border-slate-600">descripción</th>
                            </tr>
                        </thead>
                        {
                        data.map((elem, i) => {
                            return(
                        <tbody key={i} >
                            <tr >
                            <td className="border border-slate-600 text-center bg-red-100" >{elem.title}</td>
                            <td className="border border-slate-600 w-20 text-center bg-blue-100" >{elem.priority}</td>
                            <td className="border border-slate-600 w-40 text-center bg-green-100" >{elem.date_create.slice(0, 10)}</td>
                            <td className="border border-slate-600  text-center bg-blue-100" >{elem.description}</td>
                                <button className="bg-transparent text-center hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded" onClick={() => handledelete(elem)}>Eliminar</button>
                                <Link to={`/edit/${elem._id}`} ><td className="bg-transparent text center hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded">Editar</td></Link>  
                            </tr>
                        </tbody>
                    )  
                })
             }
                        </table>
                </div>
            <Footer/>
        </div>
    )
}

export default Task
               