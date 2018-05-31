let CountryAPI = function () {
    let getDetails = function(countryName) {
        return $.getJSON("https://restcountries.eu/rest/v2/name/" + countryName);
    }

    return {
        getDetails: getDetails
    }
}