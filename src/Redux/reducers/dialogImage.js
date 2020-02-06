const init_state = {
  open: false,
  currentImg: "",
  currentTitle: ""
};

const dialogImageReducer = (state = init_state, action)=>{
  switch (action.type) {
    case "DIALOGIMAGE":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default dialogImageReducer;