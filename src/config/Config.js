

const instance = "DEV";
let BASE_URL;

if(instance == "LOCAL") {
  BASE_URL = "http://localhost:5000"; 
} else if(instance == "DEV") {
  // BASE_URL = "http://ec2-13-51-170-76.eu-north-1.compute.amazonaws.com";  
  BASE_URL = "https://the-farmers-home-backend.onrender.com";
} else if(instance == "UAT") {
  BASE_URL = "https://";
}

let WEB_URL;

if(instance == "LOCAL") {
  WEB_URL = "http://localhost:8081"; 
} else if(instance == "DEV") {
  WEB_URL = "http://localhost:8081";    
} else if(instance == "UAT") {
  WEB_URL = "https://";
}

export const apiConfig = {
  API_VERSION_1: "",
  API_ROOT_URL: BASE_URL,
  STATIC_SESSION: "202320232023202320232023",
  WEB_URL: WEB_URL
};        