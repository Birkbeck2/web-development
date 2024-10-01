---

outline: [2, 4]

---

# Workshop: Reading and Writing Markdown

![Markdown logo](../../lectures/images/markdown-mark.svg)
Dustin Curtis, CC0, via Wikimedia Commons

## Part 1: Practical

In this part of the workshop, you will publish a website using Markdown
and GitHub.

Time estimate: 30 minutes

### Getting set up

1. Create an [account on GitHub](https://github.com/signup) and log in. Note that your
   Birkbeck email address must be tied to the GitHub account, either as the
   main email associated with the account or as a secondary one.

2. Create a GitHub repository that is associated with [Birkbeck2 organization on
   GitHub](https://github.com/Birkbeck2). To do this, you need to go to
   Moodle and find today’s tile. Click on the special link there that says
   **Create GitHub Repository**.

### Creating your content

3. Create a file in your new repository called `index.md`. Write some text
   and structure it with Markdown. You can include a heading and a few
   lines of text. Use the **Preview** tab to check the output. Also
   include an image. You can use one of your own, or one of Joe’s cats:

   ![Matilda](../../lectures/images/matilda.avif)
   Matilda

   ![Iggy](../../lectures/images/iggy.avif)
   Iggy

   ::: tip
   To include the image, upload it separately (try a new browser tab
   if you have unsaved edits in the text file), and then type out the filename in the
   parenthetical Markdown reference.
   :::

   ::: info
   GitHub also lets you drag and drop the image into
   the text editor, which creates a `user-attachments` link. But user
   attachments can’t be updated or edited manually and don’t belong to the version
   control of the repository, so it’s best to avoid relying on them when
   working in repositories.
   :::

4. When saving (a.k.a. “committing”), there are a few special details. When
   GitHub asks you for a commit message, this is a note to your future self, as
   part of [Git](https://en.wikipedia.org/wiki/Git)’s
   version control features. When it asks about branches, you can just choose
   the `main` branch.

### Publishing and making fixes

5. Publish the repository as a website with GitHub Pages. The publishing
   source should be the `main` branch. Leave the site’s visibility as
   **Private** for now.

   ::: info
   Not sure how? Here are resources for this step:

   - [Configuring a publishing source for your GitHub Pages
     site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch),
     GitHub Pages, GitHub Docs.

   - [Host your website on github for free in just
      2 minutes](https://youtu.be/BT4WzyT2g8k), 2m 22s, Akriti Goswami,
      YouTube, 2023
   :::

6. Check out your website. Is everything displaying as intended? If not, go back
   and make changes with more commits.

### Sharing and commenting

7. Give the rest of the class access to your website. To do this, you want to give the team called
   [Canary](https://github.com/orgs/Birkbeck2/teams/canary) access to it.
   You can give them the role of **Write**.

   ::: info
   How? Resources for this step: 

   - [Inviting a team or a
     person](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person),
     Managing teams and people with access to your repository, GitHub Docs.
   :::

8. Share your website in **Discussions**, under **Show and
   tell**, in this year’s private repository on GitHub. Every year we create
   a new private repository for that year’s cohort, to share projects,
   collaborate, get feedback, do peer review, and have asynchronous discussions of module topics.
   We name each one after bird :bird: to make it memorable:

   * 2024-25: [Canary](https://github.com/Birkbeck2/canary)

   You should have been added to the canary repository by your instructor while you were working
   on your website, but in case not, ask them to add you.

   ::: tip
   You can and should use Markdown in the discussion boards!
   :::

   ::: info
   Optional challenge: Inspect your website in your web browser’s
   developer tools to see how GitHub transformed the Markdown into HTML.
   Take a screenshot of the HTML and share it in **Discussions**.
   :::

9. Check out others’ websites. Comment on them, ask questions, compare their
   code to yours. Does anything surprise you? Are you confused by anything?

## Part 2: Critical/Creative

Time estimate: 20 minutes

This part of the workshop is optional. It usually has you go further with part
1 to expand it as you wish, or enter into critical discussion of choices
made in the practical part.

For this creative part, there are two options:

Option A: Practice your Markdown writing skills by adding more content to
your website. Post a bit of explanation in **Show and tell** describing
what you did to make sure others notice it.

Option B: Write a new post of 1-2 paragraphs in **Discuss and critique**
with some thoughts about GitHub as a platform, drawing in the readings
where you can. Here are possible questions to answer: How did you find the
user experience? What do you think are the social effects of how it is
designed? What are the reasons that Microsoft runs the platform and that
most developers users it to store their code?
