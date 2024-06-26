const locations = [
  { id: "Paris", longitude: 2.3522, latitude: 48.8566 },
  { id: "Lyon", longitude: 4.8357, latitude: 45.7640 },
  { id: "Bordeaux", longitude: -0.5792, latitude: 44.8378 },
  { id: "Montpellier", longitude: 3.8767, latitude: 43.6119 },
]

const restaurants = [
  {
    restaurantName: "Les Epicuriens",
    city: "Montpellier",
    coords: [3.8278, 43.6138],
    restaurantType: "Français",
    restaurantRating: "4.7 étoiles",
    restaurantPrice: "€€€",
    restaurantSite: "https://www.les-epicuriens-restaurant-juvignac.fr/",
    restaurantDesc: "Les Épicuriens à Juvignac est plus qu'un restaurant : c'est une destination gourmande. Brasserie, restaurant, et caviste, vous découvrirez une cuisine fusion unique. Centre Commercial Les Portes du Soleil, Entrée 2, 34990 Juvignac",
    restaurantPic: "images/epicuriens/Frame75_20231002112236.png",
    dishPic1: "images/epicuriens/102_514422321.jpg",
    dishPic2: "images/epicuriens/Frame24_20230912172505.webp",
    dishPic3: "images/epicuriens/Screenshot 2024-06-06 at 15.09.20.jpeg",
  },
  {
    restaurantName: "MIMA",
    city: "Lyon",
    coords: [4.8312, 45.7634],
    restaurantType: "Italien",
    restaurantRating: "4.6 étoiles",
    restaurantPrice: "€€€",
    restaurantSite: "https://www.mima-lyon.fr/",
    restaurantDesc: "MI.MA, à l'origine [MI]lano [MA]rittima, est une ville italienne en Emilia Romagna, où la famille se retrouve. Cuisine italienne, ambiance festive, et sel de Cervia. Une histoire de famille et d'amour pour une cuisine généreuse, conviviale et authentique. 124 Rue de Sèze, 69006 Lyon",
    restaurantPic: "images/mima/mima-ristorante.jpg",
    dishPic1: "images/mima/64ea6d1bae64bdc73204fcdd_ust_gebQYdpasWDlmetxD4Pzzb_4lxg2LVWlxFvnIXQ.jpeg",
    dishPic2: "images/mima/61794d19aa0000c1db8c1165.jpg",
    dishPic3: "images/mima/IMG_20220512_130206.jpg",
  },
  {
    restaurantName: "Le McQueen",
    city: "Paris",
    coords: [2.3397, 48.8670],
    restaurantType: "Japonais",
    restaurantRating: "4.6 étoiles",
    restaurantPrice: "€€€",
    restaurantSite: "https://lemcqueen.fr/",
    restaurantDesc: "Au McQueen, café & bar à cocktails japonais à l’Opéra, dégustez ramen, donburi, gyozas, desserts, thés, vins naturels italiens, sakés, et cocktails maison. Ambiance musicale rock par Kaoru, qui se trouve être le barman !  16 Rue Molière, 75001 Paris",
    restaurantPic: "images/mcqueen/façade.jpeg",
    dishPic1: "images/mcqueen/karaage.jpg",
    dishPic2: "images/mcqueen/gyu.jpg",
    dishPic3: "images/mcqueen/tako.jpg",
  },
  {
    restaurantName: "Le chalet Savoyard",
    city: "Paris",
    coords: [2.3825, 48.8515],
    restaurantType: "Français",
    restaurantRating: "4.3 étoiles",
    restaurantPrice: "€€€",
    restaurantSite: "https://www.chalet-savoyard.fr/",
    restaurantDesc: "En plein cœur de Paris, dans le 11ème, ce restaurant chaleureux attire les amoureux de gastronomie savoyarde authentique avec des produits du terroir. Spécialités copieuses, créations maison, accueil convivial. 58 Rue de Charonne, 75011 Paris",
    restaurantPic: "images/chalet-savoyard/visu-accueil-5.jpg",
    dishPic1: "images/chalet-savoyard/plats-1.jpg",
    dishPic2: "images/chalet-savoyard/plats-2.jpg",
    dishPic3: "images/chalet-savoyard/plats-3.jpg",
  },
  {
    restaurantName: "Pidè Paris",
    city: "Paris",
    coords: [2.3508, 48.8506],
    restaurantType: "Turc",
    restaurantRating: "4.7 étoiles",
    restaurantPrice: "€",
    restaurantSite: "https://pide.paris/",
    restaurantDesc: "Pidè Paris propose une version turque de la pizza, le pide, avec des ingrédients frais et authentiques. Le menu inclut pides, mezzés et desserts traditionnels, le tout dans une ambiance conviviale et chaleureuse. 48 bis Rue du Faubourg Saint-Denis, 75010 Paris",
    restaurantPic: "images/pide-paris/VID_20230503_121843_00_001_2023-06-07_12-47-44_capture d'_cran.jpg",
    dishPic1: "images/pide-paris/IMG_1607.jpg",
    dishPic2: "images/pide-paris/Pide ISPANAK.jpg",
    dishPic3: "images/pide-paris/IMG_1551.jpg",
  },
  {
    restaurantName: "BIBIBAP",
    city: "Bordeaux",
    coords: [-0.5792, 44.8378],
    restaurantType: "Coréen",
    restaurantRating: "4 étoiles",
    restaurantPrice: "€€€",
    restaurantSite: "https://www.bibibap.fr/",
    restaurantDesc: "Découvrez le meilleur de la streetfood coréenne autour de plats traditionnels comme le bibimbap et de tapas originales à partager sans modération !",
    restaurantPic: "images/bibibap/20200626_023108.jpg",
    dishPic1: "images/bibibap/bibibap-maison-boulettes.jpg",
    dishPic2: "images/bibibap/deopbap-au-poulet-croustillant.jpg",
    dishPic3: "images/bibibap/gratin-de-kimchi-poulet.jpg",
  },
  {
    restaurantName: "Mochicas Café",
    city: "Lyon",
    coords: [4.8285, 45.7613],
    restaurantType: "Péruvien",
    restaurantRating: "4.9 étoiles",
    restaurantPrice: "€€€",
    restaurantSite: "https://mochicascafe.com/",
    restaurantDesc: "Le restaurant Mochicas propose une cuisine péruvienne traditionnelle et fusionnée. Le menu comprend le ceviche classique, le lomo saltado, les choritos a la chalaca, les empanadas et la causa limeña.",
    restaurantPic: "images/mochicas/2021-09-22.jpg",
    dishPic1: "images/mochicas/Anticucho.jpg",
    dishPic2: "images/mochicas/Causa-limena.jpg",
    dishPic3: "images/mochicas/yuca-frita.jpg",
  },
  {
    restaurantName: "Royal Orchid",
    city: "Montpellier",
    coords: [3.8781, 43.6079],
    restaurantType: "Thaïlandais",
    restaurantRating: "4.3 étoiles",
    restaurantPrice: "€€€",
    restaurantSite: "https://www.facebook.com/p/Royal-Orchid-100027943136673/",
    restaurantDesc: "Le Royal Orchid à Montpellier propose une cuisine thaïlandaise authentique et raffinée. La carte variée comprend des plats populaires tels que le pad thaï, les currys thaï, les brochettes satay, ainsi que des spécialités moins connues comme le poisson à la sauce aigre-douce ou le bœuf loc lac.",
    restaurantPic: "images/royal orchid/19884429_2286227774936348_6281957339865542418_n.jpg",
    dishPic1: "images/royal orchid/16387329_2176635139228946_818356828822209873_n.jpg",
    dishPic2: "images/royal orchid/16473819_2176635145895612_5293542312722078577_n.jpg",
    dishPic3: "images/royal orchid/contribution_gallery.jpg",
  },
  {
    restaurantName: "Le Quatrième Mur",
    city: "Bordeaux",
    coords: [-0.5749, 44.8413],
    restaurantType: "Français",
    restaurantRating: "4.4 étoiles",
    restaurantPrice: "€€€€",
    restaurantSite: "https://quatrieme-mur.com/",
    restaurantDesc: "Au théâtre, le quatrième mur est celui, invisible, qui sépare le public de la scène. Un nom tout choisi pour cette table installée dans les ors du Grand théâtre ! Un produit de qualité, une cuisson précise, une garniture et un jus : Philippe Etchebest va à l'essentiel et nous régale en toute simplicité. Installée sur une galerie latérale du grand théâtre, la terrasse est très agréable",
    restaurantPic: "images/quatrieme-mur/la-brasserie-le-quatrieme (1).jpg",
    dishPic1: "images/quatrieme-mur/Le-Quatrième-mur-Philippe-Etchebest-7-scaled.jpg",
    dishPic2: "images/quatrieme-mur/Le-Quatrième-mur-Philippe-Etchebest-10.jpg",
    dishPic3: "images/quatrieme-mur/plat-paela-revisitee.jpg",
  },
]

