# QA Portfolio — Automation Exercise E-commerce

Manual, API and automation testing of a real e-commerce web application.

**Application under test:** [automationexercise.com](https://automationexercise.com)  
**Domain expertise:** E-commerce / FMCG (former inventory specialist background — deep understanding of business logic behind order flows, stock management and catalog operations)

---

## Stack

| Area | Tools |
|------|-------|
| Test management | Qase |
| Bug tracking | Qase Defects |
| API testing | Postman |
| Automation | Playwright (JavaScript) |
| Network analysis | Charles Proxy |
| Version control | Git / GitHub |
| OS | macOS |
| Browser | Google Chrome |

---

## Project Structure

```
qa-portfolio/
├── docs/
│   ├── test-plan.md              # Test plan: scope, approach, entry/exit criteria
│   └── test-summary-report.md   # Final report with metrics and recommendation
├── test-cases/
│   └── qase-import-v2.csv       # 36 test cases exported from Qase
├── bug-reports/
│   ├── BUG-001.md                # Critical: no password minimum length validation
│   ├── BUG-002.md                # Major: account page inaccessible
│   └── BUG-003.md                # Major: order history page missing
├── api-tests/
│   └── AE-API-Collection.json   # Postman collection: 13 requests with assertions
├── playwright-tests/
│   └── tests/                   # Smoke automation suite
└── README.md
```

---

## Test Results — Sprint 1 Full Regression

| Metric | Value |
|--------|-------|
| Test cases executed | 36 |
| Passed | 32 |
| Failed | 3 |
| Blocked | 1 |
| Pass rate | 88.8% |
| Bugs found | 3 (1 Critical, 2 Major) |
| Time spent | 47 min |

**Recommendation: No Go** — Critical security defect (BUG-001) must be resolved before release.

---

## Key Findings

**BUG-001 — Critical (Security)**  
Registration accepts passwords of any length including 1 character.  
No minimum password length validation exists.

**BUG-002 — Major**  
Account details page (/account) redirects to home page.  
Users cannot access their profile. Blocks BUG-002 and TC-37.

**BUG-003 — Major**  
Order history page does not exist.  
No navigation link or page available — core e-commerce feature missing.

---

## API Testing — Postman Collection

13 requests covering:
- Product Actions (GET products list, brands, POST search)
- User Account (create, verify login, update, get details)
- Negative scenarios (missing params, unsupported methods)

All requests include assertions: status code, responseCode, response body structure, data types.

---

## Automation — Playwright (JavaScript)

Smoke test suite covering critical user paths:
- User registration
- Login / logout
- Add product to cart
- Complete checkout flow

---

## About

QA Engineer with background in e-commerce / FMCG operations.  
Former inventory specialist at a darkstore — hands-on experience with order management,  
stock control and supply chain processes that directly maps to testing e-commerce systems.

**Contact:** [LinkedIn](https://www.linkedin.com/in/gleb-ludis-1a4253229/) | [Email](glebludis@gmail.com) | Telegram: @glebludis
