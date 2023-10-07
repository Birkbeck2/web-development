![Birkbeck, University of London](../../lectures/images/birkbeck-logo.jpg)

Web Development and User Experience | Coding Sessions | Joseph Muller

# Coding workshop 1: Basic HTML

## About workshops

Coding is a skill in addition to being a knowledge base. For that reason, you have to practice it regularly to gain proficiency.

The coding workshops are a chance to practice the new pieces of HTML, CSS, or JS you learned that day in class, with the support of teachers and peers nearby.

When you finish a workshop, you may be required to submit your work as a homework, though not every week. Follow instructions on Moodle for submission.

## Set up your code editor and environment

1. Install or re-install your favorite code editor on your computer. We recommend VS Code.

2. Create a workshop folder where you can keep your workshop files for this module. Not sure where to put it? You can put it on your Desktop for now. The file path might look something like this:

    `\C:\Users\username\coding\basic-html-workshop\`

    Bonus: you may be able to open this folder in your code editor so that it displays in the side bar, even before you put any files in it. This will allow you to work without the file explorer, for the most part.

3. Open up your internet browser and arrange it so that you can see it alongside your code editor (and file explorer if needed).

## Mark up a document with HTML

4. Using your code editor, make a new file named “hierarchy-of-road-users.html” and save it in your workshop folder.

5. Copy the text from “Hierarchy of road users” below and paste it into your new file.

   Hint: This text currently is unformatted, without any line breaks. Once you get it into your code editor, start by going through to put some line breaks in it at the right places.

   ```
   Hierarchy of road users The ‘hierarchy of road users’ is a concept that places those road users most at risk in the event of a collision at the top of the hierarchy. The hierarchy does not remove the need for everyone to behave responsibly. The road users most likely to be injured in the event of a collision are pedestrians, cyclists, horse riders and motorcyclists, with children, older adults and disabled people being more at risk. The following H rules clarify this concept. Rule H1 It is important that ALL road users are aware of The Highway Code, are considerate to other road users and understand their responsibility for the safety of others. Everyone suffers when road collisions occur, whether they are physically injured or not. But those in charge of vehicles that can cause the greatest harm in the event of a collision bear the greatest responsibility to take care and reduce the danger they pose to others. This principle applies most strongly to drivers of large goods and passenger vehicles, vans/minibuses, cars/taxis and motorcycles. Cyclists, horse riders and drivers of horse-drawn vehicles likewise have a responsibility to reduce danger to pedestrians. None of this detracts from the responsibility of ALL road users, including pedestrians, cyclists and horse riders, to have regard for their own and other road users’ safety. Always remember that the people you encounter may have impaired sight, hearing or mobility and that this may not be obvious.
   ```

6. Using your knowledge of HTML tags, elements, nesting, and page structure, mark up this excerpt from *The Highway Code*.

## Check and debug the HTML

7. When you are ready to check your work, open the file in your web browser. You can do this with your file explorer, your code editor, or your browser (by typing `file:///` and then the exact path in the URL bar). Explore different ways to find the easiest for you.

8. Check the visual appearance of the page, or use your screen reader to listen to the result and navigate around it. Does it look or sound right? Did the browser understand what you wanted it to do with the text? Note that some things will be different, like the text color and font, and that's OK.

    ![Hierarchy of road users (print version)](../../lectures/images/hierarchy-of-road-users.jpg)

    *Crown copyright 2022*

9. If anything isn't quite right, debug the HTML by trying to identify the source of the problem. Open the developer tools to inspect the HTML. Did the browser change your markup when it interpreted it? Is something missing? Why did the computer think what it thought when it read your document?

10. Fix any issues by changing the HTML file in the code editor, saving the file, and refreshing the browser. Do you see your changes take effect?

