import { prisma } from '../database/prisma.ts'


const getRecipe = async (id, res) => {
	const resp = await prisma.recipes.findMany({
		where: {
			id: parseInt(id)
		}
	})
	res.status(200).send(resp[0])
}

export { getRecipe }
