# Test Suite: Registration
# Project: Automation Exercise | automationexercise.com

---

## TC-001: Successful registration with valid data
**Priority:** High
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is not registered in the system. Chrome browser is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Open the website | https://automationexercise.com |
| 2 | Click "Signup / Login" in the navigation bar | — |
| 3 | Enter name in "New User Signup" section | TestUser01 |
| 4 | Enter email in "New User Signup" section | testuser01@test.com |
| 5 | Click "Signup" button | — |
| 6 | Select Title | Mr |
| 7 | Enter password | Test1234! |
| 8 | Select Date of Birth | 01 / January / 1990 |
| 9 | Fill in address fields: First name, Last name, Address, Country, State, City, Zipcode, Mobile | John / Doe / 123 Main St / United States / California / Los Angeles / 90001 / 1234567890 |
| 10 | Click "Create Account" button | — |

**Expected result:**
Page with message "Account Created!" is displayed.
"Continue" button is available.
After clicking Continue — user is logged in, navigation shows "Logged in as TestUser01".

---

## TC-002: Registration with already registered email
**Priority:** High
**Type:** Functional
**Behavior:** Negative

**Pre-conditions:**
Email testuser01@test.com is already registered in the system.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Open the website | https://automationexercise.com |
| 2 | Click "Signup / Login" in the navigation bar | — |
| 3 | Enter name | TestUser02 |
| 4 | Enter already registered email | testuser01@test.com |
| 5 | Click "Signup" button | — |

**Expected result:**
Error message "Email Address already exist!" is displayed.
Registration is not completed. User stays on the Signup / Login page.

---

## TC-003: Registration with empty Name field
**Priority:** Medium
**Type:** Functional
**Behavior:** Negative

**Pre-conditions:**
Signup / Login page is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Leave Name field empty | — |
| 2 | Enter valid email | testuser03@test.com |
| 3 | Click "Signup" button | — |

**Expected result:**
Form is not submitted.
Name field is highlighted as required or browser validation message is shown.

---

## TC-004: Registration with empty Email field
**Priority:** Medium
**Type:** Functional
**Behavior:** Negative

**Pre-conditions:**
Signup / Login page is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Enter name | TestUser04 |
| 2 | Leave Email field empty | — |
| 3 | Click "Signup" button | — |

**Expected result:**
Form is not submitted.
Email field is highlighted as required or browser validation message is shown.

---

## TC-005: Registration with invalid email format
**Priority:** Medium
**Type:** Functional
**Behavior:** Negative

**Pre-conditions:**
Signup / Login page is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Enter name | TestUser05 |
| 2 | Enter email without @ symbol | testuser05test.com |
| 3 | Click "Signup" button | — |

**Expected result:**
Form is not submitted.
Browser or system shows email format validation error.

---

## TC-006: Registration with empty Password field
**Priority:** High
**Type:** Functional
**Behavior:** Negative

**Pre-conditions:**
First registration step completed — name and email entered, "Signup" clicked.
Account info form is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Leave Password field empty | — |
| 2 | Fill in all other required fields with valid data | Title: Mr, DOB: 01/Jan/1990, Address fields filled |
| 3 | Click "Create Account" button | — |

**Expected result:**
Form is not submitted.
Password field is highlighted as required.

---

## TC-007: Account deletion after registration
**Priority:** Medium
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is registered and logged in as TestUser01.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Click "Delete Account" in the navigation bar | — |

**Expected result:**
Page with message "Account Deleted!" is displayed.
User is logged out automatically.
Navigation no longer shows "Logged in as TestUser01".

---

## TC-008: Registration — password boundary value (1 character)
**Priority:** Medium
**Type:** Functional
**Behavior:** Negative

**Pre-conditions:**
First registration step completed.
Account info form is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Enter password with 1 character only | a |
| 2 | Fill in all other required fields with valid data | Title: Mr, DOB: 01/Jan/1990, Address fields filled |
| 3 | Click "Create Account" button | — |

**Expected result:**
System rejects the password.
Error message about minimum password length is shown.
Note: if no password requirement is documented — actual behavior is recorded as a finding.

---

---
---

# Test Suite: Login & Logout

---

## TC-009: Successful login with valid credentials
**Priority:** High
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is registered: email testuser01@test.com, password Test1234!
User is not logged in.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Open the website | https://automationexercise.com |
| 2 | Click "Signup / Login" in the navigation bar | — |
| 3 | Enter email in "Login" section | testuser01@test.com |
| 4 | Enter password | Test1234! |
| 5 | Click "Login" button | — |

**Expected result:**
User is logged in successfully.
Navigation shows "Logged in as TestUser01".
User is redirected to the home page.

---

