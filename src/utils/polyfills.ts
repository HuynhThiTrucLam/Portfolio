// Browser polyfills for older browsers

// Polyfill for requestAnimationFrame (for older browsers)
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function (
    callback: FrameRequestCallback
  ): number {
    return window.setTimeout(callback, 1000 / 60);
  };
}

if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = function (id: number): void {
    clearTimeout(id);
  };
}

// Polyfill for scroll behavior (for older browsers)
if (!("scrollBehavior" in document.documentElement.style)) {
  const scrollToPolyfill = (element: Element, options: ScrollToOptions) => {
    const { top = 0, left = 0, behavior = "auto" } = options;

    if (behavior === "smooth") {
      const startTime = performance.now();
      const startY = element.scrollTop;
      const startX = element.scrollLeft;
      const distanceY = top - startY;
      const distanceX = left - startX;
      const duration = 500; // 500ms for smooth scroll

      const easeInOutQuart = (t: number): number => {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      };

      const scroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutQuart(progress);

        element.scrollTop = startY + distanceY * ease;
        element.scrollLeft = startX + distanceX * ease;

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    } else {
      element.scrollTop = top;
      element.scrollLeft = left;
    }
  };

  // Polyfill Element.scrollTo
  Element.prototype.scrollTo = function (this: Element, ...args: any[]) {
    let options: ScrollToOptions;

    if (typeof args[0] === "object") {
      options = args[0];
    } else {
      options = {
        left: args[0],
        top: args[1],
      };
    }

    scrollToPolyfill(this, options);
  };
}

// Polyfill for CSS.supports (for older browsers)
if (!window.CSS || !window.CSS.supports) {
  window.CSS = window.CSS || {};
  window.CSS.supports = function (property: string, value?: string): boolean {
    const element = document.createElement("div");
    try {
      if (value !== undefined) {
        (element.style as any)[property] = value;
        return (element.style as any)[property] === value;
      } else {
        // For @supports queries with full CSS rules
        const [prop, val] = property.split(":").map((s) => s.trim());
        (element.style as any)[prop] = val;
        return (element.style as any)[prop] === val;
      }
    } catch (e) {
      return false;
    }
  };
}

// Polyfill for IntersectionObserver (for older browsers)
if (!window.IntersectionObserver) {
  class IntersectionObserverPolyfill implements IntersectionObserver {
    private callback: IntersectionObserverCallback;
    public root: Element | Document | null = null;
    public rootMargin: string = "0px";
    public thresholds: ReadonlyArray<number> = [0];
    private targets: Element[] = [];

    constructor(
      callback: IntersectionObserverCallback,
      options: IntersectionObserverInit = {}
    ) {
      this.callback = callback;
      this.root = options.root || null;
      this.rootMargin = options.rootMargin || "0px";
      this.thresholds = Array.isArray(options.threshold)
        ? options.threshold
        : [options.threshold || 0];
    }

    observe(target: Element): void {
      this.targets.push(target);
      // Simple polyfill - could be enhanced with actual intersection detection
      setTimeout(() => {
        this.callback(
          [
            {
              target,
              isIntersecting: true,
              intersectionRatio: 1,
              boundingClientRect: target.getBoundingClientRect(),
              rootBounds: null,
              intersectionRect: target.getBoundingClientRect(),
              time: Date.now(),
            },
          ],
          this as any
        );
      }, 100);
    }

    unobserve(target: Element): void {
      const index = this.targets.indexOf(target);
      if (index > -1) {
        this.targets.splice(index, 1);
      }
    }

    disconnect(): void {
      this.targets = [];
    }

    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }

  (window as any).IntersectionObserver = IntersectionObserverPolyfill;
}

// Custom event polyfill for older browsers
if (!window.CustomEvent) {
  function CustomEventPolyfill(
    this: any,
    event: string,
    params: CustomEventInit = {}
  ) {
    const evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(
      event,
      params.bubbles || false,
      params.cancelable || false,
      params.detail
    );
    return evt;
  }
  CustomEventPolyfill.prototype = window.Event.prototype;
  (window as any).CustomEvent = CustomEventPolyfill;
}

// Export for use in the app
export default function initPolyfills(): void {
  // Polyfills are automatically initialized when this module is imported
  console.log("Browser polyfills initialized");
}
