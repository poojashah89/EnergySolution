function setToken(id) {
  console.log("Inside Set Token");
  this.token = id;
  console.log("Utils:"+this.token);
}

function getToken(){
  return this.token;
}

export default {
  setToken,getToken
}