## TC-010: Login with incorrect password
**Priority:** High
**Type:** Functional
**Behavior:** Negative

**Pre-conditions:**
User is registered: email testuser01@test.com.
User is not logged in.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Open Signup / Login page | https://automationexercise.com/login |
| 2 | Enter valid email | testuser01@test.com |
| 3 | Enter incorrect password | WrongPass999 |
| 4 | Click "Login" button | — |

**Expected result:**
Login fails.
Error message "Your email or password is incorrect!" is displayed.
User stays on the login page.

---

## TC-011: Login with unregistered email
**Priority:** High
**Type:** Functional
**Behavior:** Negative

**Pre-conditions:**
User is not logged in.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Open Signup / Login page | https://automationexercise.com/login |
| 2 | Enter email not registered in the system | notexist@test.com |
| 3 | Enter any password | Test1234! |
| 4 | Click "Login" button | — |

**Expected result:**
Login fails.
Error message "Your email or password is incorrect!" is displayed.

---

## TC-012: Login with empty Email field
**Priority:** Medium
**Type:** Functional
**Behavior:** Negative

**Pre-conditions:**
User is not logged in. Login page is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Leave Email field empty | — |
| 2 | Enter password | Test1234! |
| 3 | Click "Login" button | — |

**Expected result:**
Form is not submitted.
Email field is highlighted as required.

---

## TC-013: Login with empty Password field
**Priority:** Medium
**Type:** Functional
**Behavior:** Negative

**Pre-conditions:**
User is not logged in. Login page is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Enter valid email | testuser01@test.com |
| 2 | Leave Password field empty | — |
| 3 | Click "Login" button | — |

**Expected result:**
Form is not submitted.
Password field is highlighted as required.

---

## TC-014: Successful logout
**Priority:** High
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is logged in as TestUser01.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Click "Logout" in the navigation bar | — |

**Expected result:**
User is logged out.
Redirected to the Signup / Login page.
Navigation no longer shows "Logged in as TestUser01".

---

## TC-015: Access to login page when already logged in
**Priority:** Low
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is logged in as TestUser01.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Navigate directly to login URL | https://automationexercise.com/login |

**Expected result:**
User is redirected away from login page (e.g. to home page)
OR login page is shown but with a notice that user is already logged in.
Accessing login page while authenticated does not cause errors.

---
---

# Test Suite: Product Catalog

---

## TC-016: Home page displays product list
**Priority:** High
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
Browser is open. User can be logged in or guest.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Open the website | https://automationexercise.com |

**Expected result:**
Home page loads successfully.
Product list is visible with product images, names and prices.

---

## TC-017: Navigate to All Products page
**Priority:** High
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
Home page is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Click "Products" in the navigation bar | — |

**Expected result:**
All Products page opens.
Full product list is displayed.
Page title shows "All Products".

---

## TC-018: Search for an existing product
**Priority:** High
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
All Products page is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Enter product name in the search field | dress |
| 2 | Click "Submit" (search icon) | — |

**Expected result:**
Search results page is displayed.
Only products related to "dress" are shown.
Section title shows "Searched Products".

---

## TC-019: Search for a non-existing product
**Priority:** Medium
**Type:** Functional
**Behavior:** Negative

**Pre-conditions:**
All Products page is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Enter non-existing product name in search field | xyznonexistent123 |
| 2 | Click "Submit" (search icon) | — |

**Expected result:**
No products are displayed in results.
Page does not crash.
Empty state or "no results" message is shown.

---

## TC-020: Open product detail page
**Priority:** High
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
All Products page is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Click "View Product" on any product card | — |

**Expected result:**
Product detail page opens.
Product name, price, category, availability and description are displayed.
"Add to cart" button is visible.

---

## TC-021: Filter products by category — Women
**Priority:** Medium
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
Home page or Products page is open.
Category sidebar is visible.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Click "Women" in the Category sidebar | — |
| 2 | Click any subcategory (e.g. "Dress") | — |

**Expected result:**
Only products from Women > Dress category are displayed.
Page title reflects selected category.

---

## TC-022: Filter products by brand
**Priority:** Medium
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
Products page is open. Brands sidebar is visible.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Click any brand name in the Brands sidebar (e.g. "Polo") | — |

**Expected result:**
Only products from selected brand are displayed.
Page title shows brand name.

---

## TC-023: Product images load correctly
**Priority:** Medium
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
All Products page is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Visually inspect product cards on the page | — |
| 2 | Scroll through the product list | — |

**Expected result:**
All product images load without broken image icons.
No placeholder or error images visible.

---
---

# Test Suite: Shopping Cart

---

## TC-024: Add product to cart from product list
**Priority:** High
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is logged in. All Products page is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Hover over any product card | — |
| 2 | Click "Add to cart" button that appears | — |
| 3 | Click "View Cart" in the confirmation modal | — |

