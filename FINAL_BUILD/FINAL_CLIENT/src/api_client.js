import axios from 'axios';


const base = 'http://localhost:3001';

//GET Request
export const getSQL = async (route) => {
	const resp = await axios.get(`${base}/${route}`);
	return resp;
}

//POST Request
export const postSQL = async (order, route) => {
	const resp = await axios.post(`${base}/${route}`, {order});
	return resp;
}



