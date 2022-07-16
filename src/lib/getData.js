import axios from "axios";

const getData = (slug) => {
	return axios
		.get(`https://jugend.eifel-53359.de/api/wp-json/wp/v2/${slug}`)
		.then((res) => {
			console.log("RES DATA:", res.data);
			return res.data;
		})
		.catch(() => {
			return "Server not responding. Start the server and refresh this page.";
		});
};

export default getData;
