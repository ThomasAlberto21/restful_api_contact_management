# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "string",
  "password": "string",
  "name": "string"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "string",
    "name": "string"
  }
}
```

Response Body Error :

```json
{
  "error": {
    "message": "Username already exists"
  }
}

```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "string",
  "password": "string"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}

```

Response Body Error :

```json
{
  "error": "Username or password wrong"
}

```

## Update User API

Endpoint : PATCH /api/users/current

Headers:

- Authorization : token

Request Body :

```json
{
  "name": "string",
  "password": "string"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "string",
    "name": "string"
  }
}
```

Response Body Error :

```json
{
  "errors": "Name length max 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "string",
    "name": "string"
  }
}
```

Response Body Error :

```json
{
  "error": "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

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
  "error": "Unauthorized"
}
```