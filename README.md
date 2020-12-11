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
Le BE ne traite pas de ces outils directement mais le utilise.
A noter, que la commande start utilise des outils qui surveillent votre code pour le mettre à jour dès que vous sauvegardez un fichier html, css ou js.


## Récupération des données
Nous fournissons deux fichiers de données pour ce BE, l'un étant une version simplifiée (avec moins de données) que l'autres.
Vous pouvez les récupérer ici [plans-de-vols-complet](./db/FPL-20180119.json) et ici [plans-de-vols-extraits](./db/FPL-20180119-extract.json).
Ces fichiers json contiennent des liste d'aéroports aven nom et coordonnées GPS, des listes de balises avec nom et coordonnées GPS ainsi que des plans de vols.

Vous devez copier ces fichier dans une dossier (par exemple /db) dans le dossier src de votre application.

Vous devez également étudier ces fichiers pour comprendre leur structure et les données qu'ils contiennent car ce sont les données que vous utiliserez dans l'application React.

## Créations de l'accueil, des routes et de la navigation
Vous allez commencer par réaliser les parties statiques, la page d'accueil et la navigation de notre application.
Vous allez également réaliser des pages pour Carte et Balises.

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
Les pages au contenu dynamique (balises et carte) seront traitées un peu plus tard mais pour l'instant vous ajouterez une balise h1 avec un titre correspondant à la page.


