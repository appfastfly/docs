---
sidebar_position: 4
---

# API Methods

Below is a detailed list of all methods available in the `Appfastfly` SDK instance.

### `init()`
Initializes the SDK, sets up universal link listeners, and checks for deferred install payloads.
```tsx
Appfastfly.init(): Promise<void>
```

### `subscribe(listener)`
Subscribe to incoming deep link events. The callback may fire immediately if a link payload was already cached.
```tsx
Appfastfly.subscribe(listener: (event: DeepLinkEvent) => void): () => void
```

Where `DeepLinkEvent` is:
```typescript
type DeepLinkEvent = {
  url?: string;
  payload: Record<string, any>;
  isFirstSession: boolean;
};
```
**Returns:** An unsubscribe function to clean up the listener.

### `getLatestParams()`
Returns the most recently received deep link payload, or `null`.
```tsx
Appfastfly.getLatestParams(): Record<string, any> | null
```

### `getFirstParams()`
Returns the very first deferred deep link payload received on app install, or `null`.
```tsx
Appfastfly.getFirstParams(): Record<string, any> | null
```

### `createLink(params)`
Creates a new short link programmatically via the SDK.
```tsx
Appfastfly.createLink(params: CreateLinkParams): Promise<{ shortCode: string; url: string }>
```

Where `CreateLinkParams` is:
```typescript
type CreateLinkParams = {
  payload: Record<string, any>;
  ogTitle?: string;
  ogDescription?: string;
  ogImageUrl?: string;
  channel?: string;
  campaign?: string;
  tags?: string[];
  iosRedirectUrl?: string;
  androidRedirectUrl?: string;
  webRedirectUrl?: string;
  expiresAt?: string;
};
```

### `setIdentity(userId)`
Associates the current device hardware with a specific user ID, so future clicks and installs can be grouped by User ID.
```tsx
Appfastfly.setIdentity(userId: string): Promise<void>
```

### `logout()`
Removes the current device-user association. Call this when your user signs out.
```tsx
Appfastfly.logout(): Promise<void>
```