// Bouton du menu burger
const sidenav = document.getElementById("mySidenav");
const openNavBtn = document.getElementById("openBtn");
const closeNavBtn = document.getElementById("closeBtn");

if (openNavBtn && closeNavBtn && sidenav) {
  openNavBtn.onclick = openNav;
  closeNavBtn.onclick = closeNav;

  function openNav() {
    sidenav.classList.add("active");
  }

  function closeNav() {
    sidenav.classList.remove("active");
  }
}

// Filtres
document.addEventListener('DOMContentLoaded', function () {
  const filterButton = document.getElementById('filter-button');
  const filtersSection = document.getElementById('filtres');

  filterButton.addEventListener('click', function () {
    if (filtersSection.style.display === 'none' || filtersSection.style.display === '') {
      filtersSection.style.display = 'block';
    } else {
      filtersSection.style.display = 'none';
    }
  });
});

// // Slideshow
function createCarousel(j) {
  let slideIndex = 0
  const slides = document.getElementsByClassName(`mySlides ${j}`)
  function carousel() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // = 2sec
  }
  carousel();
}
//  //Fin du slideshow

// Fonction pour filtrer les restaurants
function filterRestaurants(restaurants, filtres) {
  return restaurants.filter(restaurant => {
    const matchVille = !filtres.ville || filtres.ville.includes(restaurant.city);
    const matchTypeCuisine = !filtres.typeCuisine || filtres.typeCuisine.includes(restaurant.restaurantType);
    const matchNote = !filtres.note || filtres.note.includes(restaurant.restaurantRating);
    const matchPrice = !filtres.price || filtres.price.includes(restaurant.restaurantPrice);
    return matchVille && matchTypeCuisine && matchNote && matchPrice;
  });
}

