function noop() {
  // do nothing;
}

type EventListenerTypes = keyof XMLHttpRequestEventMap;
type EventListener = (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[EventListenerTypes]) => any;
type EventListenerOptions = boolean | AddEventListenerOptions;

export default class XMLHttpRequestPolyfillBase {
  public readonly DONE: number = 4;
  public readonly HEADERS_RECEIVED: number = 2;
  public readonly LOADING: number = 3;
  public readonly OPENED: number = 1;
  public readonly UNSENT: number = 0;

  public readyState: number = this.UNSENT;
  public response: any;
  public responseText: string = '';
  public responseType: XMLHttpRequestResponseType = '';
  public responseURL: string = '';
  public responseXML: Document | null = null;
  public status: number = -1;
  public statusText: string = '';
  public timeout: number = -1;
  public upload: XMLHttpRequestUpload = new XMLHttpRequestUpload();
  public withCredentials: boolean = false;

  public onabort: (this: XMLHttpRequest, ev: Event) => any = noop;
  public onerror: (this: XMLHttpRequest, ev: ErrorEvent) => any = noop;
  public onload: (this: XMLHttpRequest, ev: Event) => any = noop;
  public onloadend: (this: XMLHttpRequest, ev: ProgressEvent) => any = noop;
  public onloadstart: (this: XMLHttpRequest, ev: Event) => any = noop;
  public onprogress: (this: XMLHttpRequest, ev: ProgressEvent) => any = noop;
  public onreadystatechange: (this: XMLHttpRequest, ev: Event) => any = noop;
  public ontimeout: (this: XMLHttpRequest, ev: ProgressEvent) => any = noop;

  public addEventListener(type: EventListenerTypes, listener: EventListener, options?: EventListenerOptions): void {
    switch (type) {
      case 'readystatechange':
        this.onreadystatechange = listener.bind(this);
        break;
      case 'abort':
        this.onabort = listener.bind(this);
        break;
      case 'error':
        this.onerror = listener.bind(this);
        break;
      case 'load':
        this.onload = listener.bind(this);
        break;
      case 'loadend':
        this.onloadend = listener.bind(this);
        break;
      case 'loadstart':
        this.onloadstart = listener.bind(this);
        break;
      case 'progress':
        this.onprogress = listener.bind(this);
        break;
      case 'timeout':
        this.ontimeout = listener.bind(this);
        break;
      default:
        throw Error(`Listener type ${ type } is not supported.`);
    }
  }
  public dispatchEvent(evt: Event): boolean {
    throw Error('not implemented');
  }
  public removeEventListener(type: EventListenerTypes, listener: EventListener, options?: EventListenerOptions): void {
    switch (type) {
      case 'readystatechange':
        this.onreadystatechange = noop;
        break;
      case 'abort':
        this.onabort = noop;
        break;
      case 'error':
        this.onerror = noop;
        break;
      case 'load':
        this.onload = noop;
        break;
      case 'loadend':
        this.onloadend = noop;
        break;
      case 'loadstart':
        this.onloadstart = noop;
        break;
      case 'progress':
        this.onprogress = noop;
        break;
      case 'timeout':
        this.ontimeout = noop;
        break;
      default:
        throw Error(`Listener type ${ type } is not supported.`);
    }
  }
}
