---

outline: [2, 4]

---

# Workshop: Accessibility in HTML and CSS

In this workshop, you will make a short interactive web page, and then you
will do accessibility testing on someone else’s web page.


## Setup

1. Create a GitHub repository with the link in Moodle.

   ::: tip
   Optional: Connect GitHub and VS Code if you can You can connect GitHub and VS Code by “cloning” the repository to your computer.

   “[Clone a repository locally](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git#_clone-a-repository-locally),” Visual Studio Code, last modified 29 Oct 2024.

   Matt McElreath, “[How to clone a GitHub repository with VS Code](https://youtu.be/Nl0J_tcnhQ4?feature=shared),” YouTube, 2m 18s, 29 May 2022.
   :::

2. Create an `index.html` page and publish it to GitHub Pages.

   Or, if you are already in VS Code, open the `index.html` page with the [Live Server extension](https://code.visualstudio.com/docs/getstarted/extensions). This way you can see your code side by side with the rendered page.

## Make a webpage

3. Please create a short webpage that shows a photo, asks the user a question about the photo, and lets the user give a response through form elements.

   Make the webpage as accessible as you can.

4. In addition to being accessible, the webpage must meet these requirements:

    - Includes a picture. Please choose a free-to-use photo from Unsplash or
      a similar site.

    - Does not have a white background. This is just so that you have to
    think a bit about color contrasts (tip: try the [contrast
    finder](https://app.contrast-finder.org/?lang=en)) rather than just
    leaving it black text on a white background.

    - Use at least one element for user input like `input`, `textarea`, or `select`.

    - Use at least one `button` element.

5. When you are done with the webpage, please publish it via GitHub Pages, and then find someone in the class who is willing to test it. Hopefully it will be someone who was not sitting next to you in the workshop.

   In order for the person to test it, they will need to be able to view the repository on GitHub, in addition to the Pages site. So let the instructor know who you want to share your site with, and they will share the repository with your reviewer. If you are doing the workshop remotely, send them an email.

   Or, if you are confident with GitHub, you can do this steps yourself by inviting them to review the pull request called “Feedback”.

   ::: info Steps
   [Managing teams and people with access to your
   repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)

   [Requesting a pull request
   review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)
   :::

## Test someone else’s webpage

6. Please do at least two types of testing on the webpage that you have been invited to review.

   ::: info Types of accessibility testing
   [Automated accessibility
   testing](https://web.dev/learn/accessibility/test-automated)

   [Manual accessibility testing](https://web.dev/learn/accessibility/test-manual)

   [Assistive Technology testing](https://web.dev/learn/accessibility/test-assistive-technology)
   :::

7. Write the results of your tests as comments on the pull request on GitHub. With each accessibility violation, be sure to give enough info that the webpage author can understand how you discovered the error and reproduce it for themselves.

   ::: warning
   Don’t go easy. Raise everything that you think might be an accessibility issue.
   :::

   ::: info Steps
   [Reviewing proposed changes in a pull
   request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request#about-reviewing-pull-requests)
   :::

## Requirements checklist

Here are the minimum requirements for credit when you turn this workshop in as homework.

- The repository is published to GH Pages and the `index.html` page loads at the GH Pages url
- Effort has been made to communicate the content of the photo to users who cannot see it
- The background is not white, and effort has been made to provide proper colour contrast
- Effort has been to help users navigating with the Tab key or another switch device
- Effort has been made to help the user perceive the question even if they cannot see the page
- Effort has been made to help the user answer the question even if they cannot see the page
- Two types of testing have been done on a classmate’s webpage