// On sélectionne toutes les checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// On affiche les restaurants dans le container fait pour
function afficherRestaurants(restaurants) {
  const container = document.getElementById('restaurant-container');
  container.innerHTML = '';
  let index = 1;
  for (const restaurant of restaurants) {
    const card = document.createElement('div');
    card.classList.add('vignette-restaurant');
    card.innerHTML = `<div class="information-restaurant">
                              <h2 class="restaurant-name">${restaurant.restaurantName}</h2>
                              <div class="restaurant-note">Note: ${restaurant.restaurantRating}</div>
                              <div class="restaurant-price">Prix: ${restaurant.restaurantPrice}</div>
                              <div class="restaurant-link"><a href="${restaurant.restaurantSite}" target="_blank">Site web</a></div>
                              <p class="restaurant-description">${restaurant.restaurantDesc}</p>
                              </div>
                          <div class="image-restaurant">
                              <img src="${restaurant.restaurantPic}" class="mySlides ${index}" alt="photo restaurant">
                              <img src="${restaurant.dishPic1}" class="mySlides ${index}" alt="photo d'un plat">
                              <img src="${restaurant.dishPic2}" class="mySlides ${index}" alt="photo d'un plat">
                              <img src="${restaurant.dishPic3}" class="mySlides ${index}" alt="photo d'un plat">
                          </div>`;
    container.appendChild(card);
    createCarousel(index);
    index++;
  }
}

// Mise à jour des résultats
function updateFilteredRestaurants() {
  const filtre = {};
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const name = checkbox.name;
      if (filtre[name]) {
        filtre[name].push(checkbox.value);
      } else {
        filtre[name] = [checkbox.value];
      }
    }
  });
  // Filtre et maj de la liste
  let restaurantsFiltres = filterRestaurants(restaurants, filtre);
  if (searchInput.value != "") {
    const research = searchInput.value.toLowerCase();
    restaurantsFiltres = restaurantsFiltres.filter((restaurant) => {
      return restaurant.restaurantName.toLowerCase().includes(research) || restaurant.restaurantType.toLowerCase().includes(research) || restaurant.city.toLowerCase().includes(research) || restaurant.restaurantPrice.includes(research);
    });
  }
  for (const restaurant of restaurants) {
    hideRestaurant(restaurant.city, restaurant.restaurantName)
  }
  for (const restaurant of restaurantsFiltres) {
    showRestaurant(restaurant.city, restaurant.restaurantName)
  }
  afficherRestaurants(restaurantsFiltres);

  // On filtre les coordonnées des villes sélectionnées
  const villesFiltrees = [...new Set(restaurantsFiltres.map(id => id.city))];
  const locationsFiltrees = locations.filter(location =>
    villesFiltrees.includes(location.id));
  // On calcule la latitude et la longitude moyennes
  function latitudeMoyenne(locationsFiltrees) {
    return locationsFiltrees.latitude;
  }
  function longitudeMoyenne(locationsFiltrees) {
    return locationsFiltrees.longitude;
  }
  function sum(prev, next) {
    return (prev + next) / 2;
  }
  // On les somme
  let latmoy = locationsFiltrees.map(latitudeMoyenne).reduce(sum);
  let longmoy = locationsFiltrees.map(longitudeMoyenne).reduce(sum);
  if (locationsFiltrees.length > 1) {
    z = 6.5;
  } else {
    z = 12;
  }
  if (locationsFiltrees.length === 4) {
    updateMapView([2.2137, 46.2276], 5.5);
  } else {
    updateMapView([longmoy, latmoy], z);
  };
}

