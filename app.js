// install package express(npm i express)
const  express  =  require( 'express' );
const morgan = require('morgan');
const  app  =  express ( );
const port = 3000;

app.use(express.static('public'));
// dossier publicDecrypt, ressources distantes
app.use(morgan("dev"));
app.use((req, res, next) =>{
    console.log('Effectuée: ' + Date().toString());
    next();
});
app.get( '/home' ,  function  ( req ,  res)  { 
//   res.send ( 'Hello World' );
    // res.sendFile("./HTML/index.html", {root:__dirname});
    res.status(200).sendFile("./public/HTML/index.html", {root:__dirname});
    // 200 statut erreur réponse positive méthode get
    // app.get marche comme if else, si répond oui s' arrête si ko continue au prochain get, jusqu'au "else"; Le else = app.use, appliquer par défaut
});
app.get( '/contact' ,  function  ( req ,  res )  { 
    res.status(200).sendFile("./public/HTML/contact.html", {root:__dirname});
});
app.get( '/profil' ,  function  ( req ,  res )  { 
    res.status(200).sendFile("./public/HTML/profil.html", {root:__dirname});
});
app.get( '/product' ,  function(req ,  res){ 
    res.status(200).sendFile("./public/HTML/product.html", {root:__dirname});
});
app.get( '/' , function( req , res ){ 
    res.status(301).redirect('/home');
});

// app.use((req, res) =>{
//     res.status(404).sendFile("./HTML/404.html", {root:__dirname});
// });

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});
// changer main dans app.js et start nodemon app dans package json
// localhost:3000 -> hello world

// chemin si erreur -> super global: {root:__dirname};__dirnameest une variable d'environnement qui vous indique le chemin absolu du répertoire contenant le fichier en cours d'exécution.