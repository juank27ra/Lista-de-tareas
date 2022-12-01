import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditTask, getid, getTask } from '../redux/actions'  
import { Link, useParams, useNavigate} from 'react-router-dom';

export default function Edit() {
  
const navigate = useNavigate()
const dispatch = useDispatch()
const params = useParams()
const infoId = useSelector((state) => state.tasksId)
const [info, setInfo] = useState({
        title: '',
        description: '',
        date_create: '',
        priority: '',
      })


useEffect(() => {
if(params.id) dispatch(getid(params.id))
setInfo(infoId)
}, [dispatch, setInfo])


const handleChange=(e) => {
  const {name, value} = e.target
  setInfo({
      ...info,
      [name] : value
  })
}

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(EditTask(info._id, info))
    setInfo({
      title: '',
      description: '',
      date_create: '',
      priority: '',
    })
    dispatch(getTask())
    navigate("/")
}


  return (
    <div >
    <h1  className=" container p-5 mx-auto mt-5 text-center text-2xl bg-blue-500 border-blue "  >Edita tu Tarea</h1>
    <Link to={'/'}><button className='bg-blue-300 p-3 border-red-500 text-center text-xl mt-5 ml-40 '>Regresar</button></Link>
      <form id='menu' className="w-full max-w-lg container mx-auto mt-5" onSubmit={(e) => handleEdit(e)}>
          <div className="flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full px-3 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Tarea
            </label>
            <input value={info.title} name="title" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => handleChange(e)} size="xl" id="grid-text" type="text" placeholder='' />
            <p className="text-gray-600 text-xs italic"></p>
          </div>
        </div>
            <div className="flex flex-wrap -mx-3 mb-6 ">
              <div className="w-full px-3 ">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                  Fecha
                </label>
                 <input 
                    value={info.date_create} 
                    name="date_create" 
                    className="appearance-none block w-full text-center bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    onChange={(e) => handleChange(e)} 
                    id="grid-first-name" 
                    type="date" 
                    // data-date=""
                    // data-date-format="YYYY MMMM DD"
                    // placeholder="date"
                    />
                </div>
            </div>
        <div className="flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full px-3 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Descripción
            </label>
            <textarea value={info.description} name="description" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => handleChange(e)} size="xl" id="grid-textarea" type="textarea" placeholder='' />
            <p className="text-gray-600 text-xs italic"></p>
            </div>
        </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Prioridad
                </label>
                <div className="relative">
                    <select onChange={(e) => handleChange(e)} name="priority" value={info.priority} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center" id="grid-state" placeholder='' >
                    <option type= 'checkbox' value={"null"} className="text-blue-700" required></option>
                    <option type= 'checkbox' value={"High"} className="text-blue-700" required>Alta</option>
                    <option  type= 'checkbox' value={"Medium"} className="text-blue-700" required>Media</option>
                    <option  type= 'checkbox' value={"Low"} className="text-blue-700" required>Baja</option>
                    </select>
                </div>
                </div>
            </div>
            <div className="flex justify-center mt-5 ">
                <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Guardar
                </button>
            </div>
        </form>

    </div>
  )
}



