
let solarSystem = createSolarSystem();


solarSystem.newPlanet();
let sun = solarSystem.planets[0];
sun.color = "yellow";
sun.planetRadius = 50;
sun.orbitRadius = 0;

sun.newPlanet();
let earth = sun.planets[0];
earth.color = "purple";
earth.planetRadius = 25;
earth.orbitRadius = 200;

earth.newPlanet();
let earthMoon = earth.planets[0];
earthMoon.color = "lightblue";
earthMoon.planetRadius = 10;
earthMoon.orbitRadius = 30;

sun.newPlanet();
let pluto = solarSystem.planets[0];
pluto.color = "pink"
pluto.planetRadius = 15;
pluto.orbitRadius = 60;

pluto.newPlanet();
let plutoMoon = pluto.planets[0];
plutoMoon.color = "yellow";
plutoMoon.planetRadius = 7;
plutoMoon.orbitRadius = 100; 

//ADD ADDITIONAL CODE HERE!




//Leave this line here, don't change it! setInterval might be a fun thing to Google!
setInterval(function () { orbitPlanets(solarSystem);}, 20);
