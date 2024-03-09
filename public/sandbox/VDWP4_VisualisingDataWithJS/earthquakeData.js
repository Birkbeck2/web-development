// fetch.then
// #region snippet
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
// #endregion snippet
    .then(data => {
        return data.json();
    })
    .then(post => {
        console.log(post.metadata.title + " - data fetched!");
        //console.log(post.features[0].properties.place + " - data fetched!");
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
