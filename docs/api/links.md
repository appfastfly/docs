---
sidebar_position: 3
---

# Links

The Links API allows you to programmatically create, read, update, and delete your Appfastfly short links and deep links.

These endpoints are all accessible via the Public API using a Public API key.

---

## Create a Short Link
Create a new deep link/short link with custom payload data and conditional redirect rules.

**Endpoint:** `POST /api/v1/public/links`  
**Required Scope:** `links:write`

### Request Body

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `payload` | Object | **Yes** | A custom JSON object containing the data to be passed to the mobile app when the deep link is resolved. |
| `ogTitle` | String | No | The Open Graph title for the link preview (max 255 chars). |
| `ogDescription` | String | No | The Open Graph description for the link preview. |
| `ogImageUrl` | String | No | Valid URL pointing to an image to be used for the Open Graph image. |
| `channel` | String | No | Marketing channel (e.g. 'sms', 'email'). |
| `campaign` | String | No | Marketing campaign name. |
| `tags` | Array of Strings | No | User-defined tags for grouping links. |
| `iosRedirectUrl` | String | No | Fallback URL if the link is opened on iOS and the app is not installed. |
| `androidRedirectUrl` | String | No | Fallback URL if the link is opened on Android and the app is not installed. |
| `webRedirectUrl` | String | No | Fallback URL if the link is opened on a desktop browser. |
| `expiresAt` | DateString | No | ISO 8601 formatted date indicating when the link expires. |

### Example Request

```bash
curl -X POST https://api.appfastfly.io.vn/api/v1/public/links \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "payload": {
      "promo_code": "SUMMER50",
      "referrer_id": "12345"
    },
    "ogTitle": "Get 50% Off Your First Purchase!",
    "channel": "social_media",
    "campaign": "summer_sale"
  }'
```

---

## List Links
Retrieve a paginated list of all links associated with your app.

**Endpoint:** `GET /api/v1/public/links`  
**Required Scope:** `links:read`

### Query Parameters
- `page` (integer, optional): The page number to retrieve. Default is `1`.
- `limit` (integer, optional): The number of links per page. Default is `20`.

---

## Get a Link
Retrieve the details of a specific link by its short code.

**Endpoint:** `GET /api/v1/public/links/:shortCode`  
**Required Scope:** `links:read`

---

## Update a Link
Update the properties of an existing link.

**Endpoint:** `PUT /api/v1/public/links/:shortCode`  
**Required Scope:** `links:write`

The request body is similar to the Create Link endpoint. Only the provided fields will be updated. The `payload` object will override the existing payload.

---

## Delete a Link
Delete a specific link by its short code. This action cannot be undone.

**Endpoint:** `DELETE /api/v1/public/links/:shortCode`  
**Required Scope:** `links:write`

Returns `204 No Content` on success.
