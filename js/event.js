// playlist search api
let userSearch = "";
userSearch.toLowerCase().replace(/ /g, "+");
const musicURL = `https://api.mixcloud.com/search/?q=${userSearch}&type=cloudcast`;