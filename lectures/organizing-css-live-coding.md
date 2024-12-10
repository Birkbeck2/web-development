# Organizing your CSS: Live coding

## Simple ITCSS

With ITCSS you can look at your styles as an upside-down pyramid that makes
good use of the CSS cascade. The wide end starts out with some broad rules to
set up a workspace, including colors, fonts, and default styles for HTML
elements. 

```
   ######### settings
    ####### resets
     ##### elements
      ### components
       # utilites
```

Then as you go to the narrow end, you have more targeted, more specific styles
for individual components and local overrides. These come last to have greater
precedence, and they also make use of classes to have greater specificity.

[View in browser](/web-development/sandbox/css-itcss/index.html){target="_blank"}

<<< @/public/sandbox/css-itcss/index.css{css}

## Simple BEM

[View in browser](/web-development/sandbox/css-bem/index.html){target="_blank"}

<<< @/public/sandbox/css-bem/index.css#bem{css}
