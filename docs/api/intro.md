---
sidebar_position: 1
---

# Introduction

Welcome to the Appfastfly REST API! The API provides programmatic access to manage your smart links, view click analytics, and manage device identity.

Our API is designed around RESTful principles. It has predictable resource-oriented URLs, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

## Base URL

All API requests should be made to the base URL of the Appfastfly service:

```text
https://api.appfastfly.io.vn/api/v1
```

## Data Formats

The Appfastfly API accepts and returns **JSON** (`application/json`) exclusively. Ensure that you set the appropriate headers in your requests:

```http
Content-Type: application/json
Accept: application/json
```

## Error Handling

When an error occurs, the API will return a non-2xx HTTP status code along with a JSON response containing the error details:

```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "error": "Bad Request"
}
```

Common status codes you might encounter:

- `200 OK` - The request was successful.
- `201 Created` - A new resource was successfully created.
- `204 No Content` - The resource was successfully deleted.
- `400 Bad Request` - The request was invalid or could not be served.
- `401 Unauthorized` - Authentication failed or API key is missing.
- `403 Forbidden` - The API key lacks the required scopes.
- `404 Not Found` - The requested resource does not exist.
- `500 Internal Server Error` - Something went wrong on the server.
