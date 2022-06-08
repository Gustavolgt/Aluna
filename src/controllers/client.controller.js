import { prisma } from '../database/prisma.ts'


const getClient = async (id, res) => {
	const resp = await prisma.clients.findMany({
		where: {
			number: {
				contains: id
			},
			user_id: 'cl29fmf4e005809l82h7oqqbm'
		}
	})
	res.status(200).send(resp[0])
}

export { getClient }
