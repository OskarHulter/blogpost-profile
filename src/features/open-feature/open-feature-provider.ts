import { type Provider, type ResolutionDetails, type EvaluationContext, type JsonValue, OpenFeatureEventEmitter, type Hook, type Logger, type ServerProviderStatus, type TrackingEventDetails } from '@openfeature/server-sdk';

export class MyFeatureProvider implements Provider {
  hooks?: Hook[] | undefined
  resolveObjectEvaluation<T extends JsonValue>(flagKey: string, defaultValue: T, context: EvaluationContext, logger: Logger): Promise<ResolutionDetails<T>> {
    throw new Error('Method not implemented.')
  }
  status?: ServerProviderStatus | undefined
  onClose?(): Promise<void> {
    throw new Error('Method not implemented.')
  }
  initialize?(context?: EvaluationContext): Promise<void> {
    throw new Error('Method not implemented.')
  }
  track?(trackingEventName: string, context?: EvaluationContext, trackingEventDetails?: TrackingEventDetails): void {
    throw new Error('Method not implemented.')
  }
  readonly metadata = {
    name: 'My Feature Provider',
  } as const;

  readonly runsOn = 'server';

  // emitter for provider events
  events = new OpenFeatureEventEmitter();

  resolveBooleanEvaluation(
    flagKey: string,
    defaultValue: boolean,
    context: EvaluationContext
  ): Promise<ResolutionDetails<boolean>> {
    // code to resolve boolean details
    console.dir('flagKey', flagKey);
    console.dir('context', context);
    return new Promise(() => defaultValue);
  }

  resolveStringEvaluation(
    flagKey: string,
    defaultValue: string,
    context: EvaluationContext
  ): Promise<ResolutionDetails<string>> {
    // code to resolve string details
    console.dir('flagKey', flagKey);
    console.dir('context', context);
    return new Promise(() => defaultValue);
  }

  resolveNumberEvaluation(
    flagKey: string,
    defaultValue: number,
    context: EvaluationContext
  ): Promise<ResolutionDetails<number>> {
    // code to resolve number details
    console.dir('flagKey', flagKey);
    console.dir('context', context);
    return new Promise(() => defaultValue);
  }

  // resolveObjectEvaluation(
  //   flagKey: string,
  //   defaultValue: JsonValue,
  //   context: EvaluationContext
  // ): Promise<ResolutionDetails<JsonValue>> {
  //   // code to resolve object details
  //   console.dir('flagKey', flagKey);
  //   console.dir('context', context);
  //   return new Promise(() => defaultValue);
  // }
}
