![Birkbeck, University of London](images/birkbeck-logo.jpg)

Web Development and User Experience | Coding Session 1 | Joseph Muller

[All](README.md) | [Next](html-basics.md)

# Markup and why computers need it

![A text with colored lines and boxes drawn around it to mark pieces of it for bolding, highlighting, size increases, and indentation.](images/markup-lorem-ipsum.png)

In web development, we are in the business of making websites.

To make a website, you need to create instructions for how a computer should render media. This could happen in several different ways:
- :eyes: For users who can see, the computer visually displays text, pictures, videos, and other graphics
- :sound: For users who can hear, the computer plays audio, and it may read text out loud
- :point_up_2: For users who can manipulate things with their hands, the computer takes in signals from keyboard, mouse, touchscreen, or other device and in some cases provides tactile feedback 

To render things the right way, computers need to be able to read the files that make up a webpage and understand their various parts. Getting them to understand your design vision is the task of computer programming.

## Programming languages are formal languages
Computer programming has always been about finding the best way to give instructions to computers.

Since they were first built, computers have been very literal creatures. They do not understand things in the same way humans do.

Imagine trying to have a conversation with someone who looks up every word you use in the dictionary, every time you speak, and only understands you if you used the word in the way it's defined there.

That's what computer programming is like, and that is why we can't use English to tell computers what to do. Using natural language leaves far too much room for ambiguity that the computer usually can't handle.

So, while people speak *natural* languages, computers speak *formal* or *synthetic* languages. One set of these computer languages is called *markup languages*.

## What is markup?
Markup is the use of symbols or annotations to influence or control how a text will be interpreted or read.

When you want to study a book or article, you might decide to write notes in the margins summarizing the content so that you can come back later and find important concepts or passages.

Or if you're cooking and you have a printed recipe, you might decide you don't like one of the steps, so you add a note to yourself to do it differently.

Or if you are sending a text that says “No,” then you might change the tone by adding a period:

No.

Or a smile:

No :)

In web development, we use markup to annotate the words and images and videos that make up websites.

## Example
I've said that people understand language differently than computers. Let's tease out the difference with an example.

Take a look at [this document](https://codepen.io/joemull/pen/JjLVzaw). Can you read the text in the box called HTML? What kind of document is it? Do you find it easy or difficult to read?

It’s an article. What’s weird about it?

The formatting is messed up. Let’s try and make this more readable to us.

### Making it readable to humans
How can we make it more readable to us?

Add some spacing. Where do you want to add spaces?

Around the title. Around the byline and the date. Around some paragraphs (you’ll have to decide where the paragraph breaks are).

Now, with a few spaces, it becomes much easier for humans to read this article. Why is that?

For humans, the spaces are often enough to interpret which parts of the text are doing what. For example, we know that the title is the title once it’s on its own line because it reads like a title. We can understand the meaning of the words in the title, and they sum up the most significant thing the article is about, so our brains tell us “That’s the title.” We can use our human powers of interpretation and subjective judgment.

In the same way, when we see the string of numbers and letters that make up the date, we know it’s a date because we know what dates look like.

### Making it more readable to computers with HTML
If you pull in the CSS pane on the right, and the rendering pane on the bottom, you can see that the computer still doesn't see the parts of this text as distinct elements.

(Don't worry about the CSS code right now&mdash;just know that it gives some look and feel instructions to the browser.)

In most settings, computers need more than just white space to understand what's what. The line breaks help, but they don’t really spell out literally what each of the things on the page are. As literal beings, they need formal markup.

That’s where HTML comes in. HTML stands for “HyperText Markup Language.” It’s a formal language for marking the parts of documents so computers can parse them. Let’s add some HTML to the document to make it more readable to computers.

The basic element of HTML is the tag. Most tags are like bookends&mdash;they work in pairs to wrap a bit of text in an opening tag and a closing tag. Each tag has angle brackets to set it off. Closing tags have a forward slash as well.

The tag for heading level 1 opens with `<h1>` and closes with `</h1>`.

The tag for paragraphs opens with `<p>` and closes with `</p>`.

Let's try adding a heading 1 tag and some paragraph tags around the other elements. You can see that the computer now understands the parts of the text and is applying the styling code.

Don't like the way the result looks? Don't worry! We've only got very basic styling specified. Check out the [fully styled article on the *Guardian* website](https://www.theguardian.com/us-news/2022/jul/28/new-orleans-district-attorney-acquitted-tax-fraud).

As you can see, the look and feel is totally different, but underneath this webpage, everything is marked up with HTML.

And if you were interacting with this page with no vision, just with your ears, you would be able to use the keyboard to navigate between parts of the page, becuase they would be formally designated using HTML.

## Credits
Antonio Daniele created the precursor to this lecture for Birkbeck's MA in Digital Media Design in academic year 2021-22.

Jackie Cohen inspired the linguistics angle with her Python lectures at the University of Michigan in 2019.

Oliver Laughland, Ramon Antonio Vargas, “Jury acquits New Orleans’ progressive district attorney of tax fraud charges,” *The Guardian*, July 28, 2022, https://www.theguardian.com/us-news/2022/jul/28/new-orleans-district-attorney-acquitted-tax-fraud.

“Introduction to HTML,” Mozilla Developer Network, last modified September 9, 2022, https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML.

Elayne Petterson, “Are programming languages actually languages?,” LucidChart Techblog, December 21, 2021, https://www.lucidchart.com/techblog/2021/12/21/are-programming-languages-actually-languages/.

Gretchen McCulloch, “Coding is for Everyone--As Long as You Speak English,” Wired, April 8, 2019, https://www.wired.com/story/coding-is-for-everyoneas-long-as-you-speak-english/.

## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
