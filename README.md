# Serveur node


watcher pour automatiser
surveille changeùent et evite relancer serveur

outil: nodemon
npm init
repondre entrée
ou
npm init -y
package json

chosisir page principale dans package main

author anneso
licence logiciel propriétaire

tts dépendances ou package que je vais utiliseer ex nodemon

google nodemon
npm i nodemon
ajoit package-lock et node module, et dans json appa liste des dépendances
gitignore
.gitignore /node_modules pr push

lancement terminal nodemon nodeServer

attention clone git : retire node modules
terminal -< npm i
puis npm start

dependences fontawesome
npm i 

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

autre package:
express

fournir des outils robustes pour serveur http
solution pour les appli à page unique,hybrides, ...

ici créa single page application spa
avec rendu différents, un seul script
la valeur de la var change seulement

install express dans app:
npm install express
app dans package json
middleware
----------

faire get pour que si on est sur l'url comme ressource/ redirige vers /home

middleware:
principe du middleware use, si au début ne va pas chercher ailleurs, boucle infinie. des qu'il éxécute ne va pas à la suivante
pour dire par défaut tu fais ça mais continue:
il faut ajouter next

ajout img index erreur404 
https://www.donskytech.com/how-to-serve-static-files-in-node-js-and-express-server/

creer dossier public
ressources distantes

midleware tiers:
npm i morgan

faire nav qui permet de na entre tts les pages