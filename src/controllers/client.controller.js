import { prisma } from '../database/prisma.ts'


const getClient = async (id, res) => {
	const resp = await prisma.clients.findMany({
		where: {
			number: id
		}
	})
	res.status(200).send(resp[0])
}

export { getClient }
