import mongoose, { Document, Schema } from 'mongoose';

const DOCUMENT_NAME = 'Resource';
const COLLECTION_NAME = 'resources';

export interface IResource extends Document {
  src_name: string;
  src_slug: string;
  src_description: string;
}

const ResourceSchema: Schema = new Schema(
  {
    src_name: { type: String, required: true },
    src_slug: { type: String, required: true },
    src_description: { type: String, required: true },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  },
);

export default mongoose.model<IResource>(DOCUMENT_NAME, ResourceSchema);
