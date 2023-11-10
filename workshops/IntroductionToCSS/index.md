# Workshop: Introduction to CSS

## Style an HTML page:

1)	Add a link to a stylesheet file in the head of the ufo-Utsuro-bune.html file. You can name the stylesheet anything you want, but often it is called styles.css. This CSS file will be your external stylesheet. Make sure your stylesheet file is in the correct location in your folder system for your html file to correctly link to it.
2)	Look at the original article called “Unidentified Floating Object: Edo Images of Utsuro-bune”: https://publicdomainreview.org/collection/utsuro-bune/
and add CSS rules to your own stylesheet to make your html page look like the original in the following way:
  -	Make the header image page width (approx., or the widest image on the page)
  -	Centre all images and text
  -	Replace the style=”font-style: italic;” in all the <span> tags with a class for italic style fonts instead.
  -	Make the heading text, blockquote text and main body text a serif font (you don’t have to use exactly the same font as in the original page)
  -	Make the caption text a sans-serif font (you don’t have to use exactly the same font as in the original page)
  -	Add an appropriate hover state to all the links (it does not have to be the same as on the original page)
3)	Now let’s add a table. Goto https://en.wikipedia.org/wiki/List_of_reported_UFO_sightings and use only data from 19th Century UFO sightings to create a table underneath the last image and caption on the page. Let’s use this table and style it with a few more CSS Selectors:
  -	Make the first row of table headings (Date, Name, Location, Description) a bigger font size compared to the rest of paragraphs.
  -	Make the other text a specific color using an element selector.
  -	Make dates and the date table header label right aligned.
  -	Use an id selector to make the table cell with the description of the utsuro-bune have a different background-color.
4)	Internal CSS. First let’s put some CSS in a ```<style>``` element inside the head. This is called internal CSS:
  -	Using the text-decoration property, underline the heading of the article.
  -	Now change the heading to a different web safe font, including the appropriate fallback fonts in case a user doesn’t have the preferred font.
5)	Inline CSS. If you want to only style one part of a paragraph instead of all of it, use the ```<span>``` tag. Do the following using only inline CSS:
  -	Give the blockquote a different background color (make sure the text is readable against the new background color).
  -	Change the width and height of the first paragraph of text to 50px. Notice what happens when the amount of text is too much for its container. Then change the width and height of the article to a suitable amount so that all the text is visible. Try using different units for the widths and heights and see what happens (px, em, %, auto).
  -	Apply text-transform to the first paragraph to see what it does. Try out all three transforms on the first paragraph: lowercase, uppercase, capitalize; sticking with the text-transform you prefer from a design point of view.
  -	Try out different text spacing properties and values to the first paragraph to see what they do.
  -	Give your article heading a text-shadow in a color other than black.
6)	CSS box model:
  -	Using concepts learnt from the CSS Box Model (margin, padding, border) style the blockquote to create a design you like.
  -	Add color to the margin, padding or border of the images of the page to help create an interesting page design.


