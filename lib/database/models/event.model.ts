import { Schema, models, model, Document } from "mongoose";


export interface IEvent extends Document{
  _id:string;
  title: string;
  description?: string;
  location?: string;
  createdAt: string;
  imageUrl: string;
  startDateTime: Date;
  endDatetime: Date;
  price?: string;
  isFree?: string;
  url?: string;
  category: {_id: String, name: String};
  organizer: {_id: String, firstName: String, lastName: String};
}
const EventSchema = new Schema({
  title:{type: String, required: true},
  description:{type: String},
  location:{type: String},
  createdAt:{type: String, default: Date.now},
  imageUrl:{type: String, required: true},
  startDateTime:{type: Date, default: Date.now},
  endDatetime:{type: Date, default: Date.now},
  price: {type:String,},
  isFree:{type: String},
  url:{type: String},
  category:{type: Schema.Types.ObjectId, ref:'Category'},
  organizer:{type:Schema.Types.ObjectId, ref:'User'},
});

const Event = models.Event || model('Event', EventSchema);
export default Event;