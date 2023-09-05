# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresses

Headers :

- Authorized : token

Request Body :

```json
{
  "street": "string",
  "city": "string",
  "province": "string",
  "country": "string",
  "postal_code": "string"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "string",
    "city": "string",
    "province": "string",
    "country": "string",
    "postal_code": "string"
  }
}
```

Response Body Error :

```json
{
  "errors": "Country is required"
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :

- Authorized : token

Request Body :

```json
{
  "street": "string",
  "city": "string",
  "province": "string",
  "country": "string",
  "postal_code": "string"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "string",
    "city": "string",
    "province": "string",
    "country": "string",
    "postal_code": "string"
  }
}
```

Response Body Error :

```json
{
  "errors": "Country is required"
}
```

## Get Address API

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :

- Authorized : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "string",
    "city": "string",
    "province": "string",
    "country": "string",
    "postal_code": "string"
  }
}
```

Response Body Error :

```json
{
  "errors": "Country is not found"
}
```

## Get list Addresses API

Endpoint : GET /api/contacts/:contactId/addresses

Headers :

- Authorized : token


Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "street": "string",
      "city": "string",
      "province": "string",
      "country": "string",
      "postal_code": "string"
    },
    {
      "id": 1,
      "street": "string",
      "city": "string",
      "province": "string",
      "country": "string",
      "postal_code": "string"
    }
  ]
}
```

Response Body Error :
```json
{
  "errors": "Contact is not found"
}
```

## Delete Address API

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

Headers :

- Authorized : token


Response Body Success :
```json
{
  "data": "OK"
}
```

Response Body Error :
```json
{
  "errors": "Address is not found"
}
```