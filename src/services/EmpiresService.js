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

  async editEmpire(idToEdit, newInfo) {
    const empireToEdit = await dbContext.Empires.findById(idToEdit)
    if (empireToEdit === null) throw new Error(`Can't edit empire that doesn't exist`)

    empireToEdit.name = newInfo.name || empireToEdit.name
    empireToEdit.continents = newInfo.continents || empireToEdit.continents
    empireToEdit.duration = newInfo.duration || empireToEdit.duration
    empireToEdit.map = newInfo.map || empireToEdit.map

    await empireToEdit.save()
    return empireToEdit
  }
}

export const empiresService = new EmpiresService()