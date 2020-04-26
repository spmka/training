# SPM KA Training

* Do the necessary installations below
* Then start with [Step 01](https://github.com/spmka/training/wiki)
* If you want to use the files for a step, read how to download files for a step at the bottom
* Some helpful youtube channels are listed at the bottom of this page

## Necessary Installations
### Install Node.js and npm
  * Node.js is a Javascript Runtime for server processes
  * npm is the node package manager a tool to manage and download Javascript packages
  * https://nodejs.org/en -> Download the LTS Version (currently: 12.16.1 LTS) and install it
  
  #### Test the installation:
  * Open a cmd shell (cmd.exe).
  * Execute *node -- version* -> You should see the version number.
  * Execute *npm --version* ausführen -> You should see the version number.
  
  #### Configure the proxy for npm:
  * Execute *npm config set proxy http://....:3128*
  * Execute *npm config list* and check the displayed settings. Now it should be possible to download packages.
  
### Install Visual Studio Code
  * Visual Studio Code (VSCode) is a free IDE written in Javascript as an Electron App.
  * Download and install VSCode https://code.visualstudio.com
  * Open VSCode and install some plugins, the description is [here](https://github.com/spmka/training/wiki/VSCode-Plugins)
  
### Install the Angular CLI
  * Angular is a Framework for webbased frontend development for Single Page Applications (SPA).
  * Install the Angular CLI (Command Line Interface) (see also https://cli.angular.io):
  * Open a cmd shell (cmd.exe).
  * Execute *npm install -g @angular/cli*, this command installs the Anglular CLI global (-g) that means independent of a concrete project.

## How to download files for a step
* Go to https://github.com/spmka/training
* Select *Clone or Download* and in the appearing dialog select *Download as zip*

    ![](https://github.com/spmka/training/blob/master/doc/images/download.jpg)
    
 * Extract the zip
 * Copy the files of the step you are interested in into your working directory
 * Optional if not done before, run the command *npm install* to create the nod_modules folder for the needed external packages 
 
## Youtube Channels
### Angular / Typescript / Javascript / CSS
* [Academind](https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w/playlists)
* [Traversy Media](https://www.youtube.com/user/TechGuyWeb/playlists)
* [Fireship](https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA/playlists)
* [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw/playlists)
### Angular Conferences
* [ng-conf](https://www.youtube.com/user/ngconfvideos/featured)
* [Angular Connect](https://www.youtube.com/channel/UCzrskTiT_ObAk3xBkVxMz5g/playlists)
### Testing
* [cypress.io](https://www.youtube.com/channel/UC-EOsTo2l2x39e4JmSaWNRQ/featured)

## Youtube Videos

### Typescript
* [Fireship](https://www.youtube.com/watch?v=ahCwqrYpIuM)

### CSS
* [Traversy Media](https://www.youtube.com/watch?v=yfoY53QXEnI)
* [Web Dev Simplified](https://www.youtube.com/watch?v=1PnVor36_40)

### CSS Grid
* [ng-conf 2019](https://www.youtube.com/watch?v=lh6n0JxXD_g)
* [Fireship](https://www.youtube.com/watch?v=705XCEruZFs)
* [Web Dev Simplified](https://www.youtube.com/watch?v=9zBsdzdE4sM)
* [Traversy Media](https://www.youtube.com/watch?v=jV8B24rSN5o)

### Event Loop
* [Jake Archibald](https://www.youtube.com/watch?v=cCOL7MC4Pl0)

### Async Await
* [Fireship](https://www.youtube.com/watch?v=vn3tm0quoqEo)
* [Traversy Media](https://www.youtube.com/watch?v=rAy_3SIqT-E)
* [Academind](https://www.youtube.com/watch?v=BwuLxPH8IDs)

### Reactive Forms
* [Fireship](https://www.youtube.com/watch?v=vn3tm0quoqE)
* [ng-conf 2019](https://www.youtube.com/watch?v=Rq4vjSkidPk)
* [Angular Connect 2017](https://www.youtube.com/watch?v=CD_t3m2WMM8)
