// Le protocole pour server: http, c'est aussi un module.(objet http)
// il donne accès à plein de méthodes dont createServer

const http = require("http");
//  récupération module http

// const server = http.createServer((Request, Response)=>
// {
//     console.log("Server create succesfully.")
//     if ((Request.url === "/" || Request.url === "/home") && (Request.method === "GET")) {
//         console.log("Vous êtes sur la Homepage");
//     }
//     else{
//         console.log("Vous êtes sur une page qui n' existe pas!");
//     }
    // console.log(Request.method);
    // GET, méthode get est renvoyée
    // console.log(Request.url);
    // / car pas de ressource, voir url
    // si je saisis dans l' url http://localhost:8080/home: /home
    // ses retours sont importants car l'on pourra définir les reponses à envoyer à l' user en fonction de sa dmd

// });
// function callback car en parmètre de la méthode
// http pour fonctionner a besoin de deux paramètres: objet request et objet response
// serveur qui se crée, s' éxecute en arrière plan de la machine, mais est incapable d' écouter des requêtes -> méthode avec 3 paramètres: 
// corps/domaine/fonction callback
// server.listen(8080, "localhost", ()=>{
//     console.log("Server listening on port 8080");
// });
// le serveur tourne 
// Le port 8080, choisi pour des raisons de simplicité (deux fois le port 80 associé au trafic HTTP) permet de faire tourner un second serveur Web sur une même machine quand le port 80 est déjà occupé. Rien n'empêche de choisir un autre port libre, c'est juste une convention tacite.
// http://localhost:8080/ -> Server create succesfully.
// https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module
// serveur tourne car on ne lui a pas demandé d'envoyer une réponse
// les requêtes http lorsqu'elles viennt d'une url, elles utilisent des méthodes.e sont des verbes http: get, post, patch, put, delete.
// En param de la fonction callback l'on a request -> on peut y loger request.methode


// Exercice: 
// Faire vérification pour la page profil, la page contact, et la page home.
// Une fois que nous avons fini l’exercice et testé nos url dans la barre d’adresse, nous pouvons constater que cela fonctionne très bien. Mais nous aimerions en faire plus. 
// En effet nous voudrions afficher directement sur la page la réponse, car l’utilisateur ne navigue pas en regardant la console mais bien en affichant des pages. 
// Voyons cela ensemble :
// Tout d’abord, il faut savoir que lorsque nous envoyons une requête à un serveur il est possible de lui passer des informations sur cette requête dans ce que nous appelons le header. Il en va bien sûr de même pour la réponse, ce qui nous permettra de définir le genre de réponse que le serveur renverra.
// Par exemple le format de la réponse (text, html, json, etc…) ou encore quel port à le droit d’effectuer la requête: c’est ce que l’on appel le CORS (cross-origin resource sharing) qui par défaut ne permet qu'aux requêtes qui proviennent du même serveur et utilisent le même port de s'exécuter.
// Bien définissons ensemble l’en-tête de la réponse, par exemple “text/plain”. Pour ça on utilisera la méthode “setHeader” sur l'objet Response, qui prend en paramètre la clé (“content-type”) et la valeur de l’en-tête. Puis dans les conditions au lieu du “console.log” nous utiliserons “Response.write” pour écrire sur le document. Enfin nous finirons par un Response.end() pour dire au serveur d'arrêter l'exécution de la réponse une fois qu’il a fini ses vérifications.



const server = http.createServer((Request, Response)=>{
    Response.setHeader('content-type', 'text/html; charset=utf-8');
    // html pour balises
    console.log("Server create succesfully.");
    if ((Request.url === "/" || Request.url === "/home") && (Request.method === "GET")) {
        // console.log("Vous êtes sur la Homepage");
        Response.write('<p>Vous êtes sur la Homepage</p>');
    }
    else if ((Request.url === "/profil") && (Request.method === "GET")){
        // console.log("Vous êtes sur la page profil");
        Response.write("<p>Vous êtes sur la page profil</p>");
    }
    else if((Request.url === "/contact") && (Request.method === "GET")){
        // console.log("Vous êtes sur la page contact");
        Response.write("<p>Vous êtes sur la page contact</p>");
    }
    else{
        // console.log("Vous êtes sur une page qui n' existe pas!");
        Response.write("Vous êtes sur une page qui n'existe pas 🍔");
    }
    Response.end();
});


// voir réponse dans réseau tout


server.listen(8080, "localhost", ()=>{
    console.log("Server listening on port 8080");
});

