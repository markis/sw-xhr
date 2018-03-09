function noop(): any {
  // do nothing;
}

export default class EventImpl implements Event {
  public readonly target: EventTarget = null as any;
  public readonly currentTarget: EventTarget = null as any;
  public readonly defaultPrevented: boolean = false;
  public readonly eventPhase: number = 0;
  public readonly initializedFlag: boolean = true;
  public readonly isTrusted: boolean = false;
  public readonly stopPropagationFlag: boolean = false;
  public readonly stopImmediatePropagationFlag: boolean = false;
  public readonly canceledFlag: boolean = false;
  public readonly dispatchFlag: boolean = false;
  public readonly scoped: boolean = false;
  public readonly srcElement: Element | null = null;
  public readonly timeStamp: number = 0;
  public readonly type: string = '';

  public readonly bubbles: boolean = false;
  public readonly cancelable: boolean = false;

  public readonly AT_TARGET: number = 0;
  public readonly BUBBLING_PHASE: number = 0;
  public readonly CAPTURING_PHASE: number = 0;

  public cancelBubble: boolean = false;
  public returnValue: boolean = true;

  initEvent: (eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean) => void = noop;
  preventDefault: () => void = noop;
  stopImmediatePropagation: () => void = noop;
  stopPropagation: () => void = noop;
  deepPath: () => EventTarget[] = noop;
}
