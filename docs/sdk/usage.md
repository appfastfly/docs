---
sidebar_position: 3
---

# Usage & Deep Links

Once installed and configured, you should initialize the Appfastfly SDK as early as possible in your application lifecycle to ensure you capture links from deferred installs or cold starts.

## Initialization

Import `Appfastfly` from the SDK and run `init()`. We recommend doing this inside your Root Component's `useEffect`.

```tsx
import React, { useEffect } from 'react';
import { Appfastfly } from '@appfastfly/react-native';

export default function App() {
  useEffect(() => {
    // Initialize the SDK and fetch configuration from Native modules
    Appfastfly.init().catch(console.error);
  }, []);

  return <YourAppNavigation />;
}
```

The `init()` workflow performs the following automatically:
1. Loads configs from native files.
2. Registers listeners for incoming deep links via Universal Links or URI schemes.
3. Checks if it's the *First Launch* of the application. If so, it performs a deferred matching request to see if the user came from an Appfastfly Link.

## Subscribing to Deep Link Events

The core functionality involves reacting to deep link events asynchronously. You can subscribe to changes at the root level or inside a specific screen.

```tsx
import React, { useEffect } from 'react';
import { Appfastfly } from '@appfastfly/react-native';

export default function DeepLinkHandler() {
  useEffect(() => {
    const unsubscribe = Appfastfly.subscribe((event: DeepLinkEvent) => {
      console.log('Received deep link payload:', event.payload);
      
      if (event.isFirstSession) {
        console.log(`User installed from: ${event.matchMethod} with confidence: ${event.matchConfidence}`);
      }

      // Automatically navigate based on payload e.g. 
      // if (event.payload.promo_code) navigate('PromoScreen')
    });

    return () => {
      unsubscribe();
    };
  }, []);
  
  return null;
}
```

## Synchronous Methods

Appfastfly caches the payload locally so you can retrieve it at any time if you don't wish to use the event emitter.

- **`getLatestParams()`**: Returns the payload of the most recently clicked link during this session.
- **`getFirstParams()`**: Returns the payload ONLY if the user was matched via a deferred deep link upon their very first launch. It will return `null` on subsequent launches.

```tsx
const latestPayload = Appfastfly.getLatestParams();
const installPayload = Appfastfly.getFirstParams();
```
