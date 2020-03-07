# SPM KA Training

* [Notwendige Instalationen](https://github.com/spmka/training#notwendige-installationen)

## Notwendige Installationen
### NodeJS und npm
  * node ist eine Javascript Runtime für Serverprozesse. 
  * npm ist der node package manager ein Tool zum Verwalten und Herunterladen von Javascript Paketen.
  * https://nodejs.org/en/ -> Die LTS Version herunterladen (aktuell: 12.16.1 LTS) und installieren.
  
  #### Die Installation testen:
  * Eine Kommandozeile (cmd.exe) öffnen.
  * In ein beliebiges Verzeichnis wechseln.
  * *node -- version* ausführen -> Die Versionsnummer sollte angezeigt werden.
  * *npm --version* ausführen -> Die Versionsnummer sollte angezeigt werden.
  
  #### Den Proxy für npm confiogurieren:
  * *npm config set proxy http://....:3128* eingeben.
  * *npm config list* ausführen um die vorgenommene Einstellung zu prüfen, jetzt sollte es für npm möglich sein Pakete aus dem Internet zu laden.
  
### Visual Studio Code
  * Visual Studio Code ist eine frie IDE.
  * https://code.visualstudio.com/ -> herunterladen und installieren.
  
### Angular
  * Angular ist ein Framework zur Webbasierten Frontendentwicklung für Single Page Applications.
  * Nachdem NodeJS und Visual Studio Code installiert sind wird das Angular CLI (Command Line Interface) installiert (siehe auch https://cli.angular.io/).
  * Hierzu eine Kommandozeile (cmd.exe) öffnen.
  * In ein beliebiges Verzeichnis wechseln.
  * *npm install -g @angular/cli* ausführen, dieser Befehl installiert das Anglular CLI global (-g) also unabhängig von einem konkreten Projekt.
