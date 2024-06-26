import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodo, updateTodo } from "../store/reducers/todoReducer";
import { Todos } from "../interfaces";

export default function Todo() {
  const getData = useSelector((state: any) => state.todo.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (id:number) => {
    const newTodo = prompt("New Todo : ");
    if(newTodo){
        const update = {
            id,
            name : newTodo,
        };
        dispatch(updateTodo({id,todo:update}));
    }
  }

  return (
    <div>
      <div className="tab-content" id="ex1-content">
        <div className="tab-pane fade show active">
          <ul className="list-group mb-0">
            {getData.map((todo: Todos) => (
              <li
                key={todo.id}
                className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
                style={{ backgroundColor: "#f4f6f7" }}
              >
                <div>
                  <input className="form-check-input me-2" type="checkbox" />
                  {todo.name}
                </div>
                <div className="d-flex gap-3">
                  <i className="fas fa-pen-to-square text-warning" onClick={()=>handleUpdate(todo.id)}/>
                  <i
                    className="far fa-trash-can text-danger"
                    onClick={() => handleDelete(todo.id)}
                    role="button"
                    aria-label="Delete Todo"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
