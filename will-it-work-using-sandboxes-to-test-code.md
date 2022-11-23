![Birkbeck, University of London](images/birkbeck-logo.jpg)

Web Development and User Experience | Coding Session 5 | Joseph Muller

[Previous](workshop-2.md) | [All](README.md)

# Will It Work? Using Sandboxes to Test Code

When you get stuck, there are many ways to get unstuck. You can search online, review readings and lecture notes, ask a colleague, or sleep on it to see if fresh eyes will help you see the problem.

If the problem is whether something will work, you have one more tool. You can test it, like a scientist, in a controlled environment.

In web development, such environments are often called "sandboxes" because they are designed to be safe to play around in. By isolating one bit of code in a sandbox, you don't have to worry about a mistake in the sandbox affecting your other code, and you can also minimize the interference from other parts of your code on what you test.

## Setting up a sandbox template

Sandboxes need to be easy to create, because you don't want to lose time switching from the main project. If it's too difficult, you won't use them.

To make it easy for yourself, create a folder called `sandbox` inside or near your project folder, so that it is always ready to hand.

![A sandbox folder in my project folders in VS Code](images/sandbox-create-vs-code.png)

Inside the sandbox folder, create a folder named `template`.

Finally, inside the template folder, create the basic files that will give you most of what you need to test things.

For example, if you are testing CSS or JavaScript, make an empty `styles.css`, an empty `scripts.js`, an `images` folder with one or two small images, and an `index.html` file with some boilerplate text and anchor tags importing the images.

![A sandbox folder in VS Code with template files](images/sandbox-template-vs-code.png)

You can make your own, or you can use [my sandbox on GitHub](sandbox) and modify it to suit your needs.

## Running experiments

Once you have the template set up, it is trivial to switch into a new sandbox dedicated to a "Will it work?" question.

1. Formulate a hypothesis. What do you want to test? Narrow it down to just one thing per sandbox, so that you don't have interference between pieces of code.

2. Copy and paste the template folder and rename it with a keyword of the thing you want to test.

    ![Copying and renaming the template folder](images/sandbox-copy-vs-code.gif)

    Note: to turn off GIF autoplay on GitHub, adjust your Motion preference on the [Accessibility page](https://github.com/settings/accessibility).

3. Open up the relevant files in the new sandbox and conduct your experiment.

4. Observe the results. Was your hypothesis correct? If not, start again with step 1.

## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
