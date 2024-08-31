import axios from "axios";
import { useEffect, useState } from "react";

const getData = (slug, single) => {
	if (single) {
		return axios.get(`https://jugend.eifel-53359.de/api/wp-json/wp/v2/${slug}`);
	} else {
		return axios.get(
			`https://jugend.eifel-53359.de/api/wp-json/wp/v2/${slug}/?per_page=100`
		);
	}
};

const useSlugData = (slugtype, single = false, news = false, events = false) => {
	const [slugData, setSlugData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		getData(slugtype, single)
			.then((response) => {
				let sortAfterDate;

				if (news) {
					sortAfterDate = response.data.sort(
						(a, b) =>
							new Date(...b.acf.datum.split("/")) -
							new Date(...a.acf.datum.split("/"))
					);
				} else if (events) {
					sortAfterDate = response.data.sort(
						(a, b) =>
							new Date(...a.acf.datum.split("/")) -
							new Date(...b.acf.datum.split("/"))
					);
				} else {
					sortAfterDate = response.data;
				}

				setSlugData(sortAfterDate);
			})
			.catch((error) => setError(true))
			.finally(() => setLoading(false));
	}, []);
	return { slugData, loading, error };
};

export default useSlugData;
