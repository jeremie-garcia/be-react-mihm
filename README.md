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

## Créations de l'accueil, des routes et de la navigation
Nous allons commencer par réaliser les parties statiques, la page d'accueil et la navigation de notre application.
Nous alons agalement réaliser des pages pour Carte et Balises.

Le routage en React se fera avec la librairie [router-dom](https://reactrouter.com/web/guides/quick-start) que vous devez installer via la commande :
```shell script
npm install --save react-router-dom
```

### Mise en place du squelette et des routes de l'application
L'application dispose d'une navigation permettant de retourner à l'accueil, à la page balises et à la page carte.
Ensuite il faut créer plusieurs routes pour afficher le contenu de chacunes des pages (accueil, balises et carte).
Enfin, un footer peut être ajouté (bonus).

### Navigation
Pour la Navigation et la routage, il faut utiliser des Composants fournis par le module router-dom.
En particulier, les composants suivants vous seront utiles.
```javascript
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


```html
 <h1> Visualisation de plans de vol</h1>
                        <p>
                            Il s'agit d'une SPA (Single Page Application codée avec React pour le MIHM.
                        </p>
                        <p>
                            <a href="https://github.com/jeremie-garcia/be-react-mihm"> Pour le dépot initial du
                                BE et des instructions </a>
                        </p>

                        <h2>Détail des pages disponibles</h2>
                        <p> La page <Link to="carte">Carte</Link>  permet de voir les plans vols sur une carte et de les
                            modifier.</p>
                        <p> La page <Link to="balise">Balise</Link> permet de voir les balises dans une liste.</p>
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

```javascript
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
```html
<Balises/>.
```

Il va maintenant falloir créer une table bootstrap et afficher les données de balises contenu dans notre fichier json.
Je vous conseille de lire ce fichier depuis le fichier App.js avec une instruction du type et de le passer comme props à votre composant Balise.
POur en savoir plus sur les props, lisez ce [guide](https://fr.reactjs.org/docs/components-and-props.html).
Vous devez pouvoir afficher l'id de la premiere balise dans votre composant Balise avant de continuer.
```javascript
const data = require("./db/FPL-20180119-extract.json");
```

Pour générer une table rapidement avec l'ensemble des données, nous pouvons utiliser la librairie
[react-bootstrap-table-next](https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/getting-started.html).
Pensez à utiliser des classe Bootstrap comme un container sur cette page.

Pour ajouter des fonctionnalité de pagination, la librairie [react-bootstrap-table2-paginator](https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/basic-pagination.html) s'intègre simplement.


Vous devez maintenant avoir une application avec plusieurs pages/route, l'accueil et les la liste de balises affichée.
Nous allons passer à 'laffichage des plans de vols dans une liste te sur une carte.

## Deuxième partie : la carte
Pour afficher les plans de vols, nous allons tout d'abord afficher une carte avec les aéroports et les balises.
Nous afficherons ensuite les plans de vols dans une liste puis, lorsqu'ils sont sélectionés, les plans de vols sur la carte.

### Composant carte leaflet
Vous allez créer un composant Map qui sera affichée dans la page Carte en dessous du titre.
Nous allons utiliser [React Leaflet](https://react-leaflet.js.org/) pour faciliter l'intérgration d'une carte Leaflet.
Suivez les exemples pour afficher une carte centrée sur la france lors de l'affichage de la page.
Pensez à ajouter du style à vos composant via un fichier Map.css que vous chargerez das votre composant.
Il vous faut une largeur de 100% et une hauteur minimale pas trop faible.
Pensez à mettre en forme la page avec des composants bootstrap.


### Ajout de markers sur la carte (beacons et aéroport)
Pour ajouter les marqueurs de balises et d'aéroport sur la carte, nous devons passer la liste des balises et d'aéroports à notre composant comme props.
Vous devriez avoir quelque chose ressemblant à cela :

```javascript
<Map airports={airports_array} beacons={beacons_array}/>
```
La documentation de [leafLet React](https://react-leaflet.js.org/docs/example-layers-control) donne des précisions sur la façons de créer des Overlays avec des markers à l'intérerieur.

<details>

<summary>Aide</summary>
 
```html
 <LayersControl>
                <BaseLayer checked name="OpenStreetMap">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </BaseLayer>
                <Overlay checked name = "airports">
                    <LayerGroup  >
                        {airportsMarkers}
                    </LayerGroup>
                </Overlay>
</LayersControl>
```
</details>

Dans cet exemple de code, l'élément {airportsMarkers} correspond à une liste de composants React créés dans notre composants carte qui représentent les aéroports dans des marqueurs.

Pour construire cette liste, nous allons itérer sur la props.airports du composant Map. Une approche classique est d'utiliser la fonction [Map](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map) qui permet de transformer une liste en une autre liste.
Voici un exemple d'utilisation de [map avec React](https://fr.reactjs.org/docs/lists-and-keys.html).
Ici, nous voulons transformer la liste d'objet aéroport et liste de [Markers Leaflet](https://react-leaflet.js.org/docs/start-setup).
Ainsi pour chaque élements de la liste d'aéroport, vous allez créer un composant Marker. Vous pouvez utiliser une icone dédiée en créant une Icone Leaflet avec la fonction L.Icon().
Attention, avec React, les composants d'une liste doivent avoir un champs [key unique](https://fr.reactjs.org/docs/lists-and-keys.html) qui va permettre à React de les mettre à jour correctement. Vous pouvez utiliser le nom de l'aéroport comme clef.

<details>

  <summary>Aide</summary>
  
```javascript
const airportsMarkers = props.airports.map((apt) =>
            <Marker position={[apt.latitude, apt.longitude]}
                    icon = {iconApt}
                    key={apt.id}>
                <Popup>
                    Airport Name : {apt.name}
                    Airport Id : {apt.id}
                </Popup>
            </Marker>
    );
  ```
</details>

Les aéroports doivent désormais s'afficher sur la carte dans un calque dédié.
Procédez de même pour afficher les balises. Vous pouvez utiliser une icone spécifique ou utiliser le composant [Circle](https://react-leaflet.js.org/docs/api-components/#pane-behavior) de Leaflet.


### Liste des plans de vol
Nous allons maintenant afficher une liste des plans de vols à gauche de notre page.
Pour cela vous devez modifier votre mise en page avec Bootstrap pour avoir une colone de la largeur 3 pour la liste des vols et une autre de largeur 9 pour la carte.
Créez ensuite un composant Fpls.js qui récupère les plans de vols et ajoutez le à votre application.

Pour créer le contenu du composant, vous pouvez utiliser les composants [ListGroup et ListItem](https://react-bootstrap.github.io/components/list-group/) de React bootstrap.
Ici encore, vous pouvez utiliser la fonction map pour transformer la liste des plans de vols en liste de composants React.
Pensez à donner une hauteur à votre composant ListGroup afin qu'il s'affiche correctement. Pour le rendre scrollable, l'option  overflowY: 'scroll' permet d'obtenir le comportement.

<details>

  <summary>Aide</summary>
  
```html
<ListGroup style={{
                cursor: "pointer",
                width: '100%',
                height:'60vh',
                overflowY: 'scroll'
            }}>
                {fpls_items}
</ListGroup>
  ```
</details>

### Sélection de plan de vol - Les états
Pour sélectionner des plan de vol dans la liste, nous allons créer un état selection qui gardera en mémoire les IDs des plans de vols sélectionnés.
Pour comprendre le fonctionnement des états en React je conseille la lecture de cet [article](https://fr.reactjs.org/docs/hooks-state.html).
Lorsqu'un état est mis à jour dans l'application, React s'occupe de mettre à jour les composants qui utilisent cet état.

<details>

  <summary>Aide</summary>
  
```javascript
const [selection, setSelection] = useState([]);
  ```
</details>


Dans notre application, on souhaite que l'apparence d'un vol sélectionné soit dépendante de la présence de ce vol dans l'état de selection (en utilisant par exemple la propriété active= (true or false) de ListGroupItem).
Essayer votre code en initialisant l'état selection avec quelques IDS de vols existants;

Pour modifier notre état selection, nous devons ajouter un abonnement à l'évenement click des ListGroupItem.
Par exemple nous pouvons appeler la fonction update selection qui mettra à jour l'état de selection avec l'id du plan de vol correspondant.

```javascript
onClick={() => toggleSelection(fpl.id)}>
```
Si l'état ne contient pas l'ID, on l'ajoute, si il le contient, on l'enlève. pensez à utiliser la méthode setSelection pour remplacer le tableau par un nouveau.
Pour ajouter un élément et faire une copie, cette notation javascript est pratique et très utilisée 

```javascript
const newSelection = [...selection, newfplId];
```

Vous devez maintenant avoir une liste fonctionnelle qui met à jour la liste des flights IDs dans l'état selection.

### Lien entre les composants, utilisation de containeur
Pour faire le lien entre le composant Fpls et Map, il est conseillé de créer un composant container FplsMap.js qui s'occupera des données d'état et passera celle ci comme des props aux composants Fpls et Map.
Modifier votre architecture pour utiliser ces nouveau composants et faire en sorte que l'état sélection soit dans le composant FplsMap.js.

Deux états seront utilisés (il est possible de faire avec un seul mais cela permet de ne pas trop modifier le code fait jusqu'à présent) dans le composant FplsMap qui seront passés aux composants Fpls et Map comme des props.

```javascript
const [selection, setSelection] = useState([]);
const [selected_fpls, setSelectedFpls] = useState([]);
```

La méthode toggleSelection doit être déplacée dans FplsMap également et fournie au composant Fpls comme props.

<details>

  <summary>Aide</summary>
  
```html
   <Row>
            <Col>
                <h4>Plans de vol</h4>
                <Fpls fpls={props.fpls} onClick={toggleSelection} selection={selection}/>
            </Col>
            <Col xs={9}>
                <h4>Carte</h4>
                <Map airports={props.airports} beacons={props.beacons} fpls={selected_fpls}/>
            </Col>
    </Row>
  ```
</details>

Vous devez avoir un comportement similaire à celui précédemment mais avec une nouvelle architecture.

### Affichage des Plans de vols selectionnés.
Pour afficher les plans de vols sélectionnés, le composant carte utilisera les données de l'état selected_fpls.
Commencer par modifier cet état lorsque la l'état sélection est modifié.
Pour cela nous pouvons utiliser un [effet React](https://fr.reactjs.org/docs/hooks-reference.html#useeffect) qui modifiera la liste des plans de vols selectionnés lorsque l'état selection est modifié.
Pour faciliter la création d'une liste de plan de vol à partir d'un Id dans la selection, vous pouvez créer un dictionnaire des plans de vols par id.
Une façon courante de réaliser cette opréation en javascript se fait avec l'utilisation de la fonction [reduce](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce).

```javascript
const fpls = props.fpls;
const fpls_dict = fpls.reduce((a,x) => ({...a, [x.id]: x}), {});
```

<details>

  <summary>Aide</summary>
  
```javascript
useEffect(
        () => {
            if(selection.length>0){
                setSelectedFpls(selection.map(id => fpls_dict[id]));
            }else{
                setSelectedFpls([]);
            }
        },
        [selection],
    );

  ```
</details>

Nous avons donc désormais une liste de plan de vol qui est mise à jour lorsque la selection dans la liste change.
Cette liste étant fournie au composant Map comme props. Nous allons nous en servir pour afficher les plans de vols sur la carte.


Un plan de vol contient une aéroport de départ et une liste de balise.
Pour l'afficher sur la carte nous pouvons utiliser un composant Leaflet [Polyline](https://react-leaflet.js.org/docs/api-components#polyline) que l'on construit à partir d'une liste de corrdonnées GPS.
Ainsi, pour chaque élements du plan de vol il faut récupérer les coordonnées GPS et les ajouter dans un tableau.
```html
 <Polyline
                positions={getFplPositions(fpl)}
                color="purple"
                weight={2}
            >
  ```
Pour obtenir ces coordonnées plus simplement, vous pouvez créer un dictionnaire qui associe à chaque ID (balise et aéroport) l'objet concerné ou ses coordonées.
````javascript
const coords_dict = {...airports_dict, ...beacons_dict};
````
En parcourant ce dictionnaire pour l'aéroport de départ, la liste des balises et l'aéroport d'arrivée vous povez construire la listes des posisiotns nécessaires.
<details>

  <summary>Aide</summary>
  
```javascript
 const getFplPositions = (fpl) => {
        const bPositions = fpl.beacons.map((b) => [coords_dict[b.name].latitude, coords_dict[b.name].longitude]);
        return [
            [coords_dict[fpl.d_airport].latitude,coords_dict[fpl.d_airport].longitude],
            ...bPositions,
            [coords_dict[fpl.a_airport].latitude,coords_dict[fpl.a_airport].longitude]
        ] };

```
</details>

Améliorez l'affichage en ajoutant des Markers pour chaque balises du plan de vol en indiquant le nom, le temps de passage et l'altitude.


# Troisième partie : Modification d'un plan de vol et store Redux
TBD

