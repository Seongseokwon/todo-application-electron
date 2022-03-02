export class HTTPError extends Error {
    private statusCode;
    private type;
    constructor(statusCode: number, type: string, message?: string) {
        super(message);
        this.name = 'HTTPError';
        this.statusCode = statusCode
        this.type = type;
    }
}