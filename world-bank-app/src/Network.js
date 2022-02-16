export default class Networking {
  async getCountries() {
    const response = await fetch("http://localhost:8080/countries");
    return await response.json();
  }

  async getIndicators() {
    const response = await fetch("http://localhost:8080/indicators");
    return await response.json();
  }

  async getCountryInfo(country) {
    const response = await fetch(
      `http://localhost:8080/countries/${country}/info`
    );
    return await response.json();
  }

  async getCountryIndicatorInfo(country, indicator) {
    const response = await fetch(
      `http://localhost:8080/countries/${country}/${indicator}/info`
    );
    return await response.json();
  }

  async getCountryIndicatorYearInfo(country, indicator, year) {
    const response = await fetch(
      `http://localhost:8080/countries/${country}/${indicator}/${year}/info`
    );
    return await response.json();
  }

  postSignup = async (email, password) => {
    let response = await fetch(`http://localhost:8080/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    return response;
  };

  postLogin = async (email, password) => {
    let response = await fetch(`http://localhost:8080/sessions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    return response;
  };
}
