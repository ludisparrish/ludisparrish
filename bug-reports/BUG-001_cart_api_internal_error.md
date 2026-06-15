# BUG-001: HTTP 500 Internal Server Error on product addition to cart via API

**Severity:** Critical  
**Priority:** High  
**Environment:** macOS 14.5, Google Chrome v124.0  
**Component:** Backend / Shopping Cart API Service  

## Description
When an authenticated user attempts to add a retail product to the shopping cart, the system occasionally fails to process the operational transaction, returning an unhandled server exception (HTTP 500 Internal Server Error) from the internal API gateway and preventing the customer from proceeding to checkout.

## Steps to Reproduce
1. Connect to the corporate staging environment via Cisco AnyConnect VPN.
2. Open Google Chrome browser on macOS.
3. Open Chrome DevTools (`Cmd + Option + I`) -> **Network** tab -> filter by **Fetch/XHR**.
4. Trigger the product addition request by clicking the "Add to Cart" button on any catalog card.
5. Observe the network response intercept inside the DevTools panel.

## Expected Result
The staging API Gateway successfully processes the backend transaction. The core service updates the user's cart session data and returns HTTP status code `200 OK` or `201 Created`.

## Actual Result
The product transaction fails, and the UI layout hangs without confirmation. In the DevTools Network tab, the API request drops instantly with an unhandled server exception.
- **Request URL:** `http://10.160.24`
- **HTTP Method:** `POST`
- **Status Code:** `500 Internal Server Error`

## Technical Logs (Staging API Response Body JSON)
```json
{
  "status": "error",
  "code": 500,
  "message": "Internal Server Error: Connection reset by peer in CartService.java:84. Failed to update database transaction. Unexpected NullPointerException in Hibernate session."
}
```
