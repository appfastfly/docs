---
sidebar_position: 2
---

# Authentication

The Appfastfly API uses API keys for authentication. There are two primary ways to authenticate depending on the endpoint you are accessing.

## Admin / Interal API Keys

Internal SDK operations and server-to-server communications typically use **App-Scoped API Keys**. These keys are passed via the `X-API-Key` header.

```http
X-API-Key: YOUR_APP_API_KEY
```

Endpoints like `/api/v1/links` or `/api/v1/resolve` used by the Mobile SDK require this header.

## Public REST API Keys

For generic programmatic access (e.g. creating links via an external backend), you use **Public API Keys**. These keys are managed via the dashboard and can be granted specific scopes (e.g., `links:read`, `links:write`).

Pass your Public API key as a Bearer token in the `Authorization` header, or via the `X-API-Key` header:

```http
Authorization: Bearer YOUR_PUBLIC_API_KEY
```
or
```http
X-API-Key: YOUR_PUBLIC_API_KEY
```

> **Security Note:** Treat your API keys securely. Do not expose them in client-side code (like frontend web applications) unless it's a restricted key meant for that purpose.

## Understanding Scopes

When creating a Public API key, you assign it specific permissions, called **Scopes**. The available scopes are:

- `links:read`: Allows reading information about your short links.
- `links:write`: Allows creating, updating, and deleting short links.

If your API key does not have the required scope for a requested operation, you will receive a `403 Forbidden` error.
