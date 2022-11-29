![Birkbeck, University of London](images/birkbeck-logo.jpg)

Web Development and User Experience | Coding Sessions | Joseph Muller

[Previous](using-git-and-github.md) | [All](README.md)

# Coding workshop 7

In this workshop we'd like you to get some practice with basic Git and GitHub operations, make a simple contact form, and then use the rest of the time working on your assessment website.

## Practice creating a new Git repository
First we'd like you to practice creating a Git repository and publishing it to GitHub. Only you will be able to see this repository.

If your computer doesn't have Git, try installing it. If you can't install Git (working on a lab computer), skip this part, work outside Git for the rest of the workshop, and try this later on a computer you can install Git on.

If you get stuck on any of these steps, refer to the video [“Using Git with Visual Studio Code”](https://code.visualstudio.com/docs/sourcecontrol/overview).

1. Most developers have a folder on their computer where they keep all their Git repositories. Do you already have such a folder? If not, make one. You can call it `repos` or `git` or another name that makes sense to you.

2. Inside this folder, create a new folder called `my_test_repo`.

3. Open VS Code or your preferred text editor, and open the `my_test_repo` folder.

4. Create a new file named `README.md`, type a message like "Hello world" in the file, and save it.

5. Using the source control tab in VS Code (or your editor's equivalent), initialize the folder as a repository.

6. Make sure you're working on branch named "main". If you're not, create a new branch called "main". (The old convention was "master", but that name had unwanted connotations.)

7. Stage the README file, enter a commit message like "First commit", and commit the file.

8. Push the repository to a private repository on GitHub with "Publish Branch." If VS Code says "Make sure you configure your 'user.name' and 'user.email' in git", follow these steps:
    1. Select **Open Git Log**.
    2. Select the **Terminal** tab of the console pane that opens at the bottom of VS Code.
    3. Paste `git config --global user.name "FIRST_NAME LAST_NAME"` into the command line, edit it so that it has your first and last names between the quotation marks, and press enter.
    4. Do the same thing with `git config --global user.email "MY_NAME@example.com"`, putting in you Birkbeck email address in the quotation marks.
    5. Close the console pane, and try pushing again.

  You may be prompted to sign in to GitHub, or you may need to select GitHub from a set of options and then sign in.
  
  You may also be prompted to update VS Code if you're working on a lab computer. Go ahead and do so if it lets you.

9. Open the repository on github.com and see if it looks the way it should. GitHub automatically displays the contents of any file called "README.md" on the repository landing page.

## Practice cloning an existing repository

If you can't get Git installed, skip this section too.

In the next part of the workshop, you'll be asked to make a contact form. There is an (optional) assignment on GitHub for submitting your code for this. If you can, it's best to work in the repository, on your computer. So, let's get it pulled down to your computer. This will give you useful practice pulling down (a.k.a. “cloning”) repositories that already exist and modifying them before pushing them back up to GitHub.

10. Go to Moodle and click on the Github assignment link for submitting the contact form under Coding Workshop 7.

11. When you get to GitHub, click the link to create a repository for this assignment, and then go to the repository once created.

12. On the page for your new repository on GitHub, it should show some setup instructions including a link at the top ending in `.git`. Copy this link.

13. Open a new window in VS Code. Close out of any open project folder. Go to source control, and select "Clone Repository". Paste in the link you copied, and press Enter.

15. When prompted to select the repository location, select the folder you made for Git repositories (e.g. `repos`), and continue.

16. Open the repository in VS Code.

## Make a contact form

In this section you'll be making a contact form in HTML.

17. Working in the repository you cloned (if using Git), make a contact form with fields for first name, last name, email address, and message.

18. Try styling the form, paying extra attention to the way the fields and buttons look.

19. Without a working URL in the form's `action`, it's difficult to test your form. Instead of testing it manually, upload it to the [Nu HTML checker](https://validator.w3.org/nu/) to validate the HTML.

20. When you are done, if you are using Git, stage and commit the files to the repository history, push the commits to GitHub, and submit the assignment. Again, this is optional, but it's good practice for the assessment workflow.

## Work on your website

21. With your remaining time, work on your assessment website, picking up whatever part of it you need to tackle next. This might take the form of any of the following: 1) cloning the assignment repository and making commits of code you have so far, 2) outlining the HTML structure you will use for each page in your website 3) creating header or footer elements, or 4) working on one of the pages.

## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
