# Vanilla-Typescript Template

This is template used to make plain html and css projects with Typescript

[![GitHub tag](https://img.shields.io/github/tag/Xavier577/vanilla-typescript-project-boilerplate?include_prereleases=&sort=semver)](https://github.com/Xavier577/vanilla-typescript-project-boilerplate/releases)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![Made with Node.js](https://img.shields.io/badge/Node.js->=12-blue?logo=node.js&logoColor=white)](https://nodejs.org)

# How it works

This template uses webpack to compile all typescript code in the src directory into a single javascript bundle.
This enable the use of modules in the typescript code. All imports used in the index.ts code would get bundled into a single javascript file (in this case script.js) solving the problem of with tsc --watch command which will compile each imported module seperately to their javascript equivalent.

# How to use template to create your own projects
<p>
<span style="font-size: 1.3rem"> Click on the <em>"use template"</em> button </span> <br/>
<img src="https://xavier577.github.io/vanilla-typescript-project-boilerplate/screenshots/useTemplate.PNG"alt="use template"/> 
</p>

<p>
<span style="font-size: 1.3rem"> Input your the name of your Project and click <em>"create project from repository"</em> button </span> <br/>
<img 
src="https://xavier577.github.io/vanilla-typescript-project-boilerplate/screenshots/create-project-from-template.PNG"
alt="create new project from template"
/>

</p>

<p>
<span style="font-size: 1.3rem"> You should see that your new project's repository has been created </span><br/>
<img src="https://xavier577.github.io/vanilla-typescript-project-boilerplate/screenshots/new-project-created.PNG" alt="new-project-created">
</p>

<p>
<span style="font-size: 1.3rem"> copy the link to clone the repo to your local machine (note the link will be different depending on your repository account and your project name)</span> <br/>
<img src="https://xavier577.github.io/vanilla-typescript-project-boilerplate/screenshots/clone-from-your-repo.PNG" alt="copy-repo-link">
</p>

> after cloning your repo to your local machine with the git clone command

# Installing the dependencies

In the projects root directory

```
npm install

```

This will install all the dependencies in the package.json

Then:

> Go into the src directory and run the start script

```
cd ./src

npm start

```

This will run the start script in the package.json (this runs webpack --watch which will automatically recompile index.ts in the src directory on every change)

In the public folder/directory

open index.html (if you are using visual studio code as your text editor use liveserver extension)

<p>
<span style="font-size: 1.3rem"> 
If all the steps are done correctly the counter-example  show be rendered  in your browser when you open index.html in your browser with liveserver
</span> <br/>
<img src="https://xavier577.github.io/vanilla-typescript-project-boilerplate/screenshots/counter-example.PNG" alt="counter-example">
</p>

[check out the github repo](https://github.com/Xavier577/vanilla-typescript-project-boilerplate)
