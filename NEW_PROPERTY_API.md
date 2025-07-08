# New Property API Endpoints

This document describes the 3 new clean API endpoints for property search and addition.

## Base URL
```
https://your-domain.com/api/
```

## 1. Search Property by Address

**Endpoint:** `POST /api/property/search-by-address`

**Description:** Search the property_address_directory table using house number, street, and borough.

**Authentication:** Not required (public endpoint)

**Request Parameters:**
```json
{
    "house_number": "string",  // Required: House number (e.g., "123" or "123-456")
    "street": "string",        // Required: Street name (minimum 3 characters)
    "borough": "integer"       // Required: Borough (1=Manhattan, 2=Bronx, 3=Brooklyn, 4=Queens, 5=Staten Island)
}
```

**Example Request:**
```bash
curl -X POST https://your-domain.com/api/property/search-by-address \
  -H "Content-Type: application/json" \
  -d '{
    "house_number": "123",
    "street": "BROADWAY",
    "borough": 1
  }'
```

**Response:**
```json
{
    "success": true,
    "data": [
        {
            "stname": "BROADWAY",
            "boro": 1,
            "bbl": "1000010001",
            "bin": "1000001",
            "zipcode": "10001",
            "lhnd": "123",
            "hhnd": "125",
            "lhn_first": 123,
            "lhn_second": 0,
            "hhn_first": 125,
            "hhn_second": 0
        }
    ],
    "count": 1
}
```

## 2. Search Property by BIN

**Endpoint:** `POST /api/property/search-by-bin`

**Description:** Search the property_address_directory table using BIN (Building Identification Number).

**Authentication:** Not required (public endpoint)

**Request Parameters:**
```json
{
    "bin": "string"  // Required: Building Identification Number
}
```

**Example Request:**
```bash
curl -X POST https://your-domain.com/api/property/search-by-bin \
  -H "Content-Type: application/json" \
  -d '{
    "bin": "1000001"
  }'
```

**Response:**
```json
{
    "success": true,
    "data": [
        {
            "stname": "BROADWAY",
            "boro": 1,
            "bbl": "1000010001",
            "bin": "1000001",
            "zipcode": "10001",
            "lhnd": "123",
            "hhnd": "125",
            "lhn_first": 123,
            "lhn_second": 0,
            "hhn_first": 125,
            "hhn_second": 0
        }
    ],
    "count": 1
}
```

## 3. Add Property to User Portfolio

**Endpoint:** `POST /api/property/add`

**Description:** Add a property to the properties table with user_id equal to current user's ID.

**Authentication:** Required (JWT token)

**Request Parameters:**
```json
{
    "property_id": "integer"  // Required: Property ID from the properties table
}
```

**Example Request:**
```bash
curl -X POST https://your-domain.com/api/property/add \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "property_id": 123
  }'
```

**Response:**
```json
{
    "success": true,
    "message": "Property added successfully",
    "data": {
        "id": 456,
        "user_id": 789,
        "bin": "1000001",
        "bbl": "1000010001",
        "boro": 1,
        "block": "1",
        "lot": "1",
        "house_number": "123",
        "stname": "BROADWAY",
        "lat": 40.7128,
        "lng": -74.0060,
        "zipcode": "10001",
        "documents": [],
        "notes": [],
        "summary": null,
        "dobViolations": [],
        "dobComplaints": [],
        "oathHearings": [],
        "hpdViolations": [],
        "hpdComplaints": [],
        "hpdRepairVacateOrders": []
    }
}
```

## Error Responses

All endpoints return consistent error responses:

```json
{
    "success": false,
    "message": "Error description"
}
```

**Common HTTP Status Codes:**
- `200` - Success
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (missing/invalid JWT token)
- `404` - Not Found (property not found)
- `409` - Conflict (property already exists in user's portfolio)
- `500` - Internal Server Error

## Complete Workflow Example

1. **Search for a property by address:**
```bash
curl -X POST https://your-domain.com/api/property/search-by-address \
  -H "Content-Type: application/json" \
  -d '{
    "house_number": "123",
    "street": "BROADWAY",
    "borough": 1
  }'
```

2. **Or search by BIN:**
```bash
curl -X POST https://your-domain.com/api/property/search-by-bin \
  -H "Content-Type: application/json" \
  -d '{
    "bin": "1000001"
  }'
```

3. **Add the property to user's portfolio:**
```bash
curl -X POST https://your-domain.com/api/property/add \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "property_id": 123
  }'
```

## Notes

- **Search endpoints** are public and don't require authentication
- **Add endpoint** requires JWT authentication
- All search results are limited to 50 properties for performance
- House numbers can be in format "123" or "123-456" (indoor/outdoor)
- Borough codes: 1=Manhattan, 2=Bronx, 3=Brooklyn, 4=Queens, 5=Staten Island
- The add endpoint checks for duplicate properties before adding 