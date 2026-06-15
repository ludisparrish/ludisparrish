# BUG-003: Mobile App Crash (Fatal Exception) on credit card tokenization via Stripe SDK

**Severity:** Critical  
**Priority:** High  
**Environment:** Android 14 (API 34), Samsung Galaxy S23, Global E-Commerce App v3.1.2  
**Component:** Mobile Client / Payment Integration Module  

## Description
During exploratory testing of the checkout flow, attempting to add and authorize a new credit card using the Stripe payment gateway SDK causes an immediate application crash. The defect is 100% reproducible on the target Android build and triggers a NullPointerException captured via Android Studio Logcat.

## Steps to Reproduce
1. Launch the E-Commerce mobile application and log in to a verified test account.
2. Add any retail item to the cart and proceed to the Checkout screen.
3. In the "Payment Method" section, tap the "Add New Credit Card" button.
4. Fill in valid test card credentials (Card number, Expiry, CVV) and tap "Save & Authorize".
5. Observe the device screen interface behavior and monitor the USB-connected Android Studio Logcat output stream.

## Expected Result
The Stripe SDK tokenizes the credit card data securely, returns a success callback token to the application frontend, and seamlessly redirects the user back to the final checkout confirmation state.

## Actual Result
The mobile application freezes for 1 second and then crashes instantly, throwing the user out to the Android device home screen launcher.

## Technical Logs (Android Studio Logcat Crash Output)
```bash
2026-06-15 16:10:42.124 28442-28442/com.globalshop.app FATAL EXCEPTION: main
    Process: com.globalshop.app, PID: 28442
    java.lang.RuntimeException: Unable to start activity ComponentInfo{com.globalshop.app/com.globalshop.payment.CardFormActivity}: java.lang.NullPointerException: Attempt to invoke virtual method 'com.stripe.android.model.Token' on a null object reference
        at android.app.ActivityThread.performLaunchActivity(ActivityThread.java:3824)
        at android.app.ActivityThread.handleLaunchActivity(ActivityThread.java:4000)
        at android.app.ActivityThread\$H.handleMessage(ActivityThread.java:2210)
        at android.os.Handler.dispatchMessage(Handler.java:106)
        at android.os.Looper.loopOnce(Looper.java:201)
        at android.os.Looper.loop(Looper.java:288)
        at android.app.ActivityThread.main(ActivityThread.java:7898)
```
