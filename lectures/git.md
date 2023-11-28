# Git

![Many lines in different colors, with small circles for nodes, diverge and
converge](./images/git-graph-branches.png)

*Image by [git-graph](https://github.com/mlange-42/git-graph)*

Git is a distributed version control system that helps you keep track of code
versions and synchronize projects with other people on a team.

This tool is enormously helpful, even if you are a designer, not a developer.
When used well, it saves time, adds flexibility, and brings clarity to team
communication and collaboration.

Credit note: Huge thanks to [Rachel
Carmena](https://rachelcarmena.github.io/2018/12/12/how-to-teach-git.html), who
created the visualisations and developed the teaching method that this segment
uses.

## Why is it called that?

The word “git” seems like a strange choice to many English speakers. In UK
English, the word “git” means an unpleasant or contemptible person. In some
dialects of American English, it is an alternative spelling of “get”,
especially meaning “get out of here”.

Linus Torvalds, one of the main creators of Git, does not give us
a satisfactory answer. He has said it could be any of the following:

1. an acronym for “Global Information Tracker,” or

2. a misspelling of “get,” or

3. an expression of the frustration we might feel doing version control,
   when it is cathartic to type “stupid computer” into the terminal again and again.

Choose your own adventure!

## Why use it?

Have you ever been in this situation?

![A file explorer window showing many different versions of a document with
confusing version names](./images/version-hell.png)

Without a version control system, your code projects will start to look like this.

Only worse, because with code, you have these constraints:

::: details Interdependence of files
One change might involve touching several
files, so you can’t label a change using file names.
:::

::: details File names
You can’t just change the names of files to describe the
version - file names have to be exact for the code to work.
:::

::: details Bugs and bugfixes
Getting the version wrong could break everything,
because one line of code could break everything.
:::

::: details Longevity and teamwork
The lifespan of a code project could be many
years, and new people might enter a project halfway through, so you cannot
rely on your memory of when you saved which files, or how multiple versions
relate to each other. You have to have a system of labeling or notekeeping
that makes the history clear to anyone.
:::

## Why not use Google Drive or another cloud syncing service?

Git was designed in 2005, before the advent of "the cloud" changed the way we
collaborate and keep track of files. So why not use a newer, general-purpose
file syncing service to keep track of code?

::: details Control
Cloud services are generally too automatic for code, while Git
waits for your explicit instruction at each step.
:::

::: details Metadata
Cloud services do not prompt you to label versions, so
exploring the history to troubleshoot problems is more difficult.
Git encourages good notekeeping through commit messages.
:::

::: details Branching
Cloud services do not generally provide for branching and
merging, which is essential for a team working on an application that is
also running in production.
:::

::: details Momentum
Most professional development teams use Git.
:::

::: details Flexibility
Cloud services often cost money and are controlled by
through proprietary software by a central service provider. Git is
free and open source and uses distributed architecture. If needed, an entire
Git project can be restored from any copy, even if GitHub crashes or your
organization has to leave GitHub.
:::

::: details Integration
Git integrates with services like GitHub and GitLab, which
Web development teams depend on for issue tracking, code reviews, data
backups, and static page hosting services. It also integrates with IDEs to
show you visualisations of your project branches and commit history.
:::

## Git is a distributed version control system

<div
  class="relative flex flex-col bg-gray-800"
  role="img"
  aria-description="Four boxes. The one above is the remote repository, which
  is on a server. The three blow are in the development environment. They are the
  working directory, the staging area, and the local repository.">
  <div class="relative border-4 border-dotted border-blue-400
  self-end flex m-4 mt-12">
    <div class="absolute bottom-full py-2 max-md:right-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Server
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      remote<br> repository
    </div>
  </div>
  <div class="relative border-4 border-dotted border-blue-400 flex
  max-md:flex-col-reverse justify-between m-4 mt-16
  align-baseline md:w-[82%] max-md:self-end">
    <div class="absolute bottom-full py-2
    max-md:right-0 md:left-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Development environment
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      working<br> directory
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      staging<br> area
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      local<br> repository
    </div>
  </div>
</div>

## Cloning a repository

<div class="relative flex flex-col bg-gray-800"
  role="img"
  aria-description="The same four boxes. This time there is a line representing
  the git clone command. Git clone copies the remote repository into both the
  working directory and the local repository.">

  <!-- small- lines -->
  <div class="md:hidden absolute left-4 right-52 top-28 h-2 bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 top-28 bottom-24 w-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 right-56 bottom-[24rem] h-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute right-52 bottom-[23rem] h-10 w-10
  bg-yellow-400 clip" style="clip-path: polygon(0% 0%, 100% 50%, 0%
  100%);"></div>
  <div class="md:hidden absolute left-4 right-56 bottom-24 h-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute right-52 bottom-20 h-10 w-10 bg-yellow-400
  clip" style="clip-path: polygon(0% 0%, 100% 50%, 0%
  100%);"></div>

  <!-- medium+ lines -->
  <div class="max-md:hidden absolute left-28 right-52 top-28 h-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute left-28 top-28 bottom-48 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute left-24 bottom-44 h-10 w-10 bg-yellow-400"
  style="clip-path: polygon(0% 0%, 100% 0%, 50% 100%);"></div>
  <div class="max-md:hidden absolute right-56 top-28 bottom-48 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-52 bottom-44 h-10 w-10
  bg-yellow-400" style="clip-path: polygon(0% 0%, 100% 0%, 50% 100%);"></div>

  <div class="absolute top-4 left-4">
    <strong class="max-md:text-lg md:text-2xl font-mono font-extrabold">
      git clone &lt;url&gt;
    </strong>
  </div>
  <div class="relative border-4 border-dotted border-blue-400
  self-end flex m-4 mt-12">
    <div class="absolute bottom-full py-2 max-md:right-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Server
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      remote<br> repository
    </div>
  </div>
  <div class="relative border-4 border-dotted border-blue-400 flex
  max-md:flex-col-reverse justify-between m-4 mt-16
  align-baseline md:w-[82%] max-md:self-end">
    <div class="absolute bottom-full py-2
    max-md:right-0 md:left-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Dev. env.
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      working<br> directory
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      staging<br> area
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      local<br> repository
    </div>
  </div>
</div>

## Making changes to the working directory

<div class="relative flex flex-col bg-gray-800"
  role="img"
  aria-description="The development environment. For files in the working
  directory, there are two alternative states: tracked and untracked.">

  <div class="absolute top-4 left-4">
    <strong class="max-md:text-lg md:text-2xl font-mono font-extrabold">
      git status
    </strong>
  </div>

  <div class="relative border-4 border-dotted border-blue-400 flex
  max-md:flex-col-reverse justify-between m-4 mt-36 mb-20
  align-baseline md:w-[82%] max-md:self-end">
    <div class="absolute max-md:right-32 md:left-32 -top-20 py-2
    max-md:text-right text-yellow-400">
      <strong class="text-2xl font-mono font-bold">
        tracked
      </strong>
    </div>
    <div class="absolute max-md:right-24 md:left-24 -top-4 h-1 w-16
    bg-yellow-400 max-md:rotate-45 md:-rotate-45"></div>
    <div class="absolute bottom-full py-2
    max-md:right-0 md:left-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Dev. env.
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      working<br> directory
    </div>
    <div class="absolute max-md:right-32 md:left-32 -bottom-20 py-2
    max-md:text-right text-yellow-400">
      <strong class="text-2xl font-mono font-bold">
        untracked
      </strong>
    </div>
    <div class="absolute max-md:right-24 md:left-24 -bottom-4 h-1 w-16
    bg-yellow-400 max-md:-rotate-45 md:rotate-45"></div>
    <div class="max-md:hidden bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      staging<br> area
    </div>
    <div class="max-md:hidden bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      local<br> repository
    </div>
  </div>
</div>

## Updating the repositories

<div class="relative flex flex-col bg-gray-800"
  role="img"
  aria-description="With log, you can read the commit history
  in the local repository">

  <div class="absolute top-4 left-4">
    <strong class="max-md:text-lg md:text-2xl font-mono font-extrabold">
      git log
    </strong>
  </div>

  <div class="relative border-4 border-dotted border-blue-400 flex
  max-md:flex-col-reverse justify-between m-4 mt-24
  align-baseline md:w-[82%] max-md:self-end">
    <div class="absolute bottom-full py-2
    max-md:right-0 md:left-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Dev. env.
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      working<br> directory
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      staging<br> area
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-semibold">
      <span class="font-mono">local<br> repository</span>
      <div class="bg-gray-700 text-yellow-400 p-2 text-xl
      uppercase flex flex-col items-center rounded-2xl font-mono font-semibold mt-4">
        <svg class="my-2" width="72" height="72" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
        clip-rule="evenodd" d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16
        8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14
        12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954
        10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor"
        /><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C17.5915
        3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848
        21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12
        19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12
        5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12
        19Z" fill="currentColor" /></svg>
        <div>commit</div>
        <div>commit</div>
        <div>commit</div>
      </div>
    </div>
  </div>
</div>

<hr>


<div class="relative flex flex-col bg-gray-800"
  role="img"
  aria-description="To put changes from the working directory in the staging
  area, use the add command. To put them from staging into the local
  repository, use commit. To extend them to the remote repository, use push.">

  <div class="max-md:hidden absolute top-4 left-4">
    <strong class="max-md:text-lg md:text-2xl font-mono font-extrabold">
      git add &lt;file&gt;
    </strong>
  </div>
  <div class="max-md:hidden absolute top-12 left-4">
    <strong class="max-md:text-lg md:text-2xl font-mono font-extrabold">
      git commit -m "message"
    </strong>
  </div>
  <div class="max-md:hidden absolute top-20 left-4">
    <strong class="max-md:text-lg md:text-2xl font-mono font-extrabold">
      git push
    </strong>
  </div>

  <!-- small- lines -->
  <div class="md:hidden absolute top-52 left-8">
    <strong class="text-xl font-mono font-extrabold text-yellow-400">
      push
    </strong>
  </div>
  <div class="md:hidden absolute left-4 right-56 top-28 h-2 bg-yellow-400"></div>
  <div class="md:hidden absolute right-52 top-24 h-10 w-10
  bg-yellow-400 clip" style="clip-path: polygon(0% 0%, 100% 50%, 0%
  100%);"></div>
  <div class="md:hidden absolute left-4 top-28 bottom-[26rem] w-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 right-52 bottom-[26rem] h-2
  bg-yellow-400"></div>

  <div class="md:hidden absolute top-[25rem] left-8">
    <strong class="text-xl font-mono font-extrabold text-yellow-400">
      commit
    </strong>
  </div>
  <div class="md:hidden absolute left-4 right-56 top-[22rem] h-2 bg-yellow-400"></div>
  <div class="md:hidden absolute right-52 top-[21rem] h-10 w-10
  bg-yellow-400 clip" style="clip-path: polygon(0% 0%, 100% 50%, 0%
  100%);"></div>
  <div class="md:hidden absolute left-4 top-[22rem] bottom-[17rem] w-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 right-52 bottom-[17rem] h-2
  bg-yellow-400"></div>

  <div class="md:hidden absolute bottom-36 left-8">
    <strong class="text-xl font-mono font-extrabold text-yellow-400">
      add
    </strong>
  </div>
  <div class="md:hidden absolute left-4 right-56 bottom-56 h-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute right-52 bottom-52 h-10 w-10
  bg-yellow-400 clip" style="clip-path: polygon(0% 0%, 100% 50%, 0%
  100%);"></div>
  <div class="md:hidden absolute left-4 top-[32rem] bottom-28 w-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 right-52 bottom-28 h-2
  bg-yellow-400"></div>

  <!-- medium+ lines -->
  <div class="max-md:hidden absolute left-40 bottom-8">
    <strong class="text-2xl font-mono font-extrabold text-yellow-400">
      add
    </strong>
  </div>
  <div class="max-md:hidden absolute left-24 bottom-4 h-14 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute left-24 right-[25rem] bottom-4 h-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-[25rem] bottom-4 h-10 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-[24rem] bottom-8 h-10 w-10
  bg-yellow-400" style="clip-path: polygon(50% 0%, 100% 100%, 00%
  100%);"></div>

  <div class="max-md:hidden absolute left-[22rem] bottom-60">
    <strong class="text-2xl font-mono font-extrabold text-yellow-400">
      commit
    </strong>
  </div>
  <div class="max-md:hidden absolute left-72 bottom-60 h-14 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute left-72 right-52 bottom-72 h-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-52 bottom-64 h-10 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-48 bottom-60 h-10 w-10 bg-yellow-400"
  style="clip-path: polygon(0% 0%, 100% 0%, 50% 100%);"></div>

  <div class="max-md:hidden absolute bottom-44 right-4">
    <strong class="text-2xl font-mono font-extrabold text-yellow-400">
      push
    </strong>
  </div>
  <div class="max-md:hidden absolute left-[85%] right-20 bottom-40 h-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-20 top-56 bottom-40 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-16 top-52 h-10 w-10 bg-yellow-400"
  style="clip-path: polygon(50% 0%, 100% 100%, 00% 100%);"></div>

  <div class="relative border-4 border-dotted border-blue-400
  self-end flex m-4 mt-12">
    <div class="absolute bottom-full py-2 max-md:right-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Server
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      remote<br> repository
    </div>
  </div>
  <div class="relative border-4 border-dotted border-blue-400 flex
  max-md:flex-col-reverse justify-between m-4 mt-16 md:mb-20
  align-baseline md:w-[82%] max-md:self-end">
    <div class="absolute bottom-full py-2
    max-md:right-0 md:left-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Dev. env.
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      working<br> directory
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      staging<br> area
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      local<br> repository
    </div>
  </div>
</div>

## Tracing differences in the development environment

<div class="relative flex flex-col bg-gray-800"
  role="img"
  aria-description="Diff shows you the differences between the areas in your
  development environment, as well as between commits. Run diff alone to show
  changes in the working directory. Run diff --staged to show differences in
  the staging area. Run diff with a commit hash or reference to show
  differences in the commit history.">

  <div class="absolute top-4 left-4">
    <strong class="max-md:text-lg md:text-2xl font-mono font-extrabold">
      git diff
    </strong>
  </div>

  <div class="absolute max-md:top-32 md:bottom-8 max-md:left-4 md:left-16">
    <strong class="max-md:text-lg md:text-xl font-mono font-extrabold
    text-yellow-400">
      diff
    </strong>
  </div>
  <div class="absolute max-md:top-72 md:bottom-4 max-md:left-4 md:left-64">
    <strong class="max-md:text-lg md:text-xl font-mono font-extrabold
    text-yellow-400">
      diff<br> --staged
    </strong>
  </div>
  <div class="absolute max-md:bottom-32 md:bottom-4 max-md:left-4 md:right-36">
    <strong class="max-md:text-lg md:text-xl font-mono font-extrabold
    text-yellow-400">
      diff<br> &lt;commit&gt;
    </strong>
  </div>

  <div class="relative border-4 border-dotted border-blue-400 flex
  max-md:flex-col-reverse justify-between m-4 my-24
  align-baseline md:w-[82%] max-md:self-end">
    <div class="absolute bottom-full py-2
    max-md:right-0 md:left-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Dev. env.
      </strong>
    </div>
    <div class="relative bg-blue-200 m-3 text-black px-4 py-8 text-xl
    text-center rounded-2xl font-mono font-semibold max-md:mb-8">
      <span class="uppercase">working<br> directory</span>
      <div class="absolute bg-gray-700 inset-x-4 -bottom-6 p-2 text-center
      text-yellow-400 rounded-2xl">
        <strong class="text-lg font-mono font-bold">
          modified
        </strong>
      </div>
    </div>
    <div class="relative bg-blue-200 m-3 text-black px-4 py-8 text-xl
    text-center rounded-2xl font-mono font-semibold max-md:mb-8">
      <span class="uppercase">staging<br> area</span>
      <div class="absolute bg-gray-700 inset-x-4 -bottom-6 p-2 text-center
      text-yellow-400 rounded-2xl">
        <strong class="text-lg font-mono font-bold">
          staged
        </strong>
      </div>
    </div>
    <div class="relative bg-blue-200 m-3 text-black px-4 py-8 text-xl
    text-center rounded-2xl font-mono font-semibold max-md:mb-8">
      <span class="uppercase">local<br> repository</span>
      <div class="absolute bg-gray-700 inset-x-4 -bottom-6 p-2 text-center
      text-yellow-400 rounded-2xl">
        <strong class="text-lg font-mono font-bold">
          committed
        </strong>
      </div>
    </div>
  </div>
</div>

## Updating the development environment

<div class="relative flex flex-col bg-gray-800"
  role="img"
  aria-description="With fetch, you can update just the local repository,
  without touching the working directory or the staging area.">

  <div class="absolute top-4 left-4">
    <strong class="max-md:text-lg md:text-2xl font-mono font-extrabold">
      git fetch
    </strong>
  </div>

  <!-- small- lines -->
  <div class="md:hidden absolute left-8 top-56">
    <strong class="text-xl font-mono font-extrabold text-yellow-400">
      fetch
    </strong>
  </div>
  <div class="md:hidden absolute left-4 right-52 top-28 h-2 bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 top-28 h-60 w-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 right-56 bottom-[24rem] h-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute right-52 bottom-[23rem] h-10 w-10
  bg-yellow-400 clip" style="clip-path: polygon(0% 0%, 100% 50%, 0%
  100%);"></div>

  <!-- medium+ lines -->
  <div class="max-md:hidden absolute right-60 top-40">
    <strong class="text-2xl font-mono font-extrabold text-yellow-400">
      fetch
    </strong>
  </div>
  <div class="max-md:hidden absolute right-52 top-28 w-4 h-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-56 top-28 bottom-48 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-52 bottom-44 h-10 w-10 bg-yellow-400" style="clip-path: polygon(0% 0%, 100% 0%, 50% 100%);"></div>

  <div class="relative border-4 border-dotted border-blue-400
  self-end flex m-4 mt-12">
    <div class="absolute bottom-full py-2 max-md:right-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Server
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      remote<br> repository
    </div>
  </div>
  <div class="relative border-4 border-dotted border-blue-400 flex
  max-md:flex-col-reverse justify-between m-4 mt-16
  align-baseline md:w-[82%] max-md:self-end">
    <div class="absolute bottom-full py-2
    max-md:right-0 md:left-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Dev. env.
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      working<br> directory
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      staging<br> area
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      local<br> repository
    </div>
  </div>
</div>

<br>

<div class="relative flex flex-col bg-gray-800"
  role="img"
  aria-description="With pull, you can update the local repository and also
  apply those changes on top of changes you have made locally, updating the
  working environment.">

  <div class="absolute top-4 left-4">
    <strong class="max-md:text-lg md:text-2xl font-mono font-extrabold">
      git pull
    </strong>
  </div>

  <!-- small- lines -->
  <div class="md:hidden absolute left-8 top-56">
    <strong class="text-xl font-mono font-extrabold text-yellow-400">
      1.<br>
      fetch
    </strong>
  </div>
  <div class="md:hidden absolute left-4 right-52 top-28 h-2 bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 top-28 h-60 w-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 right-56 bottom-[24rem] h-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute right-52 bottom-[23rem] h-10 w-10
  bg-yellow-400 clip" style="clip-path: polygon(0% 0%, 100% 50%, 0%
  100%);"></div>

  <div class="md:hidden absolute left-8 bottom-52">
    <strong class="text-xl font-mono font-extrabold text-yellow-400">
      2.<br>
      merge
    </strong>
  </div>
  <div class="md:hidden absolute left-4 right-52 top-[25rem] h-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 top-[25rem] h-60 w-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 right-56 bottom-24 h-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute right-52 bottom-20 h-10 w-10
  bg-yellow-400 clip" style="clip-path: polygon(0% 0%, 100% 50%, 0%
  100%);"></div>

  <!-- medium+ lines -->
  <div class="max-md:hidden absolute right-60 top-28">
    <strong class="text-2xl font-mono font-extrabold text-yellow-400">
      1.<br>
      fetch
    </strong>
  </div>
  <div class="max-md:hidden absolute right-52 top-28 w-4 h-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-56 top-28 bottom-48 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-52 bottom-44 h-10 w-10 bg-yellow-400" style="clip-path: polygon(0% 0%, 100% 0%, 50% 100%);"></div>

  <div class="max-md:hidden absolute left-52 top-32">
    <strong class="text-2xl font-mono font-extrabold text-yellow-400">
      2.<br>
      merge
    </strong>
  </div>
  <div class="max-md:hidden absolute right-64 top-48 bottom-44 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute left-28 right-64 top-48 h-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute left-28 top-48 bottom-48 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute left-24 bottom-44 h-10 w-10 bg-yellow-400"
  style="clip-path: polygon(0% 0%, 100% 0%, 50% 100%);"></div>

  <div class="relative border-4 border-dotted border-blue-400
  self-end flex m-4 mt-12">
    <div class="absolute bottom-full py-2 max-md:right-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Server
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      remote<br> repository
    </div>
  </div>
  <div class="relative border-4 border-dotted border-blue-400 flex
  max-md:flex-col-reverse justify-between m-4 mt-16
  align-baseline md:w-[82%] max-md:self-end">
    <div class="absolute bottom-full py-2
    max-md:right-0 md:left-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Dev. env.
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      working<br> directory
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      staging<br> area
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      local<br> repository
    </div>
  </div>
</div>

<br>

<div class="relative flex flex-col bg-gray-800"
  role="img"
  aria-description="You can also pull and rebase at the same time with the
  rebase flag. This fetches the code from the remote repository, and then
  replays your local commits on top of the fetched changes.">

  <div class="absolute top-4 left-4">
    <strong class="max-md:text-lg md:text-2xl font-mono font-extrabold">
      git pull --rebase
    </strong>
  </div>

  <!-- small- lines -->
  <div class="md:hidden absolute left-8 top-56">
    <strong class="text-xl font-mono font-extrabold text-yellow-400">
      1.<br>
      fetch
    </strong>
  </div>
  <div class="md:hidden absolute left-4 right-52 top-28 h-2 bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 top-28 h-60 w-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 right-56 bottom-[24rem] h-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute right-52 bottom-[23rem] h-10 w-10
  bg-yellow-400 clip" style="clip-path: polygon(0% 0%, 100% 50%, 0%
  100%);"></div>

  <div class="md:hidden absolute left-8 bottom-52">
    <strong class="text-xl font-mono font-extrabold text-yellow-400">
      2.<br>
      rebase
    </strong>
  </div>
  <div class="md:hidden absolute left-4 right-56 top-[25rem] h-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 top-[25rem] h-60 w-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 right-52 bottom-24 h-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute right-52 top-[24rem] h-10 w-10
  bg-yellow-400 clip" style="clip-path: polygon(0% 0%, 100% 50%, 0%
  100%);"></div>

  <!-- medium+ lines -->
  <div class="max-md:hidden absolute right-60 top-28">
    <strong class="text-2xl font-mono font-extrabold text-yellow-400">
      1.<br>
      fetch
    </strong>
  </div>
  <div class="max-md:hidden absolute right-52 top-28 w-4 h-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-56 top-28 bottom-48 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-52 bottom-44 h-10 w-10
  bg-yellow-400" style="clip-path: polygon(0% 0%, 100% 0%, 50% 100%);"></div>

  <div class="max-md:hidden absolute left-52 top-32">
    <strong class="text-2xl font-mono font-extrabold text-yellow-400">
      2.<br>
      rebase
    </strong>
  </div>
  <div class="max-md:hidden absolute right-64 top-48 bottom-48 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute left-28 right-64 top-48 h-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute left-28 top-48 bottom-44 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-60 bottom-44 h-10 w-10 bg-yellow-400"
  style="clip-path: polygon(0% 0%, 100% 0%, 50% 100%);"></div>

  <div class="relative border-4 border-dotted border-blue-400
  self-end flex m-4 mt-12">
    <div class="absolute bottom-full py-2 max-md:right-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Server
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      remote<br> repository
    </div>
  </div>
  <div class="relative border-4 border-dotted border-blue-400 flex
  max-md:flex-col-reverse justify-between m-4 mt-16
  align-baseline md:w-[82%] max-md:self-end">
    <div class="absolute bottom-full py-2
    max-md:right-0 md:left-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Dev. env.
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      working<br> directory
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      staging<br> area
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      local<br> repository
    </div>
  </div>
</div>

## Branching

<div class="relative flex flex-col bg-gray-800"
  role="img"
  aria-description="The branch command creates a new branch in the local
  repository with the name you pass.">

  <div class="absolute top-4 left-4"> <strong class="max-md:text-lg md:text-2xl
  font-mono font-extrabold">
      git branch &lt;branch&gt;
    </strong>
  </div>

  <div class="relative border-4 border-dotted border-blue-400 flex
  max-md:flex-col-reverse justify-between m-4 mt-24
  align-baseline md:w-[82%] max-md:self-end">
    <div class="absolute bottom-full py-2
    max-md:right-0 md:left-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Dev. env.
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      working<br> directory
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      staging<br> area
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-semibold">
      <span class="font-mono">local<br> repository</span>
      <div class="border-4 border-black p-2 text-black text-xl uppercase
      text-center rounded-2xl font-mono font-semibold mt-4">
        main
      </div>
      <div class="border-4 border-black bg-yellow-400 p-2 text-black text-xl
      uppercase text-center rounded-2xl font-mono font-semibold mt-4">
        branch
      </div>
    </div>
  </div>
</div>

<hr>

<div class="relative flex flex-col bg-gray-800"
  role="img"
  aria-description="The switch command changes to the named branch, effectively
  copying the changes in that branch from the local repository into the working
  directory.">

  <div class="absolute top-4 left-4">
    <strong class="max-md:text-lg md:text-2xl font-mono font-extrabold">
      git switch &lt;branch&gt;
    </strong>
  </div>

  <!-- small- lines -->
  <div class="md:hidden absolute left-8 top-[28rem]">
    <strong class="text-xl font-mono font-extrabold text-yellow-400">
      switch
    </strong>
  </div>
  <div class="md:hidden absolute left-4 right-56 top-[19rem] h-2 bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 top-[19rem] bottom-24 w-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 right-56 bottom-24 h-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute right-52 bottom-20 h-10 w-10
  bg-yellow-400 clip" style="clip-path: polygon(0% 0%, 100% 50%, 0%
  100%);"></div>

  <!-- medium+ lines -->
  <div class="max-md:hidden absolute left-56 top-28">
    <strong class="text-2xl font-mono font-extrabold text-yellow-400">
      switch
    </strong>
  </div>
  <div class="max-md:hidden absolute bottom-24 right-72 w-4 h-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-[19rem] top-24 bottom-24 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute left-32 top-24 right-[19rem] h-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute left-32 top-24 bottom-[21rem] w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute left-28 top-28 h-10 w-10 bg-yellow-400" style="clip-path: polygon(0% 0%, 100% 0%, 50% 100%);"></div>

  <div class="relative border-4 border-dotted border-blue-400 flex
  max-md:flex-col-reverse justify-between m-4 max-md:mt-24 md:mt-40
  align-baseline md:w-[82%] max-md:self-end">
    <div class="absolute bottom-full py-2
    max-md:right-0 md:left-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Dev. env.
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      working<br> directory
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      staging<br> area
    </div>
    <div class="relative bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-semibold">
      <span class="font-mono">local<br> repository</span>
      <div class="border-4 border-black p-2 text-black text-xl uppercase
      text-center rounded-2xl font-mono font-semibold mt-4">
        main
      </div>
      <div class="relative max-md:right-12 md:right-8 border-4 border-black bg-blue-200 p-2 text-black text-xl
      uppercase text-center rounded-2xl font-mono font-semibold mt-4">
        branch
      </div>
    </div>
  </div>
</div>

<hr>

<div class="relative flex flex-col bg-gray-800"
  role="img"
  aria-description="To push a new branch, use the -u flag with origin and the
  name of the branch.">

  <div class="max-md:hidden absolute top-4 left-4"> <strong
  class="max-md:text-lg md:text-2xl font-mono font-extrabold">
      git push -u origin &lt;branch&gt;
    </strong>
  </div>

  <!-- small- lines -->
  <div class="md:hidden absolute top-96 left-8">
    <strong class="text-xl font-mono font-extrabold text-yellow-400">
      push
    </strong>
  </div>
  <div class="md:hidden absolute left-4 right-56 top-64 h-2 bg-yellow-400"></div>
  <div class="md:hidden absolute right-52 top-60 h-10 w-10
  bg-yellow-400 clip" style="clip-path: polygon(0% 0%, 100% 50%, 0%
  100%);"></div>
  <div class="md:hidden absolute left-4 top-64 bottom-[23.5rem] w-2
  bg-yellow-400"></div>
  <div class="md:hidden absolute left-4 right-52 bottom-[23.5rem] h-2
  bg-yellow-400"></div>

  <!-- medium+ lines -->
  <div class="max-md:hidden absolute bottom-44 right-4">
    <strong class="text-2xl font-mono font-extrabold text-yellow-400">
      push
    </strong>
  </div>
  <div class="max-md:hidden absolute left-[85%] right-20 bottom-40 h-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-20 top-[22rem] bottom-40 w-2
  bg-yellow-400"></div>
  <div class="max-md:hidden absolute right-16 top-[21rem] h-10 w-10 bg-yellow-400"
  style="clip-path: polygon(50% 0%, 100% 100%, 00% 100%);"></div>

  <div class="relative border-4 border-dotted border-blue-400
  self-end flex m-4 mt-12">
    <div class="absolute bottom-full py-2 max-md:right-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Server
      </strong>
    </div>
    <div class="relative bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-semibold">
      <span class="font-mono">remote<br> repository</span>
      <div class="border-4 border-black p-2 text-black text-xl uppercase
      text-center rounded-2xl font-mono font-semibold mt-4">
        main
      </div>
      <div class="relative border-4 border-black bg-yellow-400 p-2 text-black text-xl
      uppercase text-center rounded-2xl font-mono font-semibold mt-4">
        branch
      </div>
    </div>
  </div>
  <div class="relative border-4 border-dotted border-blue-400 flex
  max-md:flex-col-reverse justify-between m-4 mt-16 md:mb-20
  align-baseline md:w-[82%] max-md:self-end">
    <div class="absolute bottom-full py-2
    max-md:right-0 md:left-0 max-md:text-right">
      <strong class="text-xl font-sans font-semibold">
        Dev. env.
      </strong>
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      working<br> directory
    </div>
    <div class="bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-mono font-semibold">
      staging<br> area
    </div>
    <div class="relative bg-blue-200 m-3 text-black px-4 py-8 text-xl uppercase
    text-center rounded-2xl font-semibold">
      <span class="font-mono">local<br> repository</span>
      <div class="border-4 border-black p-2 text-black text-xl uppercase
      text-center rounded-2xl font-mono font-semibold mt-4">
        main
      </div>
      <div class="relative max-md:right-12 md:left-12 border-4 border-black
      bg-blue-200 p-2 text-black text-xl
      uppercase text-center rounded-2xl font-mono font-semibold mt-4">
        branch
      </div>
    </div>
  </div>
</div>

## Going further

These are the essential steps, and there is a lot more to know and explore.

For more on teamwork with Git and merging branches, see the next section on GitHub.

## References

Carmena, Rachel. “How to Teach Git.” Rachel M. Carmena, December 12, 2018.
https://rachelcarmena.github.io/2018/12/12/how-to-teach-git.html.

Straub, Ben. “Git Basics.” In Pro Git Book, 2nd edition., 2014.
https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository.

Villalobos, Ray. “Learning Git and GitHub.” LinkedIn Learning, August 27,
2021. https://www.linkedin.com/learning/learning-git-and-github-14213624.
