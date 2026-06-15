# BUG-002: Security Mixed Content error - Insecure stylesheet blocked over HTTPS

**Severity:** Medium  
**Priority:** Medium  
**Environment:** macOS 14.5, Google Chrome v124.0  
**URL:** https://internal.local (Staging environment via Corporate VPN)
**Component:** Frontend / Security & Assets Loading  

## Description
The web application is served over a secure HTTPS connection in the staging environment, but the frontend layout bundles attempt to request an insecure external stylesheet resource via raw HTTP. The modern browser engine (Blink/Chrome) automatically blocks this request due to Mixed Content security policies, which causes broken layout elements and missing CSS styles for internal users.

## Steps to Reproduce
1. Connect to the corporate staging network via Cisco AnyConnect VPN.
2. Launch Google Chrome browser on macOS.
3. Open Chrome DevTools and switch to the **Console** tab.
4. Navigate to the internal staging URL: http://10.160.24
5. Observe the red security exception logs generated in the browser console.

## Expected Result
All asset references (CSS, JS, Images) within the source code must use the safe `https://` schema or secure local paths. The browser console should remain clean without security policy violations.

## Actual Result
The browser blocks the insecure resource allocation due to security constraints.
- **Console Log Output:** `Mixed Content: The page at 'http://10.160.24' was loaded over HTTPS, but requested an insecure stylesheet 'http://assets.local'. This request has been blocked; the content must be served over HTTPS.`
