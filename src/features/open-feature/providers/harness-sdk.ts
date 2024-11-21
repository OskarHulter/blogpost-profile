import { Client, Event } from  '@harnessio/ff-nodejs-server-sdk';

export async function harnessSdk(){
  // set apiKey to your SDK API Key
  const apiKey = 'YOUR_FF_SDK_KEY';

  // set flagName to your flag identifier from the UI
  const flagName = 'harnessdarkmode';

  console.log('Harness SDK Getting Started');

  // Create Client
  const client = new Client(apiKey);

  type U = Record<string, unknown>;
  // Create a target (different targets can receive different results based on rules.
  // Here we are including "location" as a custom attribute)
  const target = {
    identifier: 'nodeserversdk',
    name: 'NodeServerSDK',
    attributes: {
      location: 'emea',
    },
  };

  try {
    await client.waitForInitialization();
  } catch (e: unknown) {
    console.log("Error when authenticating Feature Flags client: " + e?.toString())
  }

  try {
    // Log the state of the flag every 10 seconds
    setInterval(async () => {
      const value = await client.boolVariation(flagName, target, false);
      console.log('Flag variation:', value);
    }, 10000);

    // We can also watch for the event when a flag changes
    client.on(Event.CHANGED, async (flagIdentifier) => {
      if (typeof flagIdentifier !== 'string') throw new Error('Flag identifier must be a string');
      const value = await client.boolVariation(flagIdentifier, target, false);
      console.log(`${flagIdentifier} changed: ${value}`);
    });
  } catch (e) {
    console.error('Error:', e);
  }
}
    