# Test Summary Report — Sprint 1 Full Regression
**Project:** Automation Exercise E-commerce  
**URL:** https://automationexercise.com  
**Author:** Gleb Ludis  
**Date:** 17 June 2026  
**Version:** 1.0  

---

## 1. Summary

Manual functional testing of the Automation Exercise e-commerce web application.
All planned test cases were executed. 3 defects found, 1 test case blocked due to a critical defect.

---

## 2. Test Execution Results

| Metric | Value |
|--------|-------|
| Total test cases planned | 36 |
| Total test cases executed | 36 |
| Passed | 32 |
| Failed | 3 |
| Blocked | 1 |
| Skipped | 0 |
| Pass rate | 88.8% |
| Time spent | 00:47:42 |

---

## 3. Defects Found

| ID | Title | Severity | Priority | Status |
|----|-------|----------|----------|--------|
| BUG-001 | Registration accepts password with 1 character — no minimum length validation | Critical | High | Open |
| BUG-002 | Navigating to /account redirects to home page — account details page is inaccessible | Major | High | Open |
| BUG-003 | Order history page does not exist — navigation option is missing | Major | Medium | Open |

---

## 4. Defects by Severity

| Severity | Count |
|----------|-------|
| Critical | 1 |
| Major | 2 |
| Minor | 0 |
| Trivial | 0 |
| **Total** | **3** |

---

## 5. Test Coverage by Module

| Module | Total | Passed | Failed | Blocked | Pass rate |
|--------|-------|--------|--------|---------|-----------|
| Registration | 8 | 7 | 1 | 0 | 87.5% |
| Login & Logout | 7 | 7 | 0 | 0 | 100% |
| Product Catalog | 8 | 8 | 0 | 0 | 100% |
| Shopping Cart | 6 | 6 | 0 | 0 | 100% |
| Checkout | 4 | 4 | 0 | 0 | 100% |
| Account Management | 3 | 0 | 2 | 1 | 0% |

---

## 6. Key Findings

**BUG-001 — Critical security issue:**
Registration form accepts a 1-character password with no validation.
This is a security vulnerability — weak passwords can be trivially brute-forced.
Immediate fix recommended before any production deployment.

**BUG-002 — Account page inaccessible:**
Direct navigation to /account redirects to home page.
Users cannot access their account details. This also blocks profile photo upload (TC-37).

**BUG-003 — Order history missing:**
No order history page or navigation link exists in the application.
Users have no way to review past orders — a core e-commerce feature is absent.

---

## 7. Modules Without Defects

Login & Logout, Product Catalog, Shopping Cart and Checkout modules
all passed 100% of test cases. Core purchase flow works as expected.

---

## 8. Quality Assessment

The application covers core e-commerce flows (browsing, cart, checkout) reliably.
However, the Account Management module has critical gaps:
account details and order history are inaccessible,
and password security validation is absent.

**Recommendation: No Go for production.**
BUG-001 (Critical) and BUG-002 (Major) must be resolved before release.

---

## 9. Test Environment

| Parameter | Value |
|-----------|-------|
| Browser | Google Chrome |
| OS | macOS |
| Test management | Qase |
| Bug tracking | Qase Defects |
| Application | https://automationexercise.com |

---

*Report prepared by Gleb Ludis · 17 June 2026 · Sprint 1 Full Regression*