## Mark up another document
11. Repeat steps 4-11 with another document, “Storing your fruit and veg.” Name the file `fruit-and-veg.html`.

    ```
    Storing your fruit and veg Organic fruit and vegetables haven't been chemically treated and so need to be stored correctly to help get the best life from it and avoid food waste. Potatoes and other root veg - the most important thing to remember when storing potatoes, carrots, parsnips, etc., is to keep them cool and dark. Ideally you should never wash your veg before storing: the soil acts as a natural preservative and washing them will cause them to go off quicker. Keep them wrapped in brown paper and keep in somewhere like a cool, dark cupboard or bottom of your fridge. If stored correctly your spuds will last many months, and if they begin to sprout, they are still edible, just knock the eyes off! Beetroot keeps best in the fridge, keeping them solid for longer. Leafy greens should be kept in the fridge. Wrapping in plastic will help to keep them succulent and fresh. Onions - these keep easily. Cool, dry and airy will do the trick. Squash - keep at room temperature with air to breathe; too much moisture may cause them to go off. If you do notice mould occurring, cut it off and the remaining squash will still be good to eat. Avocados and mangos - store at room temperatrue and do not squeeze the flesh as this will cause the fruit to become bruised and rot. Oranges, lemons, grapefruit, and apples are unwaxed and should be fine in a cool room for at least a week. In a hot room they could go off very quickly. Apples kept cool and dark will keep much longer. Kiwis are usually unripe and will ripen slowly in a warm (16°) room. You can feel when they are starting to get soft and they are usually at their best; this could take several weeks depending on the condition they arrive in. Bananas have to be harvested green for their 7-10 day boat trip. On arrival in UK they go into special ripening stores where they are held at 14°C. Usually they come to us ready ripened with just a hint of green, which allows a few days for consumer use. Sometimes due to problems of supply shortages they may not have been fully ripened before they arrive with us so we have to send them out green. They will ripen providing you: Wrap in plastic Place in a dark place Keep at 14°C They will ripen within a week or so. At cooler temperatures they will slowly ripen but lose flavour and become woody. Skin colour is not necessarily an indication of ripeness. The very richest flavour will be attained if the skin has dark brown spots (like freckles) all over.
    ```

    Does it look similar to this? It probably won't, and that's OK. You don't need to make the two columns or put pictures in.

    ![Storing your fruit and veg (print version)](../../lectures/images/storing-your-fruit-and-veg.jpg)

    *Copyright OrganicLea 2022*

## Do some peer review
12. Get in a group of two or three with other students. Take turns sharing your documents about road users or storing vegetables. Questions for discussion:

    - What did you find easy? What did you find hard? Why?
    - What are the similarities or differences in the way you marked up the document?
    - Give some feedback to each other. Here are some feedback templates:
        - “I like...”
        - “I wish...”
        - “What if...?”

## Inspect three kinds of websites
13. Go to a website of your choosing in a new tab. Here are some kinds of websites to jog your memory:

    - news
    - shopping
    - social media
    - search engine
    - informational (e.g. Wikipedia)
    - organizational (e.g. Birkbeck, University of London or Doctors Without Borders)

14. Choose a part of the page to inspect and find the precise code behind that part of the page in the developer tools inspector pane.

15. Using the inspector pane, try to change something about that part of the page. You can add or remove text, add elements, move elements around, etc.

16. Look around the page to identify a new element of HTML that you haven't seen before. Can you understand what it's doing, or why it's there?

    Hint: look in the `body`, not the `head`, since body elements are often easier to understand.

17. Repeat steps 13-16 for two other kinds of websites.

## Mark up a tricky document (optional, if time)
18. Repeat steps 4-11 with another document, a usage dictionary entry for “impatient.”

    ```
    impatient When used with a preposition, impatient is most often followed by of: His sisters . . . were quite as impatient of his advice, quite as unyielding to his representation —Jane Austen, Mansfield Park, 1814 He was always impatient of delay —Edmund Wilson, A Piece of My Mind, 1956 Less frequently, impatient is used with for, to, or with, and occasionally with at: ... a Cadillac cowboy impatient for his father’s death —Current Biography, September 1964 Winterbourne was impatient to see her again —Henry James, Daisy Miller, 1879 ... had always been impatient with doctrines and systems —William H. Whyte, Jr. The Organization Man, 1956 ... impatient at Benson’s presence —George Meredith, The Ordeal of Richard Feverel, 1859
    ```

    Does it look similar to this?

    ![Usage dictionary entry on the word impatient with discussion about grammar and examples](../../lectures/images/impatient.jpg)

    *Copyright Merriam-Webster, 1994*

## Teach yourself something new (if time)
19. Modify one of the HTML documents you've marked up with a new element of your choosing, adding fake or made-up text if you need. You could try to use one of the new elements you found on the websites you inspected above. Or you could choose a new element. In either case, you can use [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) to learn about new elements.

    OR, if (and only if) you already know something about CSS, try to fix one of the styling things in our workshop documents you noticed you couldn't reproduce with HTML alone.

## Homework submission

You can submit this workshop as one of your marked homeworks. To submit it, follow instructions on Moodle.

## Credits

The documents referenced in this workshop are partially reproduced in this repository for [teaching purposes only](https://www.gov.uk/guidance/exceptions-to-copyright).

“Hierarchy of road users,” in *The Official Highway Code*, 17th ed. (Driver and Vehicle Standards Agency for the Department for Transport, 2022), 5. Crown copyright 2022, licensed under the terms of the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).

“Storing your fruit and veg,” in *Welcome to OrganicLea’s box scheme: Fresh, local, organic fruit and veg in Waltham Forest* (OrganicLea).

“impatient” in *Merriam-Webster’s Dictionary of English Usage* (Springfield, MA: Merriam-Webster, 1994).

## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