**Expected result:**
Product is added to cart.
Cart page shows the added product with correct name, price and quantity (1).

---

## TC-025: Add product to cart from product detail page
**Priority:** High
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is logged in. Product detail page is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Set quantity | 2 |
| 2 | Click "Add to cart" button | — |
| 3 | Click "View Cart" in the confirmation modal | — |

**Expected result:**
Product is added to cart with quantity 2.
Total price = unit price × 2.

---

## TC-026: Add multiple different products to cart
**Priority:** High
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is logged in.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Add first product to cart from Products page | any product |
| 2 | Continue shopping (click "Continue Shopping" in modal) | — |
| 3 | Add second product to cart | different product |
| 4 | Click "View Cart" | — |

**Expected result:**
Cart contains both products.
Each product listed separately with correct price and quantity.
Total price is sum of both products.

---

## TC-027: Remove product from cart
**Priority:** High
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is logged in. Cart contains at least one product.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Open cart page | https://automationexercise.com/view_cart |
| 2 | Click the "X" (delete) button next to a product | — |

**Expected result:**
Product is removed from cart.
Cart total is updated.
If cart is now empty — empty cart message is displayed.

---

## TC-028: Cart persists after page refresh
**Priority:** Medium
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is logged in. At least one product is in the cart.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Add a product to cart | — |
| 2 | Refresh the page (F5 / Cmd+R) | — |
| 3 | Open cart page | — |

**Expected result:**
Product is still in the cart after page refresh.
Quantity and price remain unchanged.

---

## TC-029: Cart is empty for new user
**Priority:** Low
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
New user registered and logged in. No products added.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Open cart page | https://automationexercise.com/view_cart |

**Expected result:**
Cart page opens without errors.
Empty cart message or empty product list is shown.

---
---

# Test Suite: Checkout

---

## TC-030: Complete checkout as logged-in user
**Priority:** High
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is logged in. Cart contains at least one product.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Open cart page | https://automationexercise.com/view_cart |
| 2 | Click "Proceed To Checkout" button | — |
| 3 | Review delivery and billing address | — |
| 4 | Add order comment | Test order comment |
| 5 | Click "Place Order" button | — |
| 6 | Enter card details | Name: Test User, Card: 4111111111111111, CVC: 123, Expiry: 12/26 |
| 7 | Click "Pay and Confirm Order" button | — |

**Expected result:**
Order is placed successfully.
Message "Your order has been placed successfully!" is displayed.
Order confirmation is shown.

---

## TC-031: Checkout redirects guest to login
**Priority:** High
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is NOT logged in. Cart contains at least one product.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Open cart page | https://automationexercise.com/view_cart |
| 2 | Click "Proceed To Checkout" button | — |

**Expected result:**
Modal or redirect prompts user to login or register.
Guest cannot proceed to checkout without authentication.

---

## TC-032: Order summary matches cart contents
**Priority:** High
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is logged in. Cart contains 2 specific products with known prices.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Open cart and note products, quantities and total | — |
| 2 | Click "Proceed To Checkout" | — |
| 3 | Review order summary on checkout page | — |

**Expected result:**
Products, quantities and total price on checkout page match cart exactly.
No discrepancies in prices or items.

---

## TC-033: Place order with empty card details
**Priority:** High
**Type:** Functional
**Behavior:** Negative

**Pre-conditions:**
User is logged in. Cart has products. Payment form is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Leave all card fields empty | — |
| 2 | Click "Pay and Confirm Order" | — |

**Expected result:**
Order is not placed.
Required field validation messages are shown.

---
---

# Test Suite: Account Management

---

## TC-034: View and verify account details
**Priority:** Medium
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is logged in as TestUser01.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Click username "Logged in as TestUser01" or navigate to account | https://automationexercise.com/account |

**Expected result:**
Account page displays correct user information: name, email, address.
Data matches what was entered during registration.

---

## TC-035: View order history
**Priority:** Medium
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is logged in. At least one order has been placed.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Click "Orders" or navigate to order history | — |

**Expected result:**
Order history page is displayed.
Placed order is visible with order ID, date and status.

---

## TC-036: Upload profile photo (if available)
**Priority:** Low
**Type:** Functional
**Behavior:** Positive

**Pre-conditions:**
User is logged in. Account page is open.

**Steps:**
| # | Action | Input data |
|---|--------|------------|
| 1 | Navigate to account / profile section | — |
| 2 | Upload a valid image file | test-photo.jpg (< 2MB) |
| 3 | Save changes | — |

**Expected result:**
Photo is uploaded and displayed in account profile.
No errors shown.

---
