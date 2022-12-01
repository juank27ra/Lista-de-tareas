import React, {useState} from 'react'
import { postTask, getTask } from '../redux/actions'  
import { useDispatch } from 'react-redux'


export default function CreateTask() {
const dispatch = useDispatch()
const [input, setInput] = useState({
  title: '',
  description: '',
  date_create: '',
  priority: '',
})
// const menu = document.querySelector('#menu')

const handleChange=(e) =>{
  const {name, value} = e.target
  setInput({
      ...input,
      [name] : value
  })
}

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postTask(input))
    // dispatch(getTask())
    setInput({
      title: '',
      description: '',
      date_create: '',
      priority: '',
    })
}

  return (
    <div >
    <h1  className=" container mx-auto mt-5 text-white text-center text-2xl p-2 bg-blue-500 border-blue "  >Crear tu Tarea</h1>
      <form id='menu' className="w-full max-w-lg container p-8 mx-auto mt-5" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-wrap -mx-3 mb-6  ">
            <div className="w-full px-3 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Tarea
            </label>
            <input value={input.title} name="title" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => handleChange(e)} size="xl" id="grid-text" type="text" placeholder='Nombre de la tarea' />
            <p className="text-gray-600 text-xs italic"></p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full px-3 ">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Fecha
              </label>
                <input 
                  value={input.date_create} 
                  name="date_create" 
                  className="appearance-none block w-full bg-gray-200  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  onChange={(e) => handleChange(e)} 
                  id="grid-first-name" 
                  type="date" 
                  data-date=""
                  data-date-format="YYYY MMMM DD"
                  placeholder="date"
                  />
                </div>
            </div>
  <div className="flex flex-wrap -mx-3 mb-6 ">
    <div className="w-full px-3 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      Descripción
      </label>
      <textarea value={input.description} name="description" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => handleChange(e)} size="xl" id="grid-textarea" type="textarea" placeholder='Description short or items' />
      <p className="text-gray-600 text-xs italic"></p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      Prioridad
      </label>
      <div className="relative">
        <select onChange={(e) => handleChange(e)} name="priority" value={input.priority} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center" id="grid-state" placeholder='Alta, Media, Baja'>
          <option type= 'checkbox' value={"null"} className="text-blue-700" required></option>
          <option type= 'checkbox' value={"High"} className="text-blue-700" required>Alta</option>
          <option  type= 'checkbox' value={"Medium"} className="text-blue-700" required>Media</option>
          <option  type= 'checkbox' value={"Low"} className="text-blue-700" required>Baja</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-center mt-5 ">
    <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Crear
    </button>
  </div>
</form>
    </div>
  )
}
