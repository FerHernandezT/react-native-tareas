
export default (state = [], action) => {
    switch (action.type) {
        case 'LOAD_TAREAS':
            return action.payload;
        case 'ADD_TAREA':
            return [...state, action.payload];
        case 'UPDATE_TAREA':
            return state.map((tarea)=> tarea.id === action.payload.id ? action.payload : tarea);
        case 'DELETE_TAREA':
            return state.filter((tarea)=> tarea.id !== action.payload)
        case 'UPGRADE_TAREA':{
            return state.map((tarea)=> tarea.id === action.payload ? {...tarea, estado:'completado'} : tarea);
        }

        default:
            return state;
    }
}
