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

### Added Mixpanel tool 
- track events like user actions, page reloads.

**Issues#9**
- Integrating mixpanel dashboard with project
- Quite Complex.
- Chrome browsers had blockers which werent allowing mixpanel tracker to send request to mixpanel dashboard.
- $$ used ignore_dnt: true, to stop that .
- Still no request was crossing. Network tab had no https//api.mixpanel
- $$ Opening in Incognito mode solved the issue

- ***Time***:
- ***new Date().toISOString()*** gives universal time     <!-- 2025-07-26T08:44:10.123Z -->
- 2025-07-26 → Date (YYYY-MM-DD)
- T → Separator between date and time
- 08:44:10.123 → Time (HH:mm:ss.sss)
- Z → Indicates UTC time
- 








### Production Quirks

**Loading .env file**:
- Vite loads .env, .env.development, and .env.production files based on the --mode flag.
- By default, it only uses .env
    ```js
    "start": "vite --mode development",
    "build": "vite build --mode production",
    ```
- `.env` runs in all environments


### How Each of my action in project is improving end user expirence? 
### How can it be Quantified/ measured?

### Metrics:

**Tracking -> Basics Measures**
- page load speed 
- user session duration
- user engagement (session duration, bounce rate), conversion rates, and specific events (button clicks, form submissions) to understand how changes impact user behavior.
1) Page Load Speed 
2) User Engagement (session duration, events) 
3) Conversion Tracking (CTA clicks, form submissions) 
4) User Flow Analysis (navigation paths) 
5) Bounce Rate Monitoring. 

**Tool used**
-Mixpanel

***Splash Page***
1) Page Load Speed (target <2 seconds) 
- Use `Google page insights` for deployed web pages
- Used Network tab under Inspect

***Analytics***
- DOMContentLoaded: 137 ms 
- Load: 354

2) User Engagement:
- CTA button (Get Started)


***Signup Page***: Analytics:
1. Page Load Speed : DOMContentLoaded: 244 ms, Load: 465 ms
2.  


2) User Engagement (session duration >30 seconds) 
3) Click-through Rate on CTAs 
4) Exit Rate 
5) Heatmaps to analyze user interaction areas.