import * as http from 'http';
import ld from 'lodash';
import * as os from 'os';

const HOSTNAME = os.hostname();

interface EsInfo {
    '@timestamp': string;
    message: string;
    pid: number;
    host: string;
    tags?: string[];
    err?: string;
    level?: string;
    name?: string;
    request?: {
        method: string;
        url: string;
        normalizedUrl: string;
        remoteAddress: string;
    };
    response?: {
        statusCode: number;
        responseTime: number;
        fullHeaders: string;
    };
}

export class EsFormat {
    transform(info: any): any {
        const result: EsInfo = {
            '@timestamp': info['@timestamp'] || new Date().toISOString(),
            message: info.message || '',
            pid: process.pid,
            host: HOSTNAME,
            tags: info.tags,
            err: info.err ? info.err.stack(): undefined,
            level: info.level,
            name: info.name
        };

        const { request, response } = info;
        if(request) {
            result.request = {
                method: request.method || '',
                url: (request as any).originalUrl || request.url,
                normalizedUrl: normalizeExpressPath(request),
                remoteAddress: (request as any).ip
            };
        }

        if(response) {
            result.response = {
                statusCode: response.statusCode,
                responseTime: (response as any).responseTime,
                fullHeaders: JSON.stringify(ld.omit(response.getHeaders(), 'set-cookie', 'server-timing'))
            };
        }

        return result;
    }
}

export default function() {
    return new EsFormat();
}

/**
 * Given an express request, returns the normalized URL of the request
 * 
 * The basic idea here is when someone visits
 * "/api/v2/User/5ddc3ed8643713eb372b993a", we want to collect metrics about
 * the endpoint "/api/v2/User/:id".  This works for Exegesis paths, too.
 * @param req 
 * @returns 
 */
function normalizeExpressPath(req: http.IncomingMessage) {
    const expressReq = req as any;
    if('route' in expressReq && expressReq.route.path !== undefined) {
        return (expressReq.baseUrl || '') + expressReq.route.path.toString();
    } else {
        return undefined;
    }
}