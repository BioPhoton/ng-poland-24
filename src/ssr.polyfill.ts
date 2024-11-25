import {createWindow} from 'domino';

/**
 * This is a shim to run Angular SSR with 3rd parties that include direct access of Browser APIs at run time as well as in side effects.
 */
let _dom: Window;
const dom = () => {
  if (!_dom) {
    _dom = createWindow('<!DOCTYPE html><p>Hello server world</p>');
  }
  return _dom
}

// This enables window access e.g.: window.document;
// As Angular's server-side polyfills do not include window usage, on a global level, but rather only isolated over Angular DI.
if (typeof global.window === 'undefined') {
  (global as any).window = dom();
  // @TODO mock window.matchMedia implementation
  (global as any).window = {
    ...window,
    matchMedia: () => console.log('matchMedia not implemented')
  }
}

// This enables document access e.g.: document.createElement('div');
// As Angular's server-side polyfills do not include document usage, on a global level, but rather only isolated over Angular DI.
if (typeof global.document === 'undefined') {
  (global as any).document = ((global as any)?.window ?? dom()).document;
  // @TODO mock document.cookie.match implementation
}

export class ResizeObserverMock {
  constructor(callback: (entries: ResizeObserverEntry[]) => void) {
    callback;
  }
  observe(target: Element, options?: ResizeObserverOptions) {
    target;
    options;
    console.log('ResizeObserverMock.observe not implemented')
  }
  unobserve(target: Element) {
    target;
    console.log('ResizeObserverMock.unobserve not implemented')
  }
  disconnect(target: Element) {
    target;
    console.log('ResizeObserverMock.disconnect not implemented')
  }
}
if (typeof (global as any)?.ResizeObserver === 'undefined') {
  (global as any).ResizeObserver = ResizeObserverMock;
}
