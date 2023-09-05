# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "phone": "string"
}
```

Response Body Success :

```json
{
  "id": 1,
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "phone": "string"
}
```

Response Body Error :

```json
{
  "errors": "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "phone": "string"
}
```

Response Body Success :

```json
{
  "id": 1,
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "phone": "string"
}
```

Response Body Error :

```json
{
  "errors": "Email is not valid format"
}
```

## Get Contact API

Endpoint : GET /api/contacts/:id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "string",
    "last_name": "string",
    "email": "string",
    "phone": "string"
  }
}
```

Response Body Error :

```json
{
  "errors": "Contact is not found"
}
```

## Search Contact API

Endpoint : POST /api/contacts

Headers :

- Authorization : token

Query Params :

- name : Search by first_name or last_name using like query , OPTIONAL
- email : Search by email using like query , OPTIONAL
- phone : Search by phone using like query , OPTIONAL
- page : Number of page , DEFAULT 1
- size : Size per page , DEFAULT 10

Response Body Success :
```json
{
  "data": [
    {
      "id": 1,
      "first_name": "string",
      "last_name": "string",
      "email": "string",
      "phone": "string"
    },
    {
      "id": 2,
      "first_name": "string",
      "last_name": "string",
      "email": "string",
      "phone": "string"
    }
  ],
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_items": 30
  }
}
```

Response Body Error :
```json
{
  "errors": "Contact is not found"
}
```

## Delete Contact API

Endpoint : DELETE /api/contacts/:id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Contact is not found"
}
```