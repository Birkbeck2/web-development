![Birkbeck, University of London](images/birkbeck-logo.jpg)

Web Development and User Experience | Coding Session 2 | Joseph Muller

[Previous](behind-the-scenes-html.md) | [All](README.md) | [Next](workshop-2.md)

# Meaning and presentation in HTML
- finding meaning in HTML history
- enriching HTML with meaning
- p vs br, div vs everything, i vs em, b vs strong, hr
- div and span
- div vs everything
- block and in-line

## Lists
Lists are a quite safely semantic element, describing relationships and hierarchies between items.



## Tables
You can mark up tables of data in HTML with a set of nested elements:

| Tag (“My name is...”) | Meaning (“I contain...”) |
| --------------------- | ------------------------ |
`table` | a table
`tr` | a table row
`th` | a table header (a top-row cell)
`td` | a table datum (a cell)
`thead` | a table datum (a cell)
`tbody` | a table datum (a cell)
`tfoot` | a table datum (a cell)

Because early HTML lacked proper support for CSS, tables were used for presentational rather than semantic means.

This is discouraged now. You should only use tables for tabular data arranged in rows and columns:

```html
<table class="wikitable sortable centre jquery-tablesorter">
    <thead>
        <tr>
            <th>Image</th>
            <th>Term</th>
            <th>Latin</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <img
                    alt="Leaf morphology entire.png"
                    src="64px-Leaf_morphology_entire.png"
                    width="64"
                    height="38"
                >
            </td>
            <td><span class="anchor" id="Entire"></span>Entire</td>
            <td><i>Forma</i><br><i>integra</i></td>
            <td>Even; with a smooth margin; without toothing</td>
        </tr>
        <tr>
            <td>
                <img
                    alt="Leaf morphology ciliate.png"
                    src="64px-Leaf_morphology_ciliate.png"
                    width="64"
                    height="38"
                >
            </td>
            <td><span class="anchor" id="Ciliate"></span>Ciliate</td>
            <td><i>Ciliata</i></td>
            <td>Fringed with hairs</td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>
```

This renders visually:

![The above HTML table rendered by the browser on Wikipedia](leaf-table.png)

*This table is from [“Leaf”](https://en.wikipedia.org/wiki/Leaf) on Wikipedia, which is licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse)*

Things to notice about tables:

1. The `thead`, `tbody`, and `tfoot` elements are optional.
2. It is time-consuming to manually code tables in HTML!
3. Tables can be difficult to create for mobile screens, because horizontal scrolling is discouraged.
