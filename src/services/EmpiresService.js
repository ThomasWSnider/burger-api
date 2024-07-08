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
}

export const empiresService = new EmpiresService()