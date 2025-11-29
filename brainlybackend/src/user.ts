import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function usermiddleware(req: Request, res: Response, next: NextFunction) {
  const header = req.headers['authorization'];

  if (!header) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  try {
    const decoded = jwt.verify(header, "sohail") as { id: string };
    //@ts-ignore
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
}