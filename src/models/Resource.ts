import mongoose, { Document, Schema } from 'mongoose';

const DOCUMENT_NAME = 'Resource';
const COLLECTION_NAME = 'resources';

export interface IResource extends Document {
  src_name: string;
  src_slug: string;
  src_description: string;
  src_url: string;
  src_type: string;
  src_status: string;
}

const ResourceSchema: Schema = new Schema(
  {
    src_name: { type: String, required: true },
    src_slug: { type: String, required: true },
    src_description: { type: String, required: true },
    src_url: { type: String, required: true },
    src_type: { type: String, required: true },
    src_status: { type: String, required: true },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  },
);

export default mongoose.model<IResource>(DOCUMENT_NAME, ResourceSchema);
