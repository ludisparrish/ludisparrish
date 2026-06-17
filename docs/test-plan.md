# Test Plan — Automation Exercise E-commerce
**Version:** 1.0  
**Author:** [Твоё имя]  
**Date:** [Дата]  
**Status:** Draft

---

## 1. Introduction

**Project:** Testing of [automationexercise.com](https://automationexercise.com) — an e-commerce web application.

**Goal:** Validate core e-commerce flows, identify defects, and assess overall product quality through manual, API, and automated testing.

**Background:** Tester brings domain expertise in e-commerce / FMCG from prior experience as an inventory specialist, enabling deeper business-logic test coverage.

---

## 2. Scope

### In scope
- User registration and login / logout
- Product catalog: browsing, search, filtering, product page
- Shopping cart: add, update quantity, remove items
- Checkout: address, payment form, order placement
- Order history and account management
- API endpoints (23 endpoints per official API list)

### Out of scope
- Payment gateway internals (third-party service)
- Load / performance / stress testing
- Mobile native application
- Admin panel functionality
- Cross-browser testing (Firefox, Safari) — secondary priority

---

## 3. Test Approach

| Type | Tool | Coverage |
|------|------|----------|
| Functional (manual) | Qase + Chrome | All in-scope features |
| Exploratory | Charter-based sessions | High-risk areas |
| API testing | Postman | All 23 API endpoints |
| Smoke automation | Playwright (JavaScript) | Critical user paths |
| Proxy / network | Charles Proxy | Request/response validation |

**Test design techniques used:**
- Equivalence partitioning
- Boundary value analysis
- State transition (cart, order status)
- Negative testing (invalid inputs, edge cases)

---

## 4. Entry Criteria

Тестирование начинается при выполнении всех условий:

- [ ] Тестовое окружение доступно и стабильно
- [ ] Тест-кейсы написаны и проверены (минимум smoke + functional)
- [ ] Тестовые данные подготовлены (тестовые аккаунты, товары)
- [ ] Инструменты настроены: Qase, Jira/YouTrack, Postman, Playwright

---

## 5. Exit Criteria

Тестирование считается завершённым при выполнении всех условий:

- [ ] Выполнено ≥ 95% запланированных тест-кейсов
- [ ] Нет открытых дефектов уровня **Blocker** или **Critical**
- [ ] Все **High**-priority дефекты закрыты или отложены с согласия PM
- [ ] API-коллекция выполнена, результаты зафиксированы
- [ ] Test Summary Report написан и опубликован

**Suspension criteria** (когда тестирование приостанавливается):
- Окружение недоступно более 2 часов
- Blocker-дефект блокирует >30% тест-кейсов

---

## 6. Risks

| # | Risk | Probability | Impact | Mitigation |
|---|------|-------------|--------|------------|
| 1 | Нестабильное тестовое окружение | Medium | High | Использовать staging, делать smoke перед каждой сессией |
| 2 | Требования неполные / неоднозначные | Medium | Medium | Фиксировать вопросы, эскалировать PM, помечать тест-кейсы как "Need clarification" |
| 3 | Нехватка времени | Low | High | Приоритизировать critical path, smoke first |
| 4 | Сайт недоступен (внешний ресурс) | Low | High | Делать скриншоты/видео всех найденных багов сразу |

---

## 7. Test Environment

**Application URL:** https://automationexercise.com  
**Environment type:** Public staging (third-party demo app)  
**Test data:** Созданные тестовые аккаунты, стандартные товары из каталога

| Category | Details |
|----------|---------|
| OS | Windows 11 |
| Browser (primary) | Google Chrome [версия] |
| Browser (secondary) | Mozilla Firefox [версия] |
| API client | Postman [версия] |
| Proxy | Charles Proxy [версия] |
| Automation | Playwright [версия] + Node.js [версия] |

---

## 8. Tools

| Tool | Purpose | Plan |
|------|---------|------|
| [Qase](https://app.qase.io) | Test case management, test runs | Free tier |
| [Jira](https://www.atlassian.com/software/jira) / YouTrack | Bug tracking | Free tier |
| [Postman](https://www.postman.com) | API testing | Free tier |
| [Playwright](https://playwright.dev) | Test automation (JS) | Open source |
| [Charles Proxy](https://www.charlesproxy.com) | Network traffic analysis | — |
| [Loom](https://www.loom.com) / ShareX | Screen recording for bug reports | Free |
| [GitHub](https://github.com) | Portfolio & version control | Free |

---

## 9. Roles & Responsibilities

| Role | Name | Responsibilities |
|------|------|-----------------|
| QA Engineer | [Твоё имя] | Test planning, test case design, execution, bug reporting, API testing, automation, reporting |

---

## 10. Schedule

| Phase | Tasks | Duration |
|-------|-------|----------|
| **Planning & Design** | Тест-план, тест-кейсы в Qase | 2 дня |
| **Execution** | Прогон тест-кейсов, баг-репорты | 2 дня |
| **API Testing** | Postman-коллекция, assertions | 1 день |
| **Charles / Network** | Перехват и анализ запросов | 0.5 дня |
| **Automation** | Playwright smoke tests + CI | 2 дня |
| **Reporting** | Test Summary Report | 0.5 дня |
| **Total** | | **~8 дней** |

---

## 11. Test Summary Report

> Этот раздел заполняется по завершении тестирования.

| Metric | Value |
|--------|-------|
| Total test cases planned | — |
| Executed | — |
| Passed | — |
| Failed | — |
| Blocked | — |
| Total bugs found | — |
| Blocker / Critical | — |
| Major | — |
| Minor / Trivial | — |
| Pass rate | — % |

**Overall quality assessment:** [заполнить после тестирования]

**Recommendation:** [Go / No Go + обоснование]

---

*Test Plan prepared by [Твоё имя] · [Дата] · v1.0*
