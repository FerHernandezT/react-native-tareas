export const selected_tab = (tabId) => {
    return {
        type: 'selected_tab',
        payload: tabId
    }
}


export const load_tareas = (tareas) =>{
    return {
        type: 'LOAD_TAREAS',
        payload: tareas
    }
}
export const add_tarea = (tarea) =>{
    return {
        type: 'ADD_TAREA',
        payload: tarea
    }
}
export const update_tarea = (tarea) =>{
    return {
        type: 'UPDATE_TAREA',
        payload: tarea
    }
}
export const delete_tarea = (id) =>{
    return {
        type: 'DELETE_TAREA',
        payload: id
    }
}
export const upgrade_tarea = (id) =>{
    return {
        type: 'UPGRADE_TAREA',
        payload: id
    }
}
