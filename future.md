### URL fragments

Recall [we said URLs have scheme, a host, and a path](how-the-internet-works.md).

There is another part that we need to know about, the *fragment*. It fits in like this:

```
https://en.wikipedia.org/wiki/Leaf#Morphology
\___/   \______________/ \_______/ \________/
  |            |             |          |
scheme       host           path     fragment
```

Fragments point *within* a document to a particular part. For this to work, they need to have some kind of target explicitly encoded.

If you set the `id` attribute on an element, that element will be accessible through a URL fragment. This is the most common way to make something available as a target.

```html
<h2 id="Morphology">Morphology</h2>
```

Browsers typically handle fragments by jumping the viewport to the part of the page referenced. So if you go the URL above, it will scroll you down to the Morphology section of the article.
