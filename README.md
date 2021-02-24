# Pruebaceiba API
### Getting started

From the project root, run `npm install`. After installing dependencies, run `npm run devStart`

### Requirements

1. Node 
2. mySQL
3. JSONWEBTOKENS
4. bcrypt


### Using the REST API

1. The API root is `/api/`. App is running on port 3310.

### Available endpoints

***1. Get payments:***

**Endpoint:** `GET api/pagos`\
**Headers:** none\
**Query Params:** none\
**Path Params:** none\
**Body:** none


***2. Post payment:***

**Endpoint:** `POST api/pagos`\
**Headers:** none\
**Query Params:** none\
**Path Params:** none\
**Body:** 
{
    "documentoIdentificacionArrendatario": 44667,
    "codigoInmueble": "stdll301",
    "fechaPago": "31/12/2020",
    "valorPagado": 200000
}