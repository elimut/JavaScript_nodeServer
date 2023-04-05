const fs = require('fs');
// file system
// Le module de système de fichiers Node.js vous permet de travailler avec le système de fichiers de votre ordinateur.

// fs.mkdir('./monDossier', (error)=>{
//     if(error){
//         console.error(error);
//     }
//     else{
//         console.log('dossier créé');
//     }
// })
// La méthode fs.mkdir() i Node.js est utilisée pour créer un répertoire de manière asynchrone.
// param: path et callcback
// céation dossier

// méthode synchrone pour dire si dossier existe déjà:
if (fs.existsSync('./monDossier')) {
    fs.rmdir('./monDossier', (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('dossier supprimé');
        }
    })
} else {
    fs.mkdir('./monDossier', (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('dossier créé');
        }
    })
}
// création suppression de dossier 