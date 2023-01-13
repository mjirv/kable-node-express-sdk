import express from "express";
declare global {
    namespace Express {
        interface Request {
            clientId?: string;
        }
    }
}
declare class Kable {
    private kableClientId;
    private kableClientSecret;
    private baseUrl;
    private debug;
    private maxQueueSize;
    private recordAuthentication;
    private queue;
    private queueFlushInterval;
    private validCache;
    private invalidCache;
    private timer;
    /**
     * Initialize Kable with credentials found in your Kable dashboard and settings for the client library.
     *
     * @param {Object} config
     *   @param {string} kableClientId (required)
     *   @param {string} kableClientSecret (required)
     *   @param {string} baseUrl (required)
     *   @param {boolean} debug (optional, print log lines, default false)
     *   @param {number} maxQueueSize (optional, maximum number of events to batch before flushing, default 20)
     *   @param {boolean} recordAuthentication (optional, disables recording of authentication events for cases where `authenticate` and `record` are used together, default true)
     */
    constructor(config: any);
    /**
     * Record a usage event.
     *
     * @param clientId The clientId of the customer to whom this event should be attributed.
     * @param data Event data to record.
     * @param transactionId A unique identifier for this event used as an idempotency key. (If not provided, a UUID will be auto-generated.)
     * @param callback
     * @returns
     */
    record: (clientId: string, data: any, transactionId?: string | undefined, callback?: any) => this;
    authenticate: (req: express.Request, res: express.Response, next: express.NextFunction) => void | express.Response<any, Record<string, any>>;
    shutdown: () => void;
    private enqueueEvent;
    private flushQueue;
    private isErrorRetryable;
}
export { Kable };
