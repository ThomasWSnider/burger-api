import { Schema } from "mongoose";


export const EmpireSchema = new Schema({
  name: { type: String, maxlength: 40, minlength: 2, required: true },
  continents: [{ type: String, maxlength: 10, minlength: 4 }],
  duration: { type: Number, max: 2000, min: 1, required: true },
  map: { type: String, maxlength: 200 }
})