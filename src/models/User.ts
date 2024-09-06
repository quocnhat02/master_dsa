import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'users';

export interface IUser extends Document {
  usr_id: number;
  usr_slug: string;
  usr_name: string;
  usr_password: string;
  usr_salt: string;
  usr_email: string;
  usr_phone: string;
  usr_sex: string;
  usr_avatar: string;
  usr_date_of_birth: Date | null;
  usr_role: mongoose.Types.ObjectId;
  usr_status: 'pending' | 'active' | 'block';
  comparePassword(candidatePassword: string): Promise<boolean>;
  blockedReason?: string;
  blockedAt?: Date;
}

const UserSchema: Schema = new Schema(
  {
    usr_id: { type: Number, required: true, unique: true },
    usr_slug: { type: String, required: true },
    usr_name: { type: String, default: '' },
    usr_password: { type: String, required: true },
    usr_salt: { type: String, default: '' },
    usr_email: { type: String, required: true },
    usr_phone: { type: String, default: '' },
    usr_sex: { type: String, default: '' },
    usr_avatar: { type: String, default: '' },
    usr_date_of_birth: { type: Date, default: null },
    usr_role: { type: Schema.Types.ObjectId, ref: 'Role' },
    usr_status: { type: String, default: 'pending', enum: ['pending', 'active', 'block'] },
    blockedReason: { type: String },
    blockedAt: { type: Date },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  },
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('usr_password')) return next();
  this.usr_password = await bcrypt.hash(this.usr_password as string, 10);
  next();
});

UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.usr_password);
};

export default mongoose.model<IUser>(DOCUMENT_NAME, UserSchema);
