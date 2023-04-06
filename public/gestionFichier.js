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
// if (fs.existsSync('./monDossier')) {
//     fs.rmdir('./monDossier', (error) => {
//         if (error) {
//             console.error(error);
//         } else {
//             console.log('dossier supprimé');
//         }
//     })
// } else {
//     fs.mkdir('./monDossier', (error) => {
//         if (error) {
//             console.error(error);
//         } else {
//             console.log('dossier créé');
//         }
//     })
// }
// création suppression de dossier 

// fs.writeFileSync('./monDossier/monFichier.txt', 'Création de fichier', (err) => 
//     {
//         if (err){
//             console.error('Fichier Erreur !');
//         }
//         else{
//             console.log('dossier créé');
//         }
// });
//Création de fichier dans monDosier

// fs.readFile('./monDossier/monFichier.txt', (err, Data) => 
//     {
//         if (err){
//             console.error('Fichier Erreur !');
//                     }
//         else{
//             // console.log(Data);
//             console.log(Data.toString());
//         }
// });
// lecture du fichier: <Buffer 43 72 c3 a9 61 74 69 6f 6e 20 64 65 20 66 69 63 68 69 65 72 20 61 76 65 63 20 66 73 77 72 69 74 65 73 79 6e 63 0d 0a 0d 0a 4e 6f 64 65 20 70 65 75 74 ... 33 more bytes>


if(fs.existsSync('./monDossier/monFichier.txt')){
    fs.unlink('./monDossier/monFichier.txt', (Error)=>{
        if(Error){
            console.error(Error);
        }else{
            console.log("fichier effacé")
        }
    })
}else{
    fs.writeFile('./monDossier/monFichier.txt', 'Création de fichier', (Error) => 
    {
        if (Error){
            console.error(Error);
        }
        else{
            console.log('dossier créé');
        }
    })
}



