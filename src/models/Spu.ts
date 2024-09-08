import mongoose, { Document, Schema } from 'mongoose';
import slugify from 'slugify';

const DOCUMENT_NAME = 'SPU';
const COLLECTION_NAME = 'spus';

export interface ISPU extends Document {
  product_id: string;
  product_name: string;
  product_thumbnail: string;
  product_description: string;
  product_slug: string;
  product_price: number;
  product_categories: [];
  product_quantity: number;
  product_shop_id: mongoose.Types.ObjectId;
  product_attributes: [];
  product_rating_average: number;
  product_variants: [];
  is_draft: boolean;
  is_published: boolean;
  is_deleted: boolean;
}

const spuSchema = new Schema(
  {
    product_id: { type: String, default: '' },
    product_name: { type: String, required: true },
    product_thumbnail: { type: String, required: true },
    product_description: { type: String, required: true },
    product_slug: { type: String },
    product_categories: { type: Array, default: [] },
    product_price: { type: Number, required: true },
    product_quantity: { type: Number, required: true },
    product_shop_id: { type: Schema.Types.ObjectId, ref: 'Shop' },
    product_attributes: { type: Array, required: true },
    product_rating_average: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating must be at most 5'],
      set: (val: number) => Math.round(val * 10) / 10,
    },
    product_variants: { type: Array, required: true },
    is_draft: { type: Boolean, default: true, select: false },
    is_published: { type: Boolean, default: false, select: false },
    is_deleted: { type: Boolean, default: false, select: false },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  },
);

// create index for search
spuSchema.index({ product_name: 'text' });
spuSchema.index({ product_description: 'text' });
spuSchema.index({ product_attributes: 'text' });

// create slug use slugify
spuSchema.pre('save', function (next) {
  this.product_slug = slugify(this.product_name, { lower: true });
  next();
});

export default mongoose.model<ISPU>(DOCUMENT_NAME, spuSchema);
