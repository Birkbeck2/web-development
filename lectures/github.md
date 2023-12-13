# GitHub

![Contributions to Janeway, 2017-2023](./images/contributions-janeway-2017-2023.png)

GitHub is one of the most widely used Git hosting service providers in the
world. It was started in 2007 and purchased by Microsoft in 2018.

Alternatives include GitLab and Bitbucket. Or you can host your own Git server,
which some people do for security, privacy, or ideological reasons.

But a majority of professional developers currently use GitHub.

## Affordances of GitHub

1. **Visibility.** You can name, label, categorize, and share your work very
   easily. This includes through files like README.md and LICENSE.txt, but
   also extends to the social network aspects of GitHub, like forum threads,
   release announcements, notifications, and stars.

2. **Issue tracking.** Users and developers can file feature requests and bug
   reports, which can then be referenced in integrated task management
   features, as well as branch names and pull requests.

3. **Peer review workflow**. One of GitHub's most loved features is the cycle
   of pull requests, code reviews, and merge helpers. These elements are built
   on top of Git's built-in merging capabilities, but they add helpful features
   like comment threads where you can discuss things with team members.

4. **Advanced configuration**. There are nearly endless configuration options
   in GitHub, such as automated testing, build actions, and static site hosting.

## Peer review workflow

This is the most common workflow for collaborative work on GitHub.

1. Contributor pushes a new branch, either in the main repository or a fork.

2. Contributor opens a pull request, and invites reviews from owners or
   maintainers.

3. Reviewers request changes or approve the branch.

4. Contributor makes requested changes, if any.

5. Contributor resolves any merge conflicts, if any.

6. Reviewer merges the feature branch into the main branch and closes the pull
   request.

## GitHub Pages

GitHub Pages is a **static site hosting service**.

It lets you publish static websites with HTML, CSS, and client-side JavaScript.
It's free if the repository is public or you are part of an educational
institution like Birkbeck.

Pages can be configured within your repository settings. You can 

1. Publish from a particular Git branch, like `main`.

2. Write GitHub actions using YAML markup if you need to run an installation or
build step with server-side JavaScript.

Domains are automatically provided, or you can connect a custom domain.

If you need to store secret keys that help your website run, like API keys, you
can do so in GitHub Pages. This is helpful because secrets should not generally
be committed to a shared
Git repository.

Want to see a GitHub pages site in action? You're looking at one! This
website was built using GitHub actions from code in a [public GitHub
repo](https://github.com/Birkbeck2/web-development).
