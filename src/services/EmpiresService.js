import { dbContext } from "../db/DbContext"


class EmpiresService {

  async getEmpires() {
    const empires = await dbContext.Empires.find()
    return empires
  }

  async createEmpire(empireData) {
    const empire = await dbContext.Empires.create(empireData)
    return empire
  }

  async destroyEmpire(empireId) {
    const empireToDestroy = await dbContext.Empires.findById(empireId)
    if (empireToDestroy === null) throw new Error(`No Empire with Id ${empireId}`)
    await empireToDestroy.deleteOne()
    return `deleted ${empireToDestroy.name}`
  }
}

export const empiresService = new EmpiresService()