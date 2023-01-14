## 1. Semester Project App Mongo DB
## 2. Projektbeschreibung

Bei der Applikation handelt es sich um den praktischen Teil des Semesterprojektes von Alex, Ceyda, Milena und Susanne im Kurs Datenbanken. Die Applikation selbst, soll die grundlegenden Crud-Funktionalitäten (create, retrieve, update, delete) ausführen können. Weiterhin soll die Applikation entsprechende Queries in einem MongoDB-Atlas-Cluster persistieren können. Dazu wird ein entsprechendes Cluster an die Applikation angeschlossen.

## 3. Installations/Starthinweise

### Installation

Um das Programm lokal laufen zu lassen, ist das Projekt zu clonen:

**git clone https://github.com/elsensteg/dbsemester.git**

Falls keine Installion von git vorliegt, ist zuerst eine Installation von git vorzunehmen:

**https://www.atlassian.com/de/git/tutorials/install-git**

Da es sich um eine node.js Applikation handelt, ist eine vorhandene node.js-Installation notwendig:

Der Befehl **node -v** zeigt, sofern installiert, die aktuelle Variante an.

Falls node.js nicht installiert ist, so muss dies getan werden. Dazu sind die Schritte unter der offiziellen Homepage zu befolgen:

**https://nodejs.org/de/download/**

Wenn die vorherigen Schritte erfüllt sind, so müssen noch die in der package.json enthaltenden Dependencies lokal installiert werden:

**npm install**

Weiterhin müssen, die aus Sicherheitsgründen in der .env persistierten Zugangsdaten zu MongoDB:

**DB_USERNAME**  <br>
**DB_PASSWORD**

beim Projektteam erfragt werden.


### Start

Die Applikation wird auf root-Projektebene mit folgendem Befehl gestartet:

**node server.js**

Die Applikation selbst kann dann im Browser über folgende URLs gestartet werden:

**http://localhost:3000/display**  <br>
**http://localhost:3000/user**


## 4. Wie kann das Projekt genutzt werden?

Es handelt sich um eine Applikation, die die CRUD-Operation auf entsprechende User ausführen kann.

Unter der Route **http://localhost:3000/user** hat man als Benutzer die Möglichkeit einen neuen User anzulegen. Weiterhin gelangt man über den
Button **Alle Benutzer anzeigen lassen** zur Route **http://localhost:3000/display**  <br>

Unter der Route **http://localhost:3000/display** werden alle persistierten User angezeigt. Weiterhin haben die Benutzer die Möglichkeit vorhandene User zu **bearbeiten** oder zu **löschen**.

## 5. Referenzen

Für die Umsetzung der Applikation und eine funktionelle Verwendung des Techstacks wurden unterschiedliche Quellen und Dokumentationen verwendet:

**https://nodejs.dev/en/learn/**  <br>
**https://docs.npmjs.com/about-npm**  <br>
**https://handlebarsjs.com/**  <br>
**https://www.mongodb.com/docs/atlas/**  <br>
**https://docs.github.com/de**  <br>
**https://mongoosejs.com/**  <br>
**https://expressjs.com/de/**





