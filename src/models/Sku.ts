import mongoose, { Document, Schema } from 'mongoose';

const DOCUMENT_NAME = 'Sku';
const COLLECTION_NAME = 'skus';

interface ISku extends Document {
  sku_id: string;
  sku_tier_id: number[];
  /**
   * color = [red, green, blue] = [0, 1, 2]
   * size = [s, m, l] = [0, 1, 2]
   * => red + s = [0, 0]
   * => green + m = [1, 1]
   * => blue + l = [2, 2]
   */
  sku_default: boolean;
  sku_slug: string;
  sku_sort: number;
  sku_stock: number;
  sku_product_id: Schema.Types.ObjectId;
  is_draft: boolean;
  is_published: boolean;
  is_deleted: boolean;
}

const skuSchema = new Schema(
  {
    sku_id: { type: String, required: true },
    sku_tier_id: { type: Array, default: [0] },
    sku_default: { type: Boolean, default: false },
    sku_slug: { type: String, default: '' },
    sku_sort: { type: Number, default: 0 },
    sku_stock: { type: Number, default: 0 },
    sku_product_id: { type: Schema.Types.ObjectId, ref: 'Spu', required: true },
    is_draft: { type: Boolean, default: true, select: false },
    is_published: { type: Boolean, default: false, select: false },
    is_deleted: { type: Boolean, default: false, select: false },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  },
);

export default mongoose.model<ISku>(DOCUMENT_NAME, skuSchema);
