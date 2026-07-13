import { StatusCodes } from 'http-status-codes';

class RespuestasHelper {

    responderOk = (res, data) => {
        res.status(StatusCodes.OK).json(data);
    }

    responderCreated = (res, data) => {
        res.status(StatusCodes.CREATED).json(data);
    }

    responderBadRequest = (res, mensaje) => {
        res.status(StatusCodes.BAD_REQUEST).send(mensaje);
    }

    responderBadRequestJson = (res, data) => {
        res.status(StatusCodes.BAD_REQUEST).json(data);
    }

    responderNotFound = (res, mensaje) => {
        res.status(StatusCodes.NOT_FOUND).send(mensaje);
    }

    responderInternalError = (res, error) => {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .send(`Error: ${error.message}`);
    }

}

export default new RespuestasHelper();