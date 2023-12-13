# Workshops

## Folder structure

Here is the structure of the workshops folder, including some folders that you
might only add locally.

```
.
└─ workshops
   └─ basic-html
      ├─ index.md                                 // student instructions served birkbeck2.github.io/web-development
      ├─ road-users.grade.js                      // or index.grade.js or arbitrary-name.grade.js
      ├─ starter-files                            // you can put starter files here
      └─ submissions                              // the contents of this folder are git-ignored
         ├─ student1                              // this can be a Git repository
         │  ├─ road-users.html                    // this file will be tested
         │  └─ road-users.test.js                 // automatically generated from ‘*.grade.js’ before tests
         ├─ student2
         │  ├─ road-users.html                    // this file will be tested too
         │  └─ road-users.test.js                 // automatically generated
         └─ web-development-basic-html-instructor // this should be a private/internal instructor repository
            ├─ road-users.test.js                 // automatically generated
            └─ road-users.html                    // this file will be tested too
```

## Writing instructions for students

Write your instructions in `index.md` and then [add the workshop name and
URL](https://github.com/Birkbeck2/web-development/blob/main/README.md#adding-navigation-for-lectures-and-workshops)
to the `outline.js` file so it will show up on the website.

## Working with autograders

The autograders are written using [Playwright](https://playwright.dev/),
a robust end-to-end testing framework. Playwright runs real browser
engines, which means you just need to write a few lines of JavaScript to
programmatically test the structure, styling, and interactivity of student
web projects.

Each Playwright script file should also be in the corresponding workshop
folder and it should end with `.grade.js`. Before tests are run, this
file is copied into any existing submission subfolders, and its file ending is
changed to `test.js`, which is the file ending recognised by Playwright as
a test file. You can therefore run the tests on any number of example or
student repositories found in folders like
`workshops/my_workshop/submissions/student_a/` or
`workshops/my_workshop/submissions/student_b/`, while only editing one
main test script.

## Instructor answers

You can create a separate (private/internal) repository for each workshop
to hold instructor answer code. Creating a “correct” or “completed”
version of the workshop helps you be sure the autograders are working
well, and it helps instructors communicate about what acceptable student
work looks like.

Important: Always set these repositories as `internal` to the `Birkbeck2`
GitHub organization.

- [web-development-basic-html-instructor](https://github.com/Birkbeck2/web-development-basic-html-instructor)
- [web-development-semantic-html-instructor](https://github.com/Birkbeck2/web-development-semantic-html-instructor)
- [web-development-accessibility-instructor](https://github.com/Birkbeck2/web-development-accessibility-instructor)
- [web-development-advanced-css-instructor](https://github.com/Birkbeck2/web-development-advanced-css-instructor)
- [web-development-git-instructor](https://github.com/Birkbeck2/web-development-git-instructor)
- [web-development-intro-javascript-instructor](https://github.com/Birkbeck2/web-development-intro-javascript-instructor)

By cloning each of these repositories into the appropriate `submissions`
folder, you give your autograder something to run on even before you have
student submissions.

NOTE: If you use VS Code, please enable scanning nested Git repositories:

1. Open up the settings pane with File > Preferences > Settings

2. Search for “Git: Repository Scan Max Depth”.

3. Set the value to 5.

## Writing tests

Test scripts should always end in `.grade.js` and be placed in a workshop
folder: `/workshops/my-workshop/my-test-script.grade.js`.

Here is a starter template.

```js
import { test, expect } from '@playwright/test'
import { determineBaseURL } from '#test-utils'

const baseURL = determineBaseURL(import.meta.url).href
test.use({baseURL: baseURL})   // required because of nesting

const targetFile = 'fruit-and-veg.html'  // the submission file to target
const targetURL = new URL(targetFile, baseURL).href

// Example test
test('h1 includes correct text', async ({ page }) => {
  // Go to the page in Chrome (there’s a real browser running in the background)
  await page.goto(targetURL)

  // Define a CSS locator
  const locator = page.locator('body h1')
  // Each locator is a Promise that is resolved either with
  // await or with a method like `toContainText` below

  // Tell playwright you expect the h1 to have case-insensitive 'veg'
  await expect(locator).toContainText('veg', {ignoreCase : true})
})
```

Learn more at [playwright.dev](https://playwright.dev/docs/writing-tests).

## Running tests locally

You can run tests with one of these test commands:

```shell
npm run grade   # run all tests with summary in terminal (output below)

npm run grade workshops/accessibility   # only run tests in subfolders of the accessibility workshop

npm run gradescope  # simulate running the tests on the Gradescope server, output to Playwright JSON
node workshops/modify-results.js  # restructure the Playwright JSON as Gradescope JSON, saved at workshops/results.json
```

Here is one terminal output of `npm run grade workshops/accessibility`:

```sh
⇒  pnpm run grade workshops/accessibility

> @ grade /home/joe/git/web-development
> pnpm exec playwright test --reporter=html "workshops/accessibility"


Running 8 tests using 6 workers
  8 passed (3.9s)

To open last HTML report run:

  pnpm exec playwright show-report
```

If any tests failed, Playwright will open an HTML page for you to go through
the failure messages. Anything you log to the console will be available under
the “stdout” details section.

![Playwright HTML
results](../lectures/images/playwright-html-reporter.png)

## Running on Gradescope

To run tests on
[Gradescope](https://gradescope-autograders.readthedocs.io/en/latest/),
generate zip files for the workshops using this script:

```shell
npm run zip
```

Then upload the correct zip file to the Gradescope assignment and check
that it has built the testing environment successfully.

## Using a starter template repository as the upstream for an instructor answer repository

Sort of like making a fork on the same organization.

### Scenario

Say you have a public template that your students are supposed to download
to start the workshop.

```
https://github.com/Birkbeck2/web-development-my-workshop
```

You also want to create a repository with instructor answers, so that you
can run the autograder tests against something while writing them. You
want it to be named like this:

```
https://github.com/Birkbeck2/web-development-my-workshop-instructor
```

You also want to be able to pull changes *from* the template to the
answers, if you change the workshop in the future.

Normally this situation could be handled by a GitHub fork, but you want
them both to be on the Birkbeck2 organization.

### Solution

1. On GitHub, create a new blank repository to be the instructor answer
   repo with a different name than the template repo (ideally the same
   name with suffix `-instructor`).

2. Clone the template repo to a new place on your computer, like in
   `/workshop/my-workshop/submissions`.

3. Check what the remote URL is currently.

   ```
   git remote -v
   ```

4. Set the origin URL as the instructor repository

   ```
   git remote set-url origin git@github.com:Birkbeck2/web-development-my-workshop-instructor.git
   ```

5. Set the template repo as the upstream

   ```
   git remote add upstream git@github.com:Birkbeck2/web-development-my-workshop.git
   ```

6. Check it worked:

   ```
   git remote -v
   # origin	git@github.com:Birkbeck2/web-development-accessibility-instructor.git (fetch)
   # origin	git@github.com:Birkbeck2/web-development-accessibility-instructor.git (push)
   # upstream	git@github.com:Birkbeck2/web-development-accessibility.git (fetch)
   # upstream	git@github.com:Birkbeck2/web-development-accessibility.git (push)
   ```

7. After you commit new things to the template, you can then fetch and
   merge them into your instructor repo.

   ```
   git fetch upstream
   git merge upstream/main
   ```
