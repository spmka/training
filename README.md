# SPM KA Training

* Do the necessary installations below
* Then start with [Step 01](https://github.com/spmka/training/wiki)
* If you want to use the files for a step, read how to download files for a step at the bottom

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
  * Execute *npm config list* aand check the displayed settings. Now it should be possible to download packages.
  
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
