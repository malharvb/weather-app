const domObj = (() => {
  function populateTile(data) {
    if (!data) return;

    const tile = document.querySelector('#dispTile');
    const title = document.querySelector('#title');
    const temp = document.querySelector('#temp');
    const feels = document.querySelector('#feels');
    const hum = document.querySelector('#hum');
    const pres = document.querySelector('#pres');
    const wind = document.querySelector('#wind');

    tile.style.cssText = 'padding: 40px';
    title.textContent = 'Weather Report: ';
    temp.textContent = `Temparature: ${data.temp} \u00B0C`;
    feels.textContent = `Feels Like: ${data.feels_like} \u00B0C`;
    hum.textContent = `Humidity: ${data.humidity}`;
    pres.textContent = `Pressure: ${data.pressure}`;
    wind.textContent = `Wind Speed: ${data.speed} kmph`;
  }
  return { populateTile };
})();

export { domObj };
