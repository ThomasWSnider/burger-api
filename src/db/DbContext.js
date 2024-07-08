import mongoose from 'mongoose'
import { EmpireSchema } from "../models/Empire"


class DbContext {
  Empires = mongoose.model('Empire', EmpireSchema)
}

export const dbContext = new DbContext()
