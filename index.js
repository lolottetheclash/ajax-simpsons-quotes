function fetchSimpson() {
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .then(function (simpsonArray) {
      const simpson = simpsonArray[0];
      const simpsonCitation = `
        <h1>${simpson.character}</h1>
        <p><strong>${simpson.quote}</strong></p>
        <img src="${simpson.image}" />
      `;
      document.querySelector('#simpson').innerHTML = simpsonCitation;
    });
}
