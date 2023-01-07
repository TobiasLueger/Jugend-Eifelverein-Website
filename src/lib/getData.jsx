import axios from "axios";
import { useEffect, useState } from "react";

const getData = (slug) => {
	return axios.get(`https://jugend.eifel-53359.de/api/wp-json/wp/v2/${slug}`);
};

const useSlugData = (slugtype) => {
	const [slugData, setSlugData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		getData(slugtype)
			.then((response) => {
				console.log("Data:", new Date(response.data[0].acf.datum.split(" ")));
				let sortAfterDate = response.data.sort(
					(a, b) =>
						new Date(...a.acf.datum.split("/")) -
						new Date(...b.acf.datum.split("/"))
				);
				console.log("Data List:", sortAfterDate);
				setSlugData(sortAfterDate);
			})
			.catch((error) => setError(true))
			.finally(() => setLoading(false));
	}, []);
	return { slugData, loading, error };
};

export default useSlugData;
