# Serveur node


Watcher pour automatiser
->surveille changement et évite relancer serveur

Outil: **nodemon**
npm init
repondre entrée
ou
npm init -y
package json
chosisir page principale dans package main
author anneso
licence logiciel propriétaire
(toutesles dépendances ou package que je vais utiliser,exemple: nodemon)
npm i nodemon
ajout package-lock et node module, et dans json apparaît liste des dépendances
Attention clone git -> retirer node modules:
**gitignore**
.gitignore /node_modules pr push

lancement terminal nodemon nodeServer
terminal -> npm i
puis npm start

(Il y a aussi des dépendances fontawesome par exemple)

{
  "name": "serveur_node",
  "version": "1.0.0",
  "description": "",
  "main": "nodeServer.js",
  "scripts": {
    "start": "nodemon nodeServer",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "AnneSo",
  "license": "ISC",
  "dependencies": {
    "nodemon": "^2.0.22"
  }
}

Autre package:

**express**:
il permet de fournir des outils robustes pour serveur http
solution pour les appli à page unique,hybrides, ...

Ici, création **single page application** (SPA)
avec rendu différents, un seul script, il n' y a que la valeur de la var change seulement.

faire get pour que si on est sur l'url comme ressource/ redirige vers /home

**middleware**:
principe du middleware use: si au début ne va pas chercher ailleurs, boucle infinie. Dès qu'il éxécute ne va pas à la suivante,pour dire par défaut tu fais ça mais continue:
il faut ajouter **next**.


Ajout img index erreur404:
https://www.donskytech.com/how-to-serve-static-files-in-node-js-and-express-server/

Il faut donc créer un dossier public pour les ressources distantes.

Autre midleware tiers:
npm i **morgan**.



Voir nav pour naviguer entre toutes les pages.