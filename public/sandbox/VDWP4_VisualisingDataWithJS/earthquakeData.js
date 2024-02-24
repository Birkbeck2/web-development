// #region snippet
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
// #endregion snippet
    .then(data => {
        return data.json();
    })
    .then(post => {
        console.log(post.metadata.title + " - data fetched!");
    });
