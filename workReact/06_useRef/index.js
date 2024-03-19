const TodoReducer = function (state, action) {
  const index = state.findIndex((item) => item._id === action.item._id);
  switch (action.type) {
    case "TOGGLE":
      return produce(state, (draft) => {
        draft[index].done = !draft[index].done;
      });
    default:
    case "DELETE":
      return produce(state, (draft) => {
        draft.splice(index, 1);
      });
  }
};
