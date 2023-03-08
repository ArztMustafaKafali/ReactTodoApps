import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

export const todoSlicer = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state, action)=>{
            state.todos = [action.payload, ...state.todos]
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=>{
                return(todo.id !==action.payload.id)
            })
        },
        removeAllTodos : (state, action)=>{
            state.todos = []
        },
        completedTodo : (state, action)=>{
            state.todos = state.todos.map((todo)=>{
                if(todo.id !== action.payload){
                     return todo
                }
                return {
                    ...todo,
                    isCompleted : !todo.isCompleted
                }

            })

        },
        addEditTodo : (state,action)=>{
            state.todos = state.todos.map((todo)=>{
                if(todo.id !== action.payload.id){
                    return todo
                }
                return {
                    ...todo,
                    todo : action.payload.todo,
                    isCompleted : false
                }
            })
        }
    }
})

export const {addTodo, removeTodo, removeAllTodos, completedTodo, addEditTodo} = todoSlicer.actions
export default todoSlicer.reducer