# Workshop on JavaScript objects

Starter code: a simple SVG with a few color styles, and maybe some
dimensions like height and width that don’t require many new concepts to
understand. Maybe the SVG is the default export in a .js file for ease of
importing.

Task: Write a JS script that iterates over an array of color codes (and/or
height/width combos) and creates a copy of the SVG with each color
combination, and writes it to a uniquely named output file.

Will require importing `readFileSync` and `writeFileSync` from `node:fs`.
