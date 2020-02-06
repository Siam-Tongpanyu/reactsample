const init_state = {
  isLogin: false
};

const isLoginReducer = (state = init_state, action)=>{
  switch (action.type) {
    case "USERISLOGIN":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default isLoginReducer;