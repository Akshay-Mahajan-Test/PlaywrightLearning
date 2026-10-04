# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04_GetbyRole.spec.ts >> Test using GetbyRole
- Location: 04_GetbyRole.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'username' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - main "Application main content" [ref=e3]:
    - generic [ref=e7]:
      - generic [ref=e10]:
        - img "Wingify" [ref=e12]
        - paragraph [ref=e13]: Sign in to Wingify platform
        - list [ref=e16]:
          - listitem [ref=e17]:
            - generic [ref=e18] [cursor=pointer]: Email address
            - textbox "Email address" [active] [ref=e20]:
              - /placeholder: Enter email ID
          - listitem [ref=e21]:
            - generic [ref=e22] [cursor=pointer]: Password
            - generic [ref=e23]:
              - textbox "Password" [ref=e24]:
                - /placeholder: Enter password
              - button "Toggle password visibility" [ref=e25] [cursor=pointer]
          - listitem [ref=e28]:
            - button "Forgot Password?" [ref=e29] [cursor=pointer]
          - listitem [ref=e30]:
            - generic [ref=e31]: Remember me
          - listitem [ref=e37]:
            - button "Sign in" [ref=e38] [cursor=pointer]
          - listitem [ref=e40]:
            - heading "Or" [level=6] [ref=e42]
          - listitem [ref=e44]:
            - button "Sign in with Google" [ref=e46] [cursor=pointer]
          - listitem [ref=e52]:
            - button "Sign in using SSO" [ref=e53] [cursor=pointer]
          - listitem [ref=e57]:
            - button "Sign in with Passkey" [ref=e58] [cursor=pointer]
          - listitem [ref=e62]:
            - text: Don't have an account?
            - link "Start a free trial" [ref=e63] [cursor=pointer]:
              - /url: https://wingify.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
          - listitem [ref=e64]:
            - text: By continuing, you agree to Wingify's
            - link "Privacy policy" [ref=e65] [cursor=pointer]:
              - /url: https://wingify.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
            - text: "&"
            - link "Terms" [ref=e66] [cursor=pointer]:
              - /url: https://wingify.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
            - text: .
      - generic [ref=e68]:
        - generic [ref=e69]:
          - paragraph [ref=e70]: Agentic Experience Optimization Platform
          - heading "Make every digital experience relevant" [level=1] [ref=e71]: Make everydigital experiencerelevant
        - img "Wingify-logo" [ref=e72]
  - img [ref=e73]:
    - generic: "'"
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test('Test using GetbyRole', async ({ page }) => {
  4  |     await page.goto('https://app.vwo.com/#/login');
  5  | 
> 6  |     let userName = await page.getByRole("textbox", {name: "username"}).fill("adnjshd jkcn");
     |                                                                        ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  7  |     let userPass = await page.getByRole('textbox', {name: "password"}).fill("dfoisdahncSH");
  8  |     let signBtn = await page.locator('#js-login-btn').click();
  9  |     let errorMsg = page.locator(':text-is("Your email, password, IP address or location did not match")');
  10 | 
  11 |     expect(errorMsg).toBeVisible();
  12 |     expect(errorMsg).toHaveText("Your email, password, IP address or location did not match");
  13 | });
```