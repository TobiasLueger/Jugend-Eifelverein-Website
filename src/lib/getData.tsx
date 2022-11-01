import axios from "axios";
import { useEffect, useState } from "react";

const getData = (slug: string) => {
	return axios.get(`https://jugend.eifel-53359.de/api/wp-json/wp/v2/${slug}`);
};

const useEventData = (slugtype: string) => {
	const [eventData, setEventData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		getData(slugtype)
			.then((response) => setEventData(response.data))
			.catch((error) => setError(true))
			.finally(() => setLoading(false));
	}, []);
	return { eventData, loading, error };
};

export default useEventData;
