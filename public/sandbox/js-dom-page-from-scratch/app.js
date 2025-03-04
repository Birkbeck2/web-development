let app = document.getElementById('app');

let pageContainer = document.createElement('div');
pageContainer.classList.add('page-container');
app.appendChild(pageContainer);

let pageHeading = document.createElement('div');
pageHeading.classList.add('page-heading');
pageContainer.appendChild(pageHeading);

let h1 = document.createElement('h1');
h1.innerText = 'Storing your fruit and veg';
pageHeading.appendChild(h1);

let imageWrapper = document.createElement('flex');
imageWrapper.classList.add('flex');
imageWrapper.classList.add('flex-wrap');
imageWrapper.classList.add('gap-1');
imageWrapper.classList.add('direction-row-large');
imageWrapper.classList.add('direction-column-small');
pageContainer.appendChild(imageWrapper);

let images = [
  {
    width: 267,
    height: 200,
    alt: "Bunches of small tomatoes, purple radishes and deep green cucumbers",
    src: "./images/andres-carreno-RqS7r2CzL68-unsplash.webp"
  },
  {
    width: 300,
    height: 200,
    alt: "A large turnip, two carrots and a squash on a wooden board",
    src: "./images/nguyen-dang-hoang-nhu-aQn3k4tZ12A-unsplash.webp"
  },
  {
    width: 300,
    height: 200,
    alt: "A small garden box planter with some leafy greens",
    src: "./images/sigmund-hlC6OwRSQFs-unsplash.webp"
  },
]

for (let image of images) {
  let img = document.createElement('img');
  for (let attribute in image) {
    img.setAttribute(attribute, image[attribute]);
  }
  imageWrapper.appendChild(img);
}

let proseContainer = document.createElement('div');
proseContainer.classList.add('prose');
pageContainer.appendChild(proseContainer);

let prose = `
<p>Organic fruit and vegetables haven't been chemically treated and so need
to be stored correctly to help get the best life from it and avoid food
waste.</p>
<p><strong>Potatoes and other root veg</strong> - the most important thing
to remember when storing potatoes, carrots, parsnips, etc., is to keep them
cool and dark. Ideally you should never wash your veg before storing: the
soil acts as a natural preservative and washing them will cause them to go
off quicker. Keep them wrapped in brown paper and keep in somewhere like a
cool, dark cupboard or bottom of your fridge. If stored correctly your spuds
will last many months, and if they begin to sprout, they are still edible,
just knock the eyes off!</p>
<p><strong>Beetroot</strong> keeps best in the fridge, keeping them solid
for longer.</p>
<p><strong>Leafy greens</strong> should be kept in the fridge. Wrapping in
plastic will help to keep them succulent and fresh.</p>
<p><strong>Onions</strong> - these keep easily. Cool, dry and airy will do
the trick.</p>
<p><strong>Squash</strong> - keep at room temperature with air to breathe;
too much moisture may cause them to go off. If you do notice mould
occurring, cut it off and the remaining squash will still be good to
eat.</p>
<p><strong>Avocados and mangos</strong> - store at room temperatrue and do
not squeeze the flesh as this will cause the fruit to become bruised and
rot.</p>
<p><strong>Oranges, lemons, grapefruit, and apples</strong> are unwaxed and
should be fine in a cool room for at least a week. In a hot room they could
go off very quickly.</p>
<p><strong>Apples</strong> kept cool and dark will keep much longer.</p>
<p><strong>Kiwis</strong> are usually unripe and will ripen slowly in a warm
(16°) room. You can feel when they are starting to get soft and they are
usually at their best; this could take several weeks depending on the
condition they arrive in.</p>
<p><strong>Bananas</strong> have to be harvested green for their 7-10 day
boat trip. On arrival in UK they go into special ripening stores where they
are held at 14°C. Usually they come to us ready ripened with just a hint of
green, which allows a few days for consumer use. Sometimes due to problems
of supply shortages they may not have been fully ripened before they arrive
with us so we have to send them out green. They will ripen providing
you:</p>
<ul>
  <li>Wrap in plastic</li>
  <li>Place in a dark place</li>
  <li>Keep at 14°C</li>
</ul>
<p>They will ripen within a week or so. At cooler temperatures they will
slowly ripen but lose flavour and become woody. Skin colour is not
necessarily an indication of ripeness. The very richest flavour will be
attained if the skin has dark brown spots (like freckles) all over.</p>
<p>Text by <a href="https://www.organiclea.org.uk/">Organic Lea</a>.
Reproduced for teaching purposes only.</p>
`
proseContainer.innerHTML = prose;
