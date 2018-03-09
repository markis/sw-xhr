export default class XMLHttpRequestPolyfill implements XMLHttpRequest {
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
    readyState: number;
    response: any;
    responseText: string;
    responseType: XMLHttpRequestResponseType;
    responseURL: string;
    responseXML: Document | null;
    status: number;
    statusText: string;
    timeout: number;
    upload: XMLHttpRequestUpload;
    withCredentials: boolean;
    private events;
    onabort: (this: XMLHttpRequest, ev: Event) => any;
    onerror: (this: XMLHttpRequest, ev: ErrorEvent) => any;
    onload: (this: XMLHttpRequest, ev: Event) => any;
    onloadend: (this: XMLHttpRequest, ev: ProgressEvent) => any;
    onloadstart: (this: XMLHttpRequest, ev: Event) => any;
    onprogress: (this: XMLHttpRequest, ev: ProgressEvent) => any;
    onreadystatechange: (this: XMLHttpRequest, ev: Event) => any;
    ontimeout: (this: XMLHttpRequest, ev: Event) => any;
    addEventListener(type: EventListenerTypes, listener: EventListener, options?: EventListenerOptions): void;
    dispatchEvent(evt: Event): boolean;
    removeEventListener(type: EventListenerTypes, listener: EventListener, options?: EventListenerOptions): void;
    private aborted;
    private request?;
    private responseHeaders?;
    abort(): void;
    getAllResponseHeaders(): string;
    getResponseHeader(header: string): string | null;
    msCachingEnabled(): boolean;
    open(method: string, url: string, async?: boolean, user?: string, password?: string): void;
    overrideMimeType(mime: string): void;
    setRequestHeader(header: string, value: string): void;
    send(data?: any): void;
}