// Update sur case cochée
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateFilteredRestaurants);
});

// barre de recherche
const searchInput = document.querySelector("#site-search");
searchInput.addEventListener("input", updateFilteredRestaurants);

afficherRestaurants(restaurants);

// Initialisation de la carte
let map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([2.2137, 46.2276]), // Coordonnées de la France
    zoom: 5,
  })
});

// Fonction pour créer un style de marqueur
function createMarkerStyle(text) {
  return new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      src: 'https://openlayers.org/en/latest/examples/data/icon.png' // URL de l'icône du marqueur
    }),
    text: new ol.style.Text({
      text: text,
      offsetY: -25,
      font: '12px Calibri,sans-serif',
      fill: new ol.style.Fill({
        color: '#000'
      }),
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 3
      })
    })
  });
}

// Objets pour stocker les couches et les sources des villes et des restaurants
const citySource = new ol.source.Vector();
const restaurantSources = new Map();

const cityLayer = new ol.layer.Vector({
  source: citySource
});

const restaurantLayers = new Map();

// Ajouter la couche des villes à la carte
map.addLayer(cityLayer);

// Fonction pour ajouter une ville
function addCity(name, coords) {
  const cityMarker = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat(coords)),
    name: name
  });
  cityMarker.setStyle(createMarkerStyle(name));
  citySource.addFeature(cityMarker);

  const restaurantSource = new ol.source.Vector();
  restaurantSources.set(name, restaurantSource);

  const restaurantLayer = new ol.layer.Vector({
    source: restaurantSource,
    visible: false // Masqué par défaut
  });
  restaurantLayers.set(name, restaurantLayer);
  map.addLayer(restaurantLayer);
}

// Fonction pour ajouter un restaurant à une ville
function addRestaurant(cityName, restaurantName, coords) {
  const restaurantSource = restaurantSources.get(cityName);
  if (restaurantSource) {
    const restaurantMarker = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat(coords)),
      name: restaurantName
    });
    restaurantMarker.setId(restaurantName);
    restaurantMarker.setStyle(createMarkerStyle(restaurantName));
    restaurantSource.addFeature(restaurantMarker);
  }
}
function hideRestaurant(cityName, restaurantName) {
  const restaurantSource = restaurantSources.get(cityName);
  if (restaurantSource) {
    const restaurantMarker = restaurantSource.getFeatureById(restaurantName)
    restaurantMarker.setStyle(null)
  }
}
function showRestaurant(cityName, restaurantName) {
  const restaurantSource = restaurantSources.get(cityName);
  if (restaurantSource) {
    const restaurantMarker = restaurantSource.getFeatureById(restaurantName)
    restaurantMarker.setStyle(createMarkerStyle(restaurantName));
  }
}

// Fonction pour mettre à jour les couches en fonction du zoom
function updateLayers() {
  const zoom = map.getView().getZoom();
  citySource.getFeatures().forEach(cityMarker => {
    const cityName = cityMarker.get('name');
    const restaurantLayer = restaurantLayers.get(cityName);
    if (zoom >= 10) {
      cityLayer.setVisible(false);
      restaurantLayer.setVisible(true);
    } else {
      cityLayer.setVisible(true);
      restaurantLayer.setVisible(false);
    }
  });
}
// Fonction pour la mise à jour de la carte en fonction d'un lieu
function updateMapView(newLocation, zoomLevel) {
  const newCenter = ol.proj.fromLonLat(newLocation);
  map.getView().setCenter(newCenter);
  map.getView().setZoom(zoomLevel);
}
// Ajouter un écouteur pour les changements de résolution (zoom)
map.getView().on('change:resolution', updateLayers);

// Exemple d'ajout de villes et de restaurants
for (const location of locations) {
  addCity(location.id, [location.longitude, location.latitude]);
}

for (const restaurant of restaurants) {
  const { city, restaurantName, coords } = restaurant;
  addRestaurant(city, restaurantName, coords);
}


// Fonction pour la mise à jour de la carte en fonction d'un lieu
function updateMapView(newLocation, zoomLevel) {
  const newCenter = ol.proj.fromLonLat(newLocation);
  map.getView().setCenter(newCenter);
  map.getView().setZoom(zoomLevel);
}

// Bouton clear (décoche les filtres)
function clearAllFilters() {
  for (const checkbox of checkboxes) {
    checkbox.checked = false;
  }
}
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearAllFilters);
clearButton.addEventListener('click', updateFilteredRestaurants);
