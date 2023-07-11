import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../helpers/jwt";
import { ReturnMessages } from "../helpers/utils";

export const validadeJwt = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({
            error: {
                message: ReturnMessages.invalidToken,
            },
        })
    }
    const user = verifyToken(authorization)
    if (!user) {
        return res.status(401).json({
            error: {
                message: ReturnMessages.invalidToken,
            },
        })
    }
    req.params.userId = String(user.id)
    next()
}