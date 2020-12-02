# Bureau d'étude React pour le MIHM (version 2020)

##Application :
L'application finale est visible ici : [BE-react-MIHM](https://jeremie-garcia.github.io/be-react-mihm/)

##Objectifs :
A l'issu de ce BE, l'élève sera capable de :
* mettre en oeuvre le framework react pour réaliser une application interactive affichant des plans de vols sur une carte
* utiliser des composants issus de librairies externes (leaflet, bootstrap)
* mettre en oeuvre des routage et des templates
* mettre en oeuvre un pattern flux (via redux) pour gérer l'état de l'application


## Démarrage
Pour créer une application React initiale, vous pouvez utiliser  [Create React App](https://fr.reactjs.org/docs/create-a-new-react-app.html).

Pour cela vous pouvez utiliser la commande suivante :
```sh
npm init react-app be-react
```
Cette commande va créer plusieurs fichiers et dossiers vous facilitant le travail de mise en place et celui de développement.
En particulier le script

```sh
npm run start
```
Vous permettra de lancer l'application en mode de développement.
Par défaut, des outils comme [babel](https://babeljs.io/) et [webpack](https://webpack.js.org/) sont utilisés pour traiter tout vos fichiers, les convertir et les optimiser.
Nous ne traiterons pas de ces outils dans le BE mais nous les utiliserons.
A noter, que la commande start utilise des outils qui surveillent votre code pour le mettre à jour dès que vous sauvegardez un fichier html, css ou js.


## Récupération des données
Nous fournissons deux fichiers de données pour ce BE, l'un étant une version simplifiée (avec moins de données) que l'autres.
Vous pouvez les récupérer ici [plans-de-vols](./db/FPL-20180119.json) [extrait](./db/FPL-20180119-extract.json).


## Créations des routes et de la navigation
Nous allons commencer par des parties statiques, la page d'acceuil et la navigation.
Les pages au contenu dynamique (balises et carte) seront traitées un peu plus tard.

