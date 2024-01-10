document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const countryInfoDiv = document.getElementById("countryInfo");
  
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      fetchCountryData(searchTerm);
    });
  
    async function fetchCountryData(searchTerm) {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
        const data = await response.json();
  
        if (data.length > 0) {
          const country = data[0];
          showCountryInfo(country);
        } else {
          countryInfoDiv.style.display = "none";
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    function showCountryInfo(country) {
      countryInfoDiv.style.display = "block";
      countryInfoDiv.innerHTML = `
        <h2>${country.name.common}</h2>
        <p>Poytaxti: ${country.capital}</p>
        <p>Aholisi: ${country.population.toLocaleString()}</p>
        <p>Mintaqasi: ${country.region}</p>
        <img src="${country.flags.png}" alt="${country.name.common} Flag">
      `;
    }
  });
  