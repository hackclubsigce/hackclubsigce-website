import axios from "axios"

export default async function handler(req, res) {
	const url = `https://hack-club-sigce-blogs.web.app/js/json/content.json`
	const response = await axios.get(url)
	res.send(response.data)
}
