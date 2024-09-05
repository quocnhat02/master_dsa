import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IArchivedUser extends IUser {
  archivedAt: Date;
}

const ArchivedUserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    archivedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export default mongoose.model<IArchivedUser>('ArchivedUser', ArchivedUserSchema);
