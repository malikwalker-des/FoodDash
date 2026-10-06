/** Minimal Pendo agent type used by track-event instrumentation. */
interface Pendo {
  track(eventName: string, properties?: Record<string, unknown>): void
}

declare const pendo: Pendo | undefined
