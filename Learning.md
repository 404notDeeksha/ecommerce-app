

- Setting up individual FE & BE repo to craete combined full stack app.
- create a new local m/c folder & git clone both repo in it.
- * create a new Github repo
- Upload all local m/c data to new Github Repo

**Issue #1**
- **.DS_Store file got automatically created on Github repo root folder.
- $$ Put it in .gitignore file
- $$ Removed the folder

**Issue #2**
- ** backend folder in github repo is unresponsive
- $ It is because backend folder is still recognised as git repo by github
- $$ Removed .git repo from backend folder & re-added it as normal folder

**Monorepo Structure**
- Removes duplication of folders( consolidated node_modules)
- makes app scalable, central management of dependencies

so,
- Put both fe & be apps into single /apps folder
- Added .gitignore in root project directory
- Added package.json with shared dependencies & dev_dependencies.
- npm init to load centralised node_modules in app.

