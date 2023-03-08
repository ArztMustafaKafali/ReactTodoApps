import { configureStore } from "@reduxjs/toolkit";
import todoSlicer from "../../components/todo/todoSlicer";
export const store = configureStore({
    reducer : {
        todo : todoSlicer
    }
})