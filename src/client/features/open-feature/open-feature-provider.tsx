// import { type EvaluationContext, type Provider, type JsonValue, type ResolutionDetails } from '@openfeature/web-sdk';

// export class TestProvider implements Provider {
//   metadata = {
//     name: TestProvider.name,
//   };

//   readonly runsOn = 'client';

//   hooks = [];

//   onContextChange(oldContext: EvaluationContext, newContext: EvaluationContext): Promise<void> {
//     // code to run to reconcile the providers state with the newly updated context
//   }

//   resolveBooleanEvaluation(flagKey: string, defaultValue: boolean): ResolutionDetails<boolean> {
//     // code to evaluate boolean
//   }

//   resolveStringEvaluation(flagKey: string, defaultValue: string): ResolutionDetails<string> {
//     // code to evaluate string
//   }

//   resolveNumberEvaluation(flagKey: string, defaultValue: number): ResolutionDetails<number> {
//     // code to evaluate number
//   }

//   resolveObjectEvaluation<U extends JsonValue>(flagKey: string, defaultValue: U): ResolutionDetails<U> {
//     // code to evaluate object
//   }
// }
