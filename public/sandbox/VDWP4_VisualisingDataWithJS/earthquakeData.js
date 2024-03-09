// fetch.then
// #region snippet
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
// #endregion snippet
    .then(data => {
        //console.log(data.json());
        return data.json();
    })
    .then(JSobj => {
        //console.log(JSobj.metadata.title + " - data fetched!");
        console.log(JSobj.features[0].properties.place + " - data fetched!" + JSobj.features[0].properties.ids);
    });


// async await fetch
/*
async function quakeMag(){
    const quakeData = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
    const quakeDataJSobj = await quakeData.json();
    console.log(quakeDataJSobj.metadata.title + " - data fetched!");
}

quakeMag();
*/
