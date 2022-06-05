const handle = (() => {
  function convertData(data) {
    if (data === null) return null;

    const {
      main: {
        temp, feels_like, humidity, pressure,
      }, wind: { speed },
    } = data;

    return {
      temp, feels_like, humidity, pressure, speed,
    };
  }
  async function fetchFn(city) {
    let siteLink = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=30106a6d46d37870fb8fb94068469ab0`
    try {
      const response = await fetch(siteLink, { mode: 'cors' });
      if (!response.ok) throw new Error('Invalid City');
      const data = await response.json();
      return data;
    } catch (err) {
      alert(err);
      return null;
    }
  }

  return { fetchFn, convertData };
})();

export { handle };
