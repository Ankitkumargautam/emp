import * as api from '../api/index'
import { CREATE_EMP, FETCH_EMP, UPDATE_EMP, DELETE_EMP} from '../constants/actionTypes'

export const createEmployee = (empData) => async(dispatch) => {
  try {
    const {data} = await api.createEmployee(empData);
    dispatch({type: CREATE_EMP, payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const getEmpPost = () => async(dispatch) =>{
  try {
    const { data } = await api.fetchEmpPosts();
    dispatch({ type: FETCH_EMP, payload: data});
  } catch (error) {
    console.log(error.message);
  }
}

export const updateEmpData = ( id, updatedData) => async(dispatch) => {
  try {
    const { data } = await api.updateEmpData(id, updatedData);
    dispatch({type: UPDATE_EMP, payload: data});
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteEmpData = (id) => async(dispatch) => {
  try {
    await api.deleteEmpData(id);
    dispatch({type: DELETE_EMP, payload: id});
  } catch (error) {
    console.log(error.message);
  }
}