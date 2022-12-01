import axios from 'axios'
export const GET_TASKS = 'GET_TASKS'
export const POST_TASKS = 'POST_TASKS'
export const DELETE_TASK = 'DELETE_TASK'
export const GET_ID = 'GET_ID'
export const PUT_EDIT = 'PUT_EDIT'

export const getTask = (payload) => {
    return async(dispatch) => {
        try {
            let tasks = await axios.get(`http://localhost:3001/task`)
            return dispatch({
                type: GET_TASKS,
                payload: tasks.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const postTask = (data) => {
    return async (dispatch) => {
        try {
           let newTask = await axios.post(`http://localhost:3001/task`, data)
            return dispatch({
                type: POST_TASKS,
                payload: newTask.data.status
            })
        } catch (error) {
        console.log(error)  
        }
    }
}
export const deleteTask = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:3001/task/${id}`)
            return dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.log(error)  
        }
    }
}

export const EditTask = (id, data) => {
    console.log(id, "id en la action")
    console.log(data, "data en la action")
    return async () => {
        try {
            await axios({
               method: 'PUT',
               url: `http://localhost:3001/task/${id}`,
               data: data
            }) 
        } catch (error) {
          console.error(error)  
        }
    }
}

export const getid = (id) => {
    return async (dispatch) => {
        try {
           const {data} = await axios.get(`http://localhost:3001/task/${id}`)
           return dispatch({
                type: GET_ID,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
