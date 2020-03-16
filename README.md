# SPM KA Training

* Do the necessary installations below
* Then start with [Step 01](https://github.com/spmka/training/wiki)

## Necessary Installations
### NodeJS and npm
  * nodeJS is a Javascript Runtime for serverprocessed. 
  * npm is the node package manager a tool to manage and download Javascript packages.
  * https://nodejs.org/en -> Download the LTS Version (currently: 12.16.1 LTS) and install it
  
  #### Test the installation:
  * Open a cmd shell (cmd.exe).
  * Execute *node -- version* -> You should see the version number.
  * Execute *npm --version* ausführen -> You should see the version number.
  
  #### Configure the proxy for npm:
  * Execute *npm config set proxy http://....:3128*
  * Execute *npm config list* aand check the displayed settings. Now it should be possible to download packages.
  
### Visual Studio Code
  * Visual Studio Code (VSCode) is a free IDE written in Javascript as an Electron App.
  * Download and install VSCode https://code.visualstudio.com
  
### Angular
  * Angular is a Framework for webbased frontend development for Single Page Applications (SPA).
  * Install the Angular CLI (Command Line Interface) (see also https://cli.angular.io):
  * Open a cmd shell (cmd.exe).
  * Execute *npm install -g @angular/cli*, this command installs the Anglular CLI global (-g) that means independent of a concrete project.
