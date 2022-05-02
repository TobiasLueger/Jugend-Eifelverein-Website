import axios from "axios";

const test = "";

export const helloMessage = () => {
	return axios
		.get("https://api2-eifeljugend.herokuapp.com/api/pages?populate=*")
		.then((res) => {
			return res.data;
		})
		.catch(() => {
			return "Server not responding. Start the server and refresh this page.";
		});
};

// export function getData(){
//     const fetchData = async () => {
//         const result = await axios(
//             //'https://api2-eifeljugend.herokuapp.com/api/pages?populate=*',
//             'http://localhost:55555/api/pages?populate=*',
//         );
//         return result.data;
//     };
//     fetchData();
// }
