
global.fetch = require("node-fetch")

async function getApi(id){
  try {
  const response = await fetch(`https://petstore.swagger.io/v2/pet/${id}`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": "kenji" // 登録したAPI
    }
  });
  if(response.ok){
    const resJson = await response.json()
    console.log(JSON.stringify(resJson)) // {"id":1,"category":{"id":0,"name":"string"},"name":"doggie","photoUrls":["string"],"tags":[{"id":0,"name":"string"}],"status":"available"}
  } else {
    throw new Error("Network response was not ok")
  }
  } catch (error){
    console.log(error);
  }
}

async function postApi(data){
  try {
  const response = await fetch(`https://petstore.swagger.io/v2/pet`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-Auth-Token": "kenji" // 登録したAPI
    }
  });
  if(response.ok){
    const resJson = await response.json()
    console.log(JSON.stringify(resJson)) //{"id":112991,"category":{"id":0,"name":"string"},"name":"doggie","photoUrls":["string"],"tags":[{"id":0,"name":"string"}],"status":"available"}
  } else {
    throw new Error("Network response was not ok")
  }
  } catch (error){
    console.log(error);
  }
}

postApi({
  "id": 2,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
})

getApi(112991)
