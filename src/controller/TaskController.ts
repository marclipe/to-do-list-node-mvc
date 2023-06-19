import { Request, Response } from "express";

export class TaskController {
  static getAll(req: Request, res: Response) {
    return res.render("index");
  }
}

// const getAll = (req: Request, res: Response) => {
//   return res.render("index");
// }