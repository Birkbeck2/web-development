# Web Development

This repository holds lecture notes, code examples, workshops, and
autograders for the corresponding MA modules.

## Getting started

Are you new to GitHub? You may find what you need in the [GitHub Documentation](https://docs.github.com/).

## Viewing lectures and workshops

Try out the
[https://birkbeck2.github.io/web-development](https://birkbeck2.github.io/web-development)
website where you can search and read the content more easily than via
GitHub.

## Installing

You can get this website running locally with a few Git and NPM commands.

### Git setup

(Need a refresher on Git commands? See this [Git cheat
sheet](https://training.github.com/downloads/github-git-cheat-sheet/))

If you are using VS Code on Windows, you’ll need to do a few things to set
it up:

1. [Install Git for Windows](https://gitforwindows.org/)

2. Inside VS Code, [set Git Bash as your
   default terminal](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git#_git-bash-on-windows)

3. Then run the commands below inside the VS Code terminal

If you are using a Mac, you’ll just need to install Git using your Mac
Terminal:

1. [Install Git on Mac](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git#_installing_on_macos)

### NPM setup

NPM is the “Node.js package manager”. It lets you manage JavaScript-based
applications on your computer, along with their software dependencies.

(Need a refresher on NPM? See [“An Introduction to the NPM package
manager”](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager))

To get NPM on your computer, follow this [guide to installing NPM via the
Node version manager (NVM)](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/).

### Install steps

Once you have Git and NPM, here are the installation steps:

1. Navigate to the folder where you keep your Git repositories. Getting
   there with the command line might look something like this, if you have
   a folder called “repos” for your repositories inside your home
   directory (which is represented by `~`):

   ```
   cd ~/repos/
   ```

2. Clone this repository with SSH:

   ```
   git clone git@github.com:Birkbeck2/web-development.git
   ```

   Or, if you don’t have an SSH key set up, clone it with HTTPS:

   ```
   git clone https://github.com/Birkbeck2/web-development.git
   ```

3. Navigate inside the repository and install the dependencies:

   ```
   cd web-development
   npm install
   ```

4. If the installation was successful, you should see a bunch of
   dependencies installed in `node_modules`. List them to see:

   ```
   ls node_modules
   ```

5. If you are going to use Playwright to write autograders, run
   this line to install playwright and the Chrome browser engine:

   ```
   npx playwright install --with-deps chromium
   ```

## Running the website

Once you install the dependencies, you should be able to run the website
on a local development server from inside the `web-development` folder
with a single terminal command.

1. Navigate to the project folder. It would be this command if you have
   a “repos” folder inside your home (`~`) directory.

   ```
   cd ~/repos/web-development
   ```

2. Run the development server

   ```
   npm run dev
   ```

3. Open a browser to the URL provided in your terminal. Probably
   it’s `http://localhost:5173/web-development/`. You should then see the
   website.

4. You can now make changes to the code, and they should be reflected in
   your browser automatically.

See other available commands inside the scripts listed in `package.json`.

## Building the website

If you make changes to the markdown files and want them to go live at
birkbeck2.github.io/web-development, please try building the website
locally (that is, converting the Markdown files to static HTML files).

1. Try building with this command:

   ```
   npm run build
   ```

2. Check the build worked by running the preview server, which draws on
   the static built HTML files rather than dynamically updating them like
   the run command does.

   ```
   npm run preview
   ```

3. Open a browser to the URL provided. Note the port number is different
   from the development server.

See other available commands inside the scripts listed in `package.json`.

## Adding lectures and workshops

You can add a new lecture part by adding a Markdown file inside
`/lectures/`. It should then be available as an HTML file at the same
relative path on the website.

Workshops require a bit more structure. See the [workshops
readme](workshops/WORKSHOPS-README.md)

## Adding navigation for lectures and workshops

Lectures and workshops should be added to the lecture list or workshop
list, as well as the sidebar on the left.

All three places are generated from `outline.js`. This expects a JSON-like
entry for each class meeting, with relevant lecture and workshop parts
nested under it.

```js
{
  text: 'Semantic HTML',
  items: [
    {
      text: 'HTML attributes',
      link: '/lectures/html-attributes.html',
      lecturer: 'Joseph Muller',
      concepts: 'variable, attribute, attribute name, attribute value',
      code: '= " lang id class a href'
    },
    {
      text: 'Workshop on semantic HTML',
      link: '/workshops/semantic-html/index.html',
      lecturer: 'Joseph Muller'
    }
  ]
},
```

These entries will automatically show up on the right list (that is,
“Lectures” or “Workshops”), based on the keyword `lectures` or `workshops`
in the `link`.

For the `code` property of lectures, write actual punctuation marks or
reserved keywords - the idea here is to provide a visual cue if someone
is looking for help with a particular mark or word they encounter or are
expected to use in code. It will be rendered with `<code>`, so it is
best to separate things with spaces only, not commas or anything else.

## Publishing changes

Please commit changes to a new branch, and submit a pull request with the
maintainer (currently Joseph Muller) as a reviewer.

## Teaching with sandboxes

The `/public/sandbox/` folder has demo code showing a variety of concepts
and patterns. Here’s one good workflow for using these during lectures and
workshops.

1. In class, run the development server (steps above) and open it in the
   browser on the projector screen. Navigate to the sandbox you want using
   the same relative path as in the repo, but removing `public` from the
   URL (see [“The Public
   Directory”](https://vitepress.dev/guide/asset-handling#the-public-directory)
   for why). For example:

   ```
   http://localhost:5173/web-development/sandbox/css-hover/index.html
   ```

2. Open the sandbox code in your IDE, on the projector screen. Make
   changes, switch to the browser, and refresh to see the changes.

## Anonymizing student repositories

Here is a checklist for anonymizing student repositories (if student
prefers) before putting the repository on the Projects page:

1. Do a plain text search of the code for name or identifying info of the
   student. Replace any occurrences with fake info.

2. Strip image metadata by using [ExifTool](https://exiftool.org), except for
   image color profiles, which should be kept.

   ```sh
   cd ImageExifTool-XX.XX ./exiftool -all= -TagsFromFile
   @ -ColorSpaceTags ./path/to/images/
   ```

   Remove any backups of the original images--they’ll have the suffix
   “_original” in the file name.

   You can search the cleaned metadata for the student name by reading and
   piping it to ripgrep or similar:

   ```sh
   ./exiftool ./path/to/images/ | rg searchterm
   ```

   Note that you'll see a warning message: "Warning: ICC_Profile deleted. Image colors may be affected." But this is because the profile data is removed and added back. Run this to confirm that it is still there:

   ```sh
   ./exiftool -ColorSpaceTags ./path/to/images/
   ```

3. Remove any links to the GitHub classroom from the README.md file.

4. Once you are happy with your changes, delete the git repository folder
   `.git`. It is sometimes possible to anonymise a git history but it would be
   too time consuming and tricky in most cases, so better to just remove the
   whole history and start over.

5. Initialize another repository, and commit the anonymized code with a commit
   message like “anonymized   repository by [fake name]".

## Rights

Lectures are copyright Birkbeck, University of London. Pictures and
workshop documents are copyright Birkbeck, University of London unless
otherwise stated.

Original content is licensed under the
[Creative Commons Attribution 4.0 International
License](http://creativecommons.org/licenses/by/4.0/).
Original code is licensed under the [GNU Affero General Public License
3.0](LICENSE.md).
