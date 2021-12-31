import { CREATE_EMP, DELETE_EMP, FETCH_EMP, UPDATE_EMP } from "../constants/actionTypes";

const reducer = (emp = [], action) => {
  switch (action.type) {
    case DELETE_EMP:
      return emp.filter((em) => em._id !== action.payload)
      
    case UPDATE_EMP:
      return emp.map((em)=> em._id === action.payload._id ? action.payload : em)

    case FETCH_EMP:
      return action.payload;

    case CREATE_EMP:
      return [ ...emp, action.payload ];
    
    default:
      return emp;
  }
};

export default reducer;