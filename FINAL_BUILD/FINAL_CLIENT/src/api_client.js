import axios from 'axios';


const base = 'http://localhost:3001';

//GET Request
export const getSQL = async () => {
	const resp = await axios.get(`${base}/Test`);

	return resp;
}

//POST Request
export const postSQL = async (order) => {
	const resp = await axios.post(`${base}/Test`, {order});
	return resp;
}



