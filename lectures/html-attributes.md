# HTML attributes

![Four houses of different shapes and colors line a dock where a boat is anchored](images/colorful-houses.jpg)

_"COLORFUL HOUSE" by Hsuanya Tsai is licensed under [CC BY-NC 2.0](https://creativecommons.org/licenses/by-nc/2.0/?ref=openverse)._

You can see from the way HTML works that text is a primary concern. Most tags come in opening and closing pairs and expect to wrap some span of text.

But really, marking up text is only the most basic functionality of HTML.

What if you want to include images, videos, or audio? What if you want links, buttons, and interactivity?

HTML provides a basis for all these things as well, and the key to unlocking them is HTML *attributes*.

## An aside on variables in programming

To understand attributes, you need to know what variables are in programming.

The *variable* is a fundamental concept in computer programming. A variable is a unit that lets you give a name to a specific piece of data and refer to it by its name throughout your code, rather than typing out the data again every time.

Say you're making a website about birds, but you don't know what the eventual bird names will be, and you want to make it easy to add new bird names as you change your website.

Rather than writing the name of each bird every time you need it in your code, you code a variable called `bird_name`.

Then you give that variable the value of 'Stork' on your page about storks, and you define it as 'Heron' on your page about herons.

In both cases, you can just write `bird_name` in your code instead of writing the actual bird name. Variables give you flexibility and reduce busywork.

## How attributes work

In HTML, you can attach variables to each element that you put in your document. These variables give the browser more information about that element. They are called *attributes*.

For example, say you have content in multiple languages in your HTML:

```html
<p>Leaves are falling.</p>
<p>De bladeren vallen.</p>
```

When you read this, you can tell the first one is English and the second one is something else (it's Dutch), but the computer has no idea. When it reads the text out loud or tries to make search results for this page, it won't know what languages is being used so it won't know how to render the content.

With attributes, you can explicitly say what languages are being used. Here's how:

```html
<p lang="en-GB">Leaves are falling.</p>
<p lang="nl-NL">De bladeren vallen.</p>
```

## Syntax
We've seen some of this syntax before--opening and closing tags, each with a name surrounded by angle brackets, and a slash in the closing tag.

The new syntax for attributes involves an attribute name inside the opening tag, after the tag name

```html
lang
```

and an attribute value, wrapped in quotation marks

```html
"en-GB"
"nl-NL"
```

connected with an equals sign

```html
=
```

## Multiple attributes, multiple values
You can set multiple attributes for a single element. Separate them with a space:

```html
<p lang="en-GB" id="1" class="body-text">Leaves are falling.</p>
<p lang="nl-NL" id="2" class="body-text">De bladeren vallen.</p>
```

You can set multiple values for certain attributes, such as `class`, which has no restrictions on how you form the value and is used extensively in concert with CSS code:

```html
<p lang="en-GB" class="body-text slytherin original">Leaves are falling.</p>
<p lang="nl-NL" class="body-text slytherin translation">De bladeren vallen.</p>
```

## Restrictions on attribute names and values
With HTML, there are some limitations on the attribute values and names you can use:

1. You can only use attributes belonging to a prescribed set for each element.

    For example, you can set the `lang` attribute on a `p` element, but you cannot set the `onplay` attribute on a `p` element, becuase `onplay` is for giving instructions about what should happen when video and audio elements are played. It's not for text.

2. Sometimes there are limitations on the *value* to which you can set each attribute.

    For example, the `lang` attribute has to have a language code according to an [international standard called BCP 47](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang).

## Attribute inheritance
When you declare an attribute, it goes into effect for that element and its children, unless the variable is overwritten on a child element.

```html
<section lang="en-GB">
  <h2>Autumn</h2>
  <p>Leaves are falling.</p>
  <p lang="nl-NL">De bladeren vallen.</p>
</section>
```

In this case, the computer knows the `h1` and first `p` are in English, because they are children of the `section` where the language is declared. The attribute is *inherited* from the parent element.

But the computer also knows that the second `p` is in Dutch. It inherited an English-language attribute as a child of `section`, just like the other `p`, but then it got overwritten by the Dutch-language attribute.

## Check your understanding
1. Would this work?

    ```html
    <p>Les parisiens</p lang:Francais>
    ```

2. What language does the computer think the second `p` is in?

    ```html
    <p lang="en-GB">Leaves are falling.</p>
    <p>De bladeren vallen</p>
    ```

3. If I wanted to declare the entire language of an entire document, could I do it like this?

    ```html
    <!DOCTYPE html>
    <html lang="en-GB">
        <head>
            <title>Leaves</title>
        </head>
        <body>
            (other elements ... blah blah)
        </body>
    </html>
    ```

## References

“lang,” Mozilla Developer Network, last modified September 14, 2022, [https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang).

“The p element,” HTML: The Living Standard, Edition for Web Developers, last updated October 14, 2022, [https://html.spec.whatwg.org/dev/grouping-content.html#the-p-element](https://html.spec.whatwg.org/dev/grouping-content.html#the-p-element).

*HTML: The Living Standard: Edition for Web Developers,* last updated September 28, 2022, https://html.spec.whatwg.org/dev/.

## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
