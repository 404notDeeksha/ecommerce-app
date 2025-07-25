# Mono Repo app

- Setting up individual FE & BE repo to craete combined full stack app.
- create a new local m/c folder & git clone both repo in it.
- * create a new Github repo
- Upload all local m/c data to new Github Repo

**Issue #1**
- .DS_Store file got automatically created on Github repo root folder.
- $$ Put it in .gitignore file
- $$ Removed the folder

**Issue #2**
-  backend folder in github repo is unresponsive
- $ It is because backend folder is still recognised as git repo by github
- $$ Removed .git repo from backend folder & re-added it as normal folder

### Monorepo Structure**
- Removes duplication of folders( consolidated node_modules)
- makes app scalable, central management of dependencies

so,
- Put both fe & be apps into single /apps folder
- Added .gitignore in root project directory
- Added package.json with shared dependencies & dev_dependencies.
- npm init to load centralised node_modules in app.

### Starting both FE & BE in Development mode

**Issues #3**
- FE initial setup of package.json is via vite & has "dev":"vite" instaed of "start":"vite". 
- $$ This Needed change.
- Also, FE .env doesnt has BE url mentioned explicitly, needed updation.

**Issues #4**
- Backend app isnt able to load its .env essential variables.
- $$ create new .env file & write all necessary links
- It is because of tests file

**Issues #5**
- mongodb_url needs to be locally updated with credentials for connection.
- start both be & fe development locally

**Issue #6**
- fe isnt working
- $$ Deleted package-lock.json of both fe & be , node_modules & package-lock.json of root directory.
- Reinstalled node_modules & package-lock.json of root directory

**Issue #7**
- $$ missed username, password of mongodb account
- recovered from env variables of vercel deployement

**Deciding Theme of Website:-**
- Ai tech Gadgets Store

**Lets Change Frontend First**

***Sitewide***
- Changed Logo

***HomePage***
- Changed Site Name
- Change Wallpaper
- Positioned Searchbar on its Top
- Positioned Hero Text in center
- Decided to keep Home Page as Splash page
***Splash Page***
- Changed Font of HeroText
- Made this page responsive

**Issues #8**
- No route page is working
- Creating new route page is working
- Even url is getting converted to /home page url
- $$ Beacuse user was logged in

***Signup Page***
- Updated complete UI






