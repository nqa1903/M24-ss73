import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Todos } from "../../interfaces";
import axios from "axios";

const initialState: Todos[] = [];

// hàm lấy hết todo list
export const getTodo:any = createAsyncThunk("todos/getAllTodos", async () => {
  const response = await axios.get("http://localhost:8080/todo");
  return response.data;
});

// hàm xóa todo
export const deleteTodo:any = createAsyncThunk("todos/deleteTodo", async (id: number) => {
  await axios.delete(`http://localhost:8080/todo/${id}`);
  return id; 
});

// hàm sửa todo
export const updateTodo:any = createAsyncThunk("todos/updateTodo", async({id,todo}:{id:number,todo:Todos})=>{
  const response = await axios.put(`http://localhost:8080/todo/${id}`,todo);
  return response.data;
})

// hàm thêm todo

const todoReducer = createSlice({
  name: "reducerTodo",
  initialState: {
    todo: initialState,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.fulfilled, (state, action) => {
        state.todo = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todo = state.todo.filter((item:any) => item.id !== action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todo.findIndex((todo)=>todo.id === action.payload.id);
        if(index != -1){
          state.todo[index] = action.payload;
        }
      })
  },
});

export default todoReducer.reducer;
