const initialState = {
  tasks: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "EDIT_TASK":
      return {
        tasks: state.tasks.map((el) =>
          el.id === action.payload.id
            ? { ...el, task: action.payload.task }
            : el
        ),
      };
    case "TOGGLE_TASK":
      return {
        tasks: state.tasks.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    default:
      return state;
  }
};

export default Reducer;
