import { GET_TASKS, POST_TASKS, DELETE_TASK, GET_ID, PUT_EDIT } from './actions'
const initialState = {
    tasks: [],
    tasksId: [],
    prioritarias: [],
}

export default function rootReducers(state = initialState, action) {
    switch(action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload,
                filters: action.payload
            }
        case POST_TASKS:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            
            }
        case DELETE_TASK:
            let filter = state.tasks.filter(e => e !== action.payload)
            return {
                ...state,
                tasks: filter
            }
        case GET_ID:
            return {
                ...state,
                tasksId: action.payload 
            }
        case PUT_EDIT:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state;
    }
};