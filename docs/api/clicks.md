---
sidebar_position: 4
---

# Click Analytics

The Clicks API allows you to retrieve click analytics and historical performance for your links.

> Note: These endpoints are part of the Admin API and are primarily used by the dashboard. They require JWT Bearer authentication representing an Admin Session.

---

## Get Link Stats
Retrieve aggregated statistics for a specific link over an optional date range.

**Endpoint:** `GET /api/v1/admin/links/:id/stats`

### Query Parameters
- `startDate` (ISO 8601 DateString, optional): The start date for the statistics range.
- `endDate` (ISO 8601 DateString, optional): The end date for the statistics range.

### Response
Returns aggregated counts partitioned by platform (iOS, Android, Web), browsers, and devices.

---

## Get Link Clicks
Retrieve a raw paginated list of click events that occurred on a specific link.

**Endpoint:** `GET /api/v1/admin/links/:id/clicks`

### Query Parameters
- `page` (integer, optional): The page number to retrieve. Default is `1`.
- `limit` (integer, optional): The number of clicks per page. Default is `50`.

### Response
Returns an array of click events detailing the timestamp, IP address, user agent, operating system, matching method, and confidence score.