### Utilisation de classe Bootstrap
Vous utiliserez aussi Bootstrap et la librarie [React-Boostrap](https://react-bootstrap.github.io/getting-started/introduction) qui fournie des composant React pour Bootstrap que vous pouvez installer avec la la commande :

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

Créez un composant pour afficher la liste des balises dans une table bootstrap.
Pour créer un composant, il faut ajouter un fichier balise.js qui contient le code suivant :

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

Pour générer une table rapidement avec l'ensemble des données, vous pouvez utiliser la librairie
[react-bootstrap-table-next](https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/getting-started.html).
Pensez à utiliser des classe Bootstrap comme un container sur cette page.

Pour ajouter des fonctionnalité de pagination, la librairie [react-bootstrap-table2-paginator](https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/basic-pagination.html) s'intègre simplement.


Vous devez maintenant avoir une application avec plusieurs pages/route, l'accueil et les la liste de balises affichée.

## Deuxième partie : la carte
Pour afficher les plans de vols, vous devez être capable d'afficher une carte avec les aéroports et les balises.
Vous afficherez ensuite les plans de vols dans une liste puis, lorsqu'ils sont sélectionés, les plans de vols sur la carte.

### Composant carte leaflet
Vous allez créer un composant Map qui sera affichée dans la page Carte en dessous du titre.
Vous pouvez utiliser [React Leaflet](https://react-leaflet.js.org/) pour faciliter l'intégration d'une carte Leaflet.
Suivez les exemples pour afficher une carte centrée sur la france lors de l'affichage de la page.
Pensez à ajouter du style à vos composant via un fichier Map.css que vous chargerez das votre composant. Le composant MapContainer de ReactLealft a comme nom de classe leaflet-container.
Il vous faut une largeur de 100% et une hauteur minimale pas trop faible.
Pensez à mettre en forme la page avec des composants bootstrap.

````css
.leaflet-container {
    width: 100%;
    height: 60vh;
}
````


### Ajout de markers sur la carte (beacons et aéroport)
Pour ajouter les marqueurs de balises et d'aéroport sur la carte, vous devez passer la liste des balises et d'aéroports à notre composant comme props.
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

Pour construire cette liste, vous devez itérer sur la props.airports du composant Map. Une approche classique est d'utiliser la fonction [Map](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map) qui permet de transformer une liste en une autre liste.
Voici un exemple d'utilisation de [map avec React](https://fr.reactjs.org/docs/lists-and-keys.html).
Il faut transformer la liste d'objet aéroport et liste de [Markers Leaflet](https://react-leaflet.js.org/docs/start-setup).
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
Pour afficher une liste des plans de vols à gauche de la page vous devez modifier votre mise en page avec Bootstrap pour avoir une colonne de la largeur 3 pour la liste des vols et une autre de largeur 9 pour la carte.
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
Pour sélectionner des plan de vol dans la liste, vous pouvez créer un état selection qui gardera en mémoire les IDs des plans de vols sélectionnés.
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

Pour modifier  l'état selection, ajoutez un abonnement à l'évenement click des ListGroupItem.
Par exemple vous pouvez appeler la fonction updateSelection qui mettra à jour l'état de selection avec l'id du plan de vol correspondant.

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

L'état de selection sera situé dans le composant FplsMap qui le passera aux composants Fpls et Map comme des props.
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
                <Map airports={props.airports} beacons={props.beacons} fpls={props.fpls} selection={selection}/>
            </Col>
    </Row>
  ```
</details>

Vous devez avoir un comportement similaire à celui précédemment mais avec une nouvelle architecture avant de poursuivre.

### Affichage des Plans de vols selectionnés.
Pour afficher les plans de vols sélectionnés, le composant carte utilisera les données des plans de vol et de la selection.
Pour faciliter l'utilisation de ces données, vous pouvez créer un dictionnaire des plans de vol par ID. Ce dictionnaire vous permettra ensuite de construire une liste des plans de vols sélectionnés à partir de leurs IDs.
Une façon courante de réaliser cette opréation en javascript se fait avec l'utilisation de la fonction [reduce](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce).

```javascript
const fpls = props.fpls;
const fpls_dict = fpls.reduce((a,x) => ({...a, [x.id]: x}), {});
```

<details>

  <summary>Aide</summary>
  
```javascript
 const selected_fpls = props.selection.map((id) => fpls_dict[id]);
  ```
</details>

Vous devez avoir une liste de plan de vol qui est mise à jour lorsque la selection dans la liste change.
Cette liste étant fournie au composant Map comme props. Vous allez vous en servir pour afficher les plans de vols sur la carte.

Un plan de vol contient une aéroport de départ et une liste de balise.
Pour l'afficher sur la carte vous devez utiliser un composant Leaflet [Polyline](https://react-leaflet.js.org/docs/api-components#polyline) que l'on construit à partir d'une liste de coordonnées GPS.
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
En parcourant ce dictionnaire pour l'aéroport de départ, la liste des balises et l'aéroport d'arrivée vous pouvez construire la listes des positions nécessaires.
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

Améliorez l'affichage en ajoutant des Markers ou des Cercles pour chaque balises du plan de vol en indiquant le nom, le temps de passage et l'altitude.

# Troisième partie : Modification d'un plan de vol
Vous allez maintenant réaliser des interactions permettant de modifier un plan de vol.
La modification consistera à changer l'altitude (ou level) pour une balise avec un formulaire.
Lorsque l'utilisateur selectionne une balise du plan de vol, un formulaire permet de sélectionner une nouvelle valeur pour le niveau et un bouton permet de valider la modification.
Dès qu'il y a une modification, le plan de vol sélectionner doit afficher une modification dans son étiquette et la balise doit changer de couleur pour indiquer un changement non-validé.
Lorsque le changement est validé, le plan de vol est modifié et les indiquations de changement disparaissent.

Réflechissez aux changements d'architecture et aux liens entre états et composants que vous allez devoir mettre en oeuvre.
Plusieurs solutions sont possibles. Dans ce BE, deux façons sont proposées. L'une sans librairies supplémentaires, l'autre avec l'utilisation d'un store Redux.

## Solution 1 : sans Redux
Pour réaliser l'interaction sans redux, vous allez devoir changer les plans de vols en état dans le composant App. 
Vous devez également ajouter une méthode permettant de mettre à jour l'état à partir d'un nouveau plan de vol.
Cette méthode devra être passée en props aux composants enfants afin qu'un click sur le bouton modifier d'une balise d'un plan de vol déclenche la mise à jour.
 <details>
 
   <summary>Aide</summary>
   
````javascript
   const [fpls, setFpls] = useState(data_fpls);

   const update_Fpls = function(new_fpl){
           const new_fpls = fpls.map(fpl =>
               fpl.id === new_fpl.id
                   ? new_fpl
                   : fpl);
           setFpls(new_fpls);
       };
```` 
</details>
 

Dans le composant FplsMap, vous devez également ajouter un état edité qui stockera si un plan de vol est entrain d'être modifié.
Vous devez également créer un nouveau composant FplCircle qui affichera le formulaire de modification de niveau de vol et le bouton de validation.
Ce composant devra posséder un état interne stockant le nouveau niveau à mettre à jour lors du click.
Voici un exemple possible pour le formulaire à intégrer dans la popup du marker pour la balise.

````javascript
 <form>
    <label>Modifier le niveau</label>
    <input id="input-speed" type="number" value={level} onChange={(event) => update_state(event.target.value)}/>
    <button type="button" onClick={submit_new_fpl}>Save</button>
</form>
```` 
  

le composant Map final peut ressembler à ceci : 

````javascript
 <Map airports={props.airports} beacons={props.beacons} selection={selection} fpls={props.fpls} onSubmitFpl={update_fpl} onUpdateFpl={updateUpdatedFplId}/>
```` 

Le props onSubmit et onUpdated passeront des callbacks permettant respectivement de modifier un plan de vol pour toute l'application et de signaler qu'un plan de vol est entrain d'être modifié.


Vérifiez que votre applications fonctionne en modifiant des plans de vol.
Bonus, vous pouvez changer la couleur d'une balise lorsqu'elle est modifiée mais pas validée en utilisant la propriété mutable du composant Circle 
````javascript
<Circle center={props.center}
            radius = {8000}
            pathOptions= {{color : props.beacon.level == level ? "purple" : "red"}}
            key={props.beacon.name}>
````

## Solution 2 : avec Redux

[Redux](https://redux.js.org/introduction/getting-started) est un container d'état qui est très bien intégré à React.
Redux utilise un pattern Flux avec un seul état global à l'application (comme une base de données) et des actions permettant de mettre à jour les données.

Pour l'utilisez vous devez installer Redux en utilisant la commande : 

```shell script
npm install --save redux react-redux @reduxjs/toolkit
```

Vous utiliserez également 
* [React-Redux](https://react-redux.js.org/introduction/quick-start) qui perment aux composants React de lire des données depuis un store Redux et de dispatcher les actions pour mettre à jour le store.
* [Redux-toolkit](https://redux-toolkit.js.org/introduction/quick-start) qui permet de simplifier la mise en place et la configuration d'un store Redux.

Vous devez lire ces tutoriels pour comprendre le fonctionnement de Redux avant de commencer.


### Création du store

Vous devez créer un store Redux contenant vos données et états et l'ajouter à l'index de votre application.


```javascript
<store.js>
import { configureStore } from '@reduxjs/toolkit';
import fplsReducer from '../features/fpls/fplsSlice';
import beaconsReducer from '../features/beacons/beaconsSlice';
import airportReducer from '../features/airports/airportSlice';


export default configureStore({
    reducer: {
        fpls: fplsReducer,
        selection: selectionReducer,
        updating: updatingReducer,
        beacons: beaconsReducer,
        airport: airportReducer,
    },
});
```

```javascript
<app.js>
  <Provider store={store}>
          <App />
  </Provider>
```

le store peut être vu comme une base de données partagée avec l'ensemble de l'application React.
Le store est découpé en plusieurs slices ou tranches qui seront des données ou état mutables de votre applications.
Dans votre application certains états comme les balises ne seront jamais modifié.
On utilise des selectors (à peu près équivalent à une requète GET) pour lire les valeurs des états et des Reducers (équivalent de méthode POST) pour modifier les états.
Lorsqu'un état est modifié, tous les sélecteurs concernés sont mis à jour et les composants dont ils dépendent.


### Création des slices
Il vous faut créer, pour chacunes des slices, les états et actions correspondants.
Vous pouvez utiliser l'outil createSlide de Redux-Toolkit pour accélérer le travail (qui reste tout de même assez long).

Voici un exemple pour la sélection

```javascript
import {createSlice} from '@reduxjs/toolkit'

const data = require('../../db/FPL-20180119-extract');
export const fplsSlice = createSlice({
    name: 'fpls',
    initialState: {
        value: data.fpls
    },
    reducers: {
        updateFpls: (state, action) => {
            state.value = state.value.map(fpl =>
                fpl.id === action.payload.id
                    ? action.payload
                    : fpl)
        }
    }
})

export const selectFpls = state => state.fpls.value;
export const {updateFpls} = fplsSlice.actions
export default fplsSlice.reducer
```


L'état est défini par un nom et un champ value. Cette value contient la liste des Fpls et est initialisé avec le contenu du fichier data.json.
Un seul reducer est disponible pour mettre à jour un plan de vol. Ce reducer prends en paramètre une action avec sa payload. C'est via cette 'charge utile' que l'on peut passer des arguments aux reducers avec Redux.
A la fin du fichier, on exporte les éléments qui seront utilisés par d'autres modules dans notre application. En particulier, selectFpls est une fonction qui permettra à n'importe quel composant React de récupérer les données.

### Utilisation des états dans les composants
Pour utiliser les état du store dans les composants, il faut utiliser la fonction useSelector et les différents selecteurs que vous avez définis dans les slices.
Ainsi le code suivant permet de lire les données des plans de vol depuis n'importe quel composant de l'application.

````javascript
import {useSelector} from "react-redux";
import {selectFpls} from "../../features/fpls/fplsSlice";
const fpls = useSelector(selectFpls);
````

Transformez votre application pour remplacer l'utilisation des données airports, balises, fpls, selection et updating en props par l'utilisation des selecteurs.
  

### Modification des états dans les composants
Pour modifier un état depuis un composant, il faut utiliser la fonction dispatch avec vos reducers définis dans les slices du store.
Par exemple, la modification de sélection peut se faire de la façon suivante :

````javascript
import {useSelector, useDispatch} from "react-redux";
import {selectFpls} from "../../features/fpls/fplsSlice";
import {selectSelection, toggle} from "../../features/selection/selectionSlice";
import {selectUpdating} from "../../features/updating/updatingSlice";

function Fpls(props) {

    const fpls = useSelector(selectFpls);
    const selection = useSelector(selectSelection);
    const updating = useSelector(selectUpdating);

    const dispatch = useDispatch();

    const fpls_items = fpls.map((fpl) => (
        <ListGroupItem
            active={selection.includes(fpl.id)}
            key={fpl.id}
            onClick={() => dispatch(toggle(fpl.id))}>
            <p>{fpl.d_airport} &rarr; {fpl.a_airport} {updating.includes(fpl.id) ? '*' : ''}</p>
            <small>{fpl.id} -- {fpl.aircraft_type}</small>
        </ListGroupItem>));

````

La fonction onClick de l'élément déclenche la fonction dispatch avec la fonction du reducer à effectuer.
Ceci permettra de modifier l'état de la sélection et de mettre à jour tous les composants dépendants de la sélection (via le useSelector).

Modifier le reste de l'application pour avoir le formulaire de modification de niveau du plan de vol disponible et fonctionnel.


## Historique des modifications
Pour ajouter des fonctionnalités Undo/Redo des modifications des plan de vols à notre application, vous pouvez utiliser [redux-undo](https://github.com/omnidan/redux-undo). 
Il s'agit de stocker un historique des états des plans de vols et d'ajouter des reducers permettant de naviguer dans cet historique.
