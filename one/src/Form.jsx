import React, { useReducer } from "react";
import { useForm } from "react-hook-form";

let formReducer = (state, action) => {
  switch (action.type) {
    case "addData":
      return {
        data: [...state.data, action.payload],
      };

    case "removeData":
      return {
        data: state.data.filter((item, index) => index !== action.payload),
      };

    default:
      return state;
  }
};

function FormWithReducer() {
  const { register, handleSubmit, reset } = useForm();
  const [state, dispatch] = useReducer(formReducer, { data: [] });

  const onSubmit = (formData) => {
    dispatch({ type: "addData", payload: formData });
    reset(); // clear form after submit
  };

  return (
    <div>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
        />

        <input
          type="number"
          placeholder="Age"
          {...register("age")}
        />

        <button type="submit">Add</button>
      </form>

      <h2>Data List ({state.data.length})</h2>

      {state.data.map((item, index) => (
        <li key={index}>
          {item.name} - {item.age}
          <button
            onClick={() =>
              dispatch({ type: "removeData", payload: index })
            }>
            X
          </button>
        </li>
      ))}
    </div>
  );
}

export default FormWithReducer;