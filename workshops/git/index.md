# Workshop on Git and GitHub

In this workshop, you will work with a partner to create a Git repository with
a history, including pulling, branching, adding, committing, pushing, pull requests,
code reviews, and merges.

## Form a team

1. Find a partner. You need a partner for this workshop because Git and GitHub
   require as much teamwork and communication as command line skills.

   Can't find a partner? Let Joe know, well in advance of the
   homework due date.

## Configure Git and GitHub

2. Make sure you have [Git
   installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
   If you're using a classroom computer, it should already be installed.

3. Set your Git user name and email in your global [Git
   config](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).

   ::: info NOTE
   This email must also be tied to your GitHub account.
   :::

4. Test your setup. When you enter `git config user.name` in the terminal, does
   it return your name? Does `git config user.email` return your email?

5. Create an [account on GitHub](https://github.com/signup). There are a few
   requirements for the email address you use:

    - Your Birkbeck email address must be tied to the GitHub account, either as
      the main email associated with the account or as a secondary one.

    - The email you set in your local Git config must match one of the emails
      on your GitHub account. 
 
6. Set up SSH authentication between your computer and GitHub. This involves
   following a step-by-step guide in three parts, and it's a good chance to
   practice your command line skills. The parts are:

    1. [Checking for existing SSH
       keys on your computer](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)

    2. [Generating a new SSH
       key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

    3. [Add the key to your GitHub
       account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

## Create a workshop repository

7. With your other team member, decide who will be coder A and who will be coder B.
   Then follow the rest of the steps in order, only doing your part.

8. Coder A: Create a new repository on GitHub, with a name of your choosing,
   maybe "git-workshop." Check the GitHub documentation if you're not sure how
   to do this.

    - Make the repository private

    - Tick the "Add a README file" box

9. Coder A: Invite Coder B to be an admin on the repository. Check GitHub docs for
   instructions if you can't find the option quickly.

10. Coder B: Accept the invitation from Coder A to be an admin on the repository.

## Clone the repository

11. Everybody: Clone the repository with SSH. Make sure you can both clone it
    with SSH before moving on. Try running `ls -a`, `git status` and `git log`
    to check everything looks as you expect.

::: warning
Make sure the folder to which you clone the repository is not synced using
a cloud syncing service like Google Drive or Microsoft OneDrive. If it is, the
two types of syncing will fight with each other.
:::

::: tip
Use your knowledge of well-formed paths to make sure there are no spaces or
special characters in the absolute path where your repository is cloned. This
will make it easier to work with your repository on command line.
:::

::: info NOTE
If you cloned it with HTTPS, you will have to [manually set the remote URL to the SSH version](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
:::

## Each coder creates a branch and adds a page

::: warning IMPORTANT
Coder A should do steps 12-25, THEN Coder B. While you are waiting, watch and
help if your partner gets stuck.
:::

### Creating a new branch

12. Make sure you are on the main branch.

13. Fetch and/or pull to make sure you have the latest version of main.

14. Create a branch called "page-a" or "page-b", depending on
    who you are.

15. Switch to the new branch.

### Creating a file

16. Make a new file called "a.html" or "b.html", and add some markup so it's
    valid HTML. Title it "YOUR NAME's webpage".

17. Use Git to add and commit your file to the local repository.

### Writing your email address in the file

18. Add a sentence in the body with a link to the email address you put in
    your Git config. By the way, email addresses are marked up with `mailto:`
    as a prefix of the `href` value, like this: `<a href="mailto:EMAIL">email
    me</a>"`. [More on email
    links](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#email_links).

19. Add and commit your changes in a second commit.

20. Check the commit log to make sure you have at least two commits on the
    branch. If you don't have two commits, change something small and add
    another commit.

### Pushing

21. Push the branch to GitHub. If you run into authentication issues, ask Joe
    for help.

### Doing code review and merging on GitHub

22. On GitHub, find your new branch and open a pull request for it. Add your
    team member as a reviewer.

23. If GitHub identifies merge conflicts, [resolve the merge
    conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts).

24. The other coder: Find the code review and approve the pull request.

25. The author of the branch: Once the pull request is approved by your
    team member, merge the pull request.

## Modify each other's pages.

::: warning IMPORTANT
Coder A should do step 24, THEN Coder B.
:::

26. Using the same workflow (branching, committing, pushing, pull
    requests, code reviews, and merging), modify your partner's HTML page and
    get them to approve the changes.

    - What should the branch be called? Something that makes sense, maybe
      "page-a-changes" or "page-b-changes".

    - How should you modify it? Anything. Could be "This line added by NAME."

    - How many commits are required? Just one is fine.

## Check the commit history

27. Switch to main and pull. Are all the commits there that you expect to be?
    If not, check the other branches. Is there something unmerged? Troubleshoot
    as best you can.

## If time: Set up your website assessment on GitHub Pages

You now know enough about Git and GitHub to set up the website for your
final project. So, if you have time, go ahead and set up your repository and
publish a placeholder homepage on GitHub Pages.

::: info
You will be able to change the published version later simply by committing or
merging to your main branch: GitHub will detect the changes and update the live
site.
:::

28. Create a GitHub repository **using the website submission link in the
    assessment info page on Moodle**.

29. Clone your repository and add an index.html with "Hello, World!" in
    the body.

30. In the repository settings, find the tab for GitHub Pages. Choose a branch
    to deploy from, and wait for the site to be deployed. Visit the link
    provided to make sure it's live.

31. Add the link to your deployed website into a new line in your "a.html"
    or "b.html" page.

::: tip CONGRATS
You now know how to use Git and GitHub!
:::
