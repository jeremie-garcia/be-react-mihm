# Bureau d'étude [React](https://fr.reactjs.org/) pour le MIHM (version 2020)

## Application :
L'application finale est visible ici : [BE-react-MIHM](https://jeremie-garcia.github.io/be-react-mihm/)

## Objectifs :
A l'issu de ce BE, l'élève sera capable de :
* mettre en oeuvre le framework react pour réaliser une application interactive affichant des plans de vols sur une carte
* utiliser des composants issus de librairies externes (leaflet, bootstrap)
* mettre en oeuvre des routage et des templates
* mettre en oeuvre un pattern flux (via redux) pour gérer l'état de l'application


## Démarrage
Pour créer une application React initiale, vous pouvez utiliser  [Create React App](https://fr.reactjs.org/docs/create-a-new-react-app.html).

Pour cela vous pouvez utiliser la commande suivante :
```shell script
npm init react-app be-react
```
Cette commande va créer plusieurs fichiers et dossiers vous facilitant le travail de mise en place et celui de développement.
En particulier le script

```shell script
npm run start
```
Vous permettra de lancer l'application en mode de développement.
Par défaut, des outils comme [babel](https://babeljs.io/) et [webpack](https://webpack.js.org/) sont utilisés pour traiter tout vos fichiers, les convertir et les optimiser.
Nous ne traiterons pas de ces outils dans le BE mais nous les utiliserons.
A noter, que la commande start utilise des outils qui surveillent votre code pour le mettre à jour dès que vous sauvegardez un fichier html, css ou js.


## Récupération des données
Nous fournissons deux fichiers de données pour ce BE, l'un étant une version simplifiée (avec moins de données) que l'autres.
Vous pouvez les récupérer ici [plans-de-vols-complet](./db/FPL-20180119.json) et ici [plans-de-vols-extraits](./db/FPL-20180119-extract.json).
Ces fichiers json contiennent des liste d'aéroports aven nom et coordonnées GPS, des listes de balises avec nom et coordonnées GPS ainsi que des plans de vols.

Vous devez copier ces fichier dans une dossier (par exemple /db) dans le dossier src de votre application.

Vous devez également étudier ces fichiers pour comprendre leur structure et les données qu'ils contiennent car ce sont les données que nous utiliserons dans l'application React.

## Créations de l'acceuil, des routes et de la navigation
Nous allons commencer par réaliser les parties statiques, la page d'acceuil et la navigation de notre application.
Nous alons agalement réaliser des pages pour Carte et Balises.

Le routage en React se fera avec la librairie [router-dom](https://reactrouter.com/web/guides/quick-start) que vous devez installer via la commande :
```shell script
npm install --save react-router-dom
```

### Mise en place du squelette et des routes de l'application
L'application dispose d'une navigation permettant de retourner à l'acceuil, à la page balises et à la page carte.
Ensuite il faut créer plusieurs routes pour afficher le contenu de chacunes des pages (acceuil, balises et carte).
Enfin, un footer peut être ajouté (bonus).

### Navigation
Pour la Navigation et la routage, il faut utiliser des Composants fournis par le module router-dom.
En particulier, les composants suivants vous seront utiles.
```shell script
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";
```
Vous pouvez vous inspirer d'exemples comme ceux de [basic_router](https://gist.github.com/siakaramalegos/df4620c52e829f6107c75d5c3f0ad7f5) ou [react-router](https://reactrouter.com/web/guides/quick-start).
Les pages au contenu dynamique (balises et carte) seront traitées un peu plus tard mais pour l'instant nous nous contenterons d'ajouter un balise h1 avec un titre correspondant à la page.


### Utilisation de classe Bootstrap
Nous utiliserons aussi Bootstrap et la librarie [React-Boostrap](https://react-bootstrap.github.io/getting-started/introduction) qui fournie des composant React pour Bootstrap que vous pouvez installer avec la la commande :

```shell script
npm install --save react-bootstrap bootstrap
```

Pour utiliser bootsrap comme feuille de style, il faut l'inclure dans le fichier index.js avec la ligne suivante :
import 'bootstrap/dist/css/bootstrap.css';

Utilisez ce contenu et des composants bootstrap (Jumbotron, Container, Row, Col) pour réaliser la page home.


```shell script
 <h1> Visualisation de plans de vol</h1>
                        <p>
                            Il s'agit d'une SPA (Single Page Application codée avec React pour le MIHM.
                        </p>
                        <p>
                            <a href="https://jeremie-garcia.github.io/be-react-mihm/"> Pour voir une version
                                finale de ce BE </a>
                        </p>
                        <p>
                            <a href="https://github.com/jeremie-garcia/be-react-mihm"> Pour le dépot initial du
                                BE et des instructions </a>
                        </p>

                        <h2>Détail des pages disponibles</h2>
                        <p> La page Carte permet de voir les plans vols sur une carte et des les
                            modifier.</p>
                        <p> La page Balise permet de voir les balises dans une liste.</p>
```

### Navigation Bootstrap (Bonus)
Vous pouvez également réaliser la navigation avec des composants Bootstrap.
Pour que les deux librairies fonctionnent bien ensemble il faut utiliser la librairie [React-router-bootstrap](npm install react-bootstrap bootstrap) qui s'installe avec la commande :
```shell script
npm install --save react-router-bootstrap
```
Cette page fournie un exemple de [navigation react bootstrap](https://react-bootstrap.github.io/components/navbar/) et celle-ci l'utilisation de [react-bootstrap-router](https://github.com/react-bootstrap/react-router-bootstrap)

## Premier Composant : la liste des balises

Nous allons créer un composant pour afficher la liste des balises dans une table bootstrap.
Pour créer un composant, il faut créer un fichier balise.js qui contient le code suivant :

```shell script
import React from 'react';

function Balises(props){
    return (
            <div >
               <p>Composant Balise à remplir</p>
            </div>
    );
};

export default Balises;
```

Vous pouvez utiliser ce composant dans le fichier App.js de la façon suivante  :
<Balises/>.

Il va maintenant falloir créer une table bootstrap et afficher les données de balises contenu dans notre fichier json.
Je vous conseille de lire ce fichier depuis le fichier App.js avec une instruction du type et de le passer comme props à votre composant Balise.
POur en savoir plus sur les props, lisez ce [guide](https://fr.reactjs.org/docs/components-and-props.html).
Vous devez pouvoir afficher l'id de la premiere balise dans votre composant Balise avant de continuer.
```shell script
const data = require("./db/FPL-20180119-extract.json");
```

Pour générer une table rapidement affichant l'ensemble des données, nous pouvons utiliser la librairie
[react-bootstrap-table-next](https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/getting-started.html).
Pensez à utiliser des classe Bootstrap comme un container sur cette page.


## Deuxième partie : la carte
Pour afficher les plans de vols, nous alons tout d'abord afficher une carte avec les aéroports et les balises.
Nous afficherons ensuite les plans de vols dans une liste puis, lorsqu'ils sont sélectionés, les plans de vols sur la carte.

### Composant carte leaflet

### Ajout de markers sur la carte (beacons)

### Ajout des aéroports

### Liste des plans de vol

### Sélection de plan de vol

### lien entre les composants
COntainers
hooks

