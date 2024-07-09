import { empiresService } from "../services/EmpiresService";
import BaseController from "../utils/BaseController";


export class EmpiresController extends BaseController {

  constructor() {
    super(`api/empires`)
    this.router.get('', this.getEmpires)
    this.router.post('', this.createEmpire)
    this.router.delete('/:empireId', this.destroyEmpire)
    this.router.put('/:empireId', this.editEmpire)
  }

  async getEmpires(request, response, next) {
    try {
      const empires = await empiresService.getEmpires()
      response.send(empires)
    } catch (error) {
      next(error)
    }
  }


  async createEmpire(request, response, next) {
    try {
      const empireData = request.body
      console.log('Creating Empire', empireData);
      const empire = await empiresService.createEmpire(empireData)
      console.log('Created Empire', empire);
      response.statusCode = 201
      response.send(empire)
    } catch (error) {
      next(error)
    }
  }

  async destroyEmpire(request, response, next) {
    try {
      const idToRemove = request.params.empireId
      await empiresService.destroyEmpire(idToRemove)
    } catch (error) {
      next(error)
    }
  }

  async editEmpire(request, response, next) {
    try {
      const idToEdit = request.params.empireId
      const newInfo = request.body
      const edittedEmpire = await empiresService.editEmpire(idToEdit, newInfo)
      response.send(edittedEmpire)
    } catch (error) {
      next(error)
    }
  }
}