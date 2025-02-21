import mongoose from "mongoose";

export interface PocketEntry {
  from?: string; // Earnings will have 'from', spendings will have 'to'
  to?: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPocket {
  pocketName: string;
  pocketDesc?: string;
  earnings: PocketEntry[];
  spendings: PocketEntry[];
}

export interface Pocket extends mongoose.Document {
  user: mongoose.Schema.Types.ObjectId;
  user_pocket: UserPocket[];
}

const pocketEntrySchema = new mongoose.Schema<PocketEntry>({
  from: {
    type: String,
    required: function () {
      return !this.to;
    },
  }, // Either 'from' or 'to' must be present
  to: {
    type: String,
    required: function () {
      return !this.from;
    },
  },
  amount: {type: Number, required: true, min: 0},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

const userPocketSchema = new mongoose.Schema<UserPocket>({
  pocketName: {type: String, required: true, unique: true},
  pocketDesc: {type: String, required: false},
  earnings: [pocketEntrySchema],
  spendings: [pocketEntrySchema],
});

const pocketSchema = new mongoose.Schema<Pocket>({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
  user_pocket: [userPocketSchema],
});

const Pocket = mongoose.models.Pocket || mongoose.model("Pocket", pocketSchema);

export default Pocket;
