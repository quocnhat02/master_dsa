import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isBlocked: boolean;
  blockedAt?: Date;
  blockedReason?: string;
  isActive: boolean;
  deactivatedAt?: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isBlocked: { type: Boolean, default: false },
    blockedAt: { type: Date },
    blockedReason: { type: String },
    isActive: { type: Boolean, default: true },
    deactivatedAt: { type: Date },
  },
  { timestamps: true },
);

// Adding an index on the email field
UserSchema.index({ email: 1 });

// Adding an index on the isBlocked field
UserSchema.index({ isBlocked: 1 });

// Adding an index on the isActive field
UserSchema.index({ isActive: 1 });

export default mongoose.model<IUser>('User', UserSchema);
