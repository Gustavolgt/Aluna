
import {
	getClient,
} from '../../../controllers/client.controller'
const API = async (req, res) => {
		const { id } = req.query
		switch (req.method) {
			case 'GET':
				return getClient(id, res)
		}
	
	res.status(401).json({ message: 'Unauthorized' })
}

export default API
