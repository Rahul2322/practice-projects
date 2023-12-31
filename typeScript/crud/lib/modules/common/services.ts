import { response_status_codes } from "./models";
import { Response } from "express";


export function successResponse(message: string,DATA: any,res:Response){
    res.status(response_status_codes.success).json({
        STATUS:'SUCCESS',
        MESSAGE:message,
        DATA
    })
}


export function failureResponse(message: string,DATA: any,res: Response){
    res.status(response_status_codes.success).json({
        STATUS:'FAILURE',
        MESSAGE:message,
        DATA
    })
}

export function insufficientParameters(res:Response){
    res.status(response_status_codes.bad_request).json({
        STATUS:'FAILURE',
        MESSAGE:'Insuficient parameters',
        DATA:{}

    })
}

export function mongoError(err:any ,res:Response){
    res.status(response_status_codes.internal_server_error).json({
        STATUS:'FAILURE',
        MESSAGE:'MongoDB Error',
        DATA: err
    })
}