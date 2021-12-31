import axios from 'axios';

const empurl = "http://localhost:5000/emp"

export const createEmployee =(data) => axios.post(empurl,data);
export const fetchEmpPosts = () => axios.get(empurl);
export const updateEmpData = (id, data) => axios.patch(`${empurl}/${id}`,data);
export const deleteEmpData = (id) => axios.delete(`${empurl}/${id}`);
