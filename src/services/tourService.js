import TourModel from "../models/tour";
export default class TourService {
  static async createTour(req) {
    const newTour = await TourModel.create(req.body);
    return newTour;
  }
  static async getAllTours() {
    const tours = await TourModel.find();
    return tours;
  }
  static async updateOneTour(req) {
    const tour = await TourModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return tour;
  }
  static async getOneTour(req) {
    const tour = await TourModel.findById(req.params.id);
    return tour;
  }
}
