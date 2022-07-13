import TourService from "../services/tourService";
import Response from "../utils/Response";

export default class TourController {
  static async createTour(req, res) {
    const tour = await TourService.createTour(req);

    if (!tour) {
      return Response.errorMessage(res, "Failed to register tour", 400);
    }

    return Response.successMessage(
      res,
      "Tour successfully registered",
      tour,
      200
    );
  }

  static async getAllTours(req, res) {
    const tours = await TourService.getAllTours();

    if (!tours) {
      return Response.errorMessage(res, "No tours found", 400);
    }

    return Response.successMessage(res, "Successfully retrieved", tours, 200);
  }

  static async getOneTour(req, res) {
    const tour = await TourService.getOneTour(req);
    if (!tour) {
      return Response.errorMessage(res, " Tour not found", 400);
    }

    return Response.successMessage(res, "Succefully retrieved", tour, 200);
  }
  static async updateOneTour(req, res) {
    const tour = await TourService.updateOneTour(req);
    if (!tour) {
      return Response.errorMessage(res, " Tour not found", 400);
    }

    return Response.successMessage(res, "Succefully updated", tour, 200);
  }
}
