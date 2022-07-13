import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    location: [String],
    duration: {
      startAt: Date,
      endAt: Date,
    },
    seats: Number,
    pictures: [String],
    price: String,
    rate: Number,
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

tourSchema.pre(/^find/,function(next){
  this.populate({
    path:"createdBy",
    select:"email phone names picture"

  })
  next();
})

const tour = mongoose.model("tour", tourSchema);
export default tour;
