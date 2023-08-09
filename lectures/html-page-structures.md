![Birkbeck, University of London](images/birkbeck-logo.jpg)

Web Development and User Experience | Coding Sessions | Joseph Muller

[Previous](html-forms.md) | [All](README.md) | [Next](using-git-and-github.md)

# HTML page structures

HTML provides almost endless possibilities for formal variation.

But many webpages fall into recognizable categories that you can handle with similar HTML structure.

Here are four of the most common ones.

Want examples as you go through the types? As of this writing in 2022, the [Great British Bake Off](https://thegreatbritishbakeoff.co.uk/) had versions of each of these pages, though not all marked up exactly like this.

## Item page

For a page about one thing, like one creative work, one product, or one person, you can use a very simple structure.

```
                       img src="logo.png"
                      /
            header -- -- nav -- ul -- li x 3
           /
          /
         /                         h1
        /                         /
body -- ------ main -- article -- -- img
        \                         \
         \                         p
          \
           \
            footer --  -- ul class="links" -- li x 2
                       \
                        ul class="social" -- li x 2
```

This structure has just one main `article` element. Depending on the attributes of the work, product, or personal profile, you can adjust the elements used inside the `article` element as needed.

## List, gallery, or collection page

Often you will need a page that arrays many, similarly structured things, such as product search results, an activity feed, or an image gallery.

For these, you can use `article` if each thing in the collection is independent of its surroundings, and would have the same meaning if presented on another page.

```
                       img src="logo.png"
                      /
            header -- -- nav -- ul -- li x 3
           /
          /
         /
        /
body -- ------ main -- -- h1
       |               \                      h2
       |                \                    /
       |                 |-- article -- a -- -- img
       |                 |                   \
       |                 |                    p
       |                 |
       |                 |                    h2
       |                 |                   /
       |                 |-- article -- a -- -- img
       |                 |                   \
       |                 |                    p
       |                 |
       |                 |                    h2
       |                 |                   /
       |                 |-- article -- a -- -- img
       |                 |                   \
       |                 |                    p
       |                 |
       |                 |                    h2
       |                 |                   /
       |                 |-- article -- a -- -- img
       |                 |                   \
       |                 |                    p
       |                  \
       |                   \                  h2
       |                    \                /
       |                      article -- a -- -- img
       |                                     \
        \                                     p
         \
          footer -- -- ul class="links" -- li x 2
                    \
                     ul class="social" -- li x 2
```

As with the item page, the exact structure of each item will depend on its properties.

Finally, if you want the user to be able to click on an item to go to its item page, you can wrap the whole thing in an anchor tag.

## Form page

If you want to prompt user input, such as on a contact page where you ask for an email address and message, you can just place the form in the `main` element. Don't forget to add an h1.

```
                       img src="logo.png"
                      /
            header -- -- nav -- ul -- li x 3
           /
          /
         /                            section -- -- label
        /                           /           \
       |                h1         /             input
       |               /          /
body -- ------ main -- -- form -- -- section -- -- label
       |                          \             \
       |                           \             input
        \                            button
         \
          \
           footer --  -- ul class="links" -- li x 2
                      \
                       ul class="social" -- li x 2
```

## Landing page

Landing pages are often the first thing visitors see, yet they are often more complex.

Web designers want to make a good first impression and highlight important information from the outset, so they often try to include multiple, different elements on the home page.

This means you might have to come up with a custom structure for your home page.

The following home page is designed to have an advertisement or info banner in the first `section`, followed by a three-item spread showcasing highlights from a collection.

```
                     img src="logo.png"
                    /
          header -- -- nav -- ul -- li x 3
         /
        /
       |                             h1
       |                            /
       |                 section -- -- img
       |                /           \
       |               /             p x 2
body -- ------ main --
       |               \
       |                \
       |                 section -- -- h1
       |                           |                    h2
       |                           |                   /
       |                           |-- article -- a -- -- img
       |                           |                   \
       |                           |                    p
       |                           |
       |                           |                    h2
       |                           |                   /
       |                           |-- article -- a -- -- img
       |                           |                   \
       |                           |                    p
       |                            \
       |                             \                  h2
       |                              \                /
       |                                article -- a -- -- img
        \                                              \
         \                                              p
          footer --  -- ul class="links" -- li x 2
                     \
                      ul class="social" -- li x 2
```

As you can see, it's OK to use more than one `h1` heading if there are unrelated things on the page.

## Where are all the divs?

These examples are miraculously, almost unbelievably free of divs, in order to show just the semantic structure of the page.

In reality, you will likely need at least a few divs as wrappers for your semantic elements, for styling purposes.

But don't forget to keep things meaningful, even when you get div-happy! Having a clear understanding of page types as you lay out your website will help you maintain a clear structure using semantic elements.

## Check your understanding
1. You're making a website for a podcast. What page type do you use for each episode?
2. You're making a website for a restaurant. What page type do you use for a dinner menu?
3. What can you put in an `a` tag? Is there anything you can't put in it?
4. Can you have a page with an `h2` but no `h1`? How about a page with an `h1` and some `h4` elements, but no `h2` or `h3` elements?
5. Should your header and footer always be the same accross different pages?

<!--
1. item
2. list / gallery / collection
3. almost anything short of body, except interactive elements
4. not good practice, as heading levels should not have gaps
5. generally speaking, yes
-->

## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
