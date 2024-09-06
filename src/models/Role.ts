import mongoose, { Document, Schema } from 'mongoose';

const DOCUMENT_NAME = 'Role';
const COLLECTION_NAME = 'roles';

export interface IRole extends Document {
  rol_name: string;
  rol_slug: string;
  rol_description: string;
  rol_status: string;
}

// const grantList = [
//   { role: 'admin', resource: 'profile', action: 'update:any', attributes: '*' },
//   { role: 'admin', resource: 'balance', action: 'update:any', attributes: ['*', '!amount'] },
//   { role: 'shop', resource: 'profile', action: 'update:own', attributes: '*' },
//   { role: 'shop', resource: 'balance', action: 'update:own', attributes: ['*', '!amount'] },
//   { role: 'user', resource: 'profile', action: 'update:own', attributes: '*' },
//   { role: 'user', resource: 'profile', action: 'read:own', attributes: '*' },
// ];

const RoleSchema: Schema = new Schema(
  {
    rol_name: { type: String, default: 'user', enum: ['user', 'shop', 'admin'] },
    rol_slug: { type: String, required: true },
    rol_description: { type: String, default: '' },
    rol_status: { type: String, default: 'active', enum: ['active', 'block', 'pending'] },
    rol_grants: [
      {
        resource: { type: Schema.Types.ObjectId, ref: 'Resource' },
        actions: [{ type: String, required: true }],
        attributes: { type: String, default: '*' },
      },
    ],
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  },
);

export default mongoose.model<IRole>(DOCUMENT_NAME, RoleSchema);
