Technical Requirements:
SEO & Digital Marketing
On Page SEO
Custom Meta Titles/Descriptions
Header Tags
Clear URl Structure
Alt text
Integrations
Analytics (Google Analytics, Google Search Console, Google Tag Manager)
For Email Marketing (Mailchimp)
Marketing Requirements:
Lead Generation Tools
Contact Forms (List of Questions will be provided)
Newsletter Signup
Performance Tracking
Tracking of Form Submissions, 
Tracking of Resources Downloads
Google Analytics

Step-by-Step: Implementing Analytics (Google Analytics, Search Console, Tag Manager)
1. Google Tag Manager (Recommended First)
Tag Manager lets you add and manage all analytics/tracking scripts (including Google Analytics and others) from a single dashboard, without code changes for every new tag.

Steps:
Create a Google Tag Manager Account

Go to Google Tag Manager.
Click "Create Account", fill in your company and website details.
Choose "Web" as the target platform.
Get the Tag Manager Snippet

After setup, you’ll get two code snippets (one for <head>, one for <body>).
Add Snippet to Your Laravel Blade Layout

Open your main layout file (e.g., master.blade.php).
Paste the first snippet right after the opening <head> tag.
Paste the second snippet immediately after the opening <body> tag.
Publish the Container

In Tag Manager, click "Submit" to publish your container.
2. Google Analytics (via Tag Manager)
Create a Google Analytics 4 Property

Go to Google Analytics.
Click "Admin" > "Create Property" and follow the steps.
Add Google Analytics Tag in Tag Manager

In Tag Manager, click "Add a new tag".
Choose "Google Analytics: GA4 Configuration".
Enter your Measurement ID from Analytics.
Set the trigger to "All Pages".
Save and publish.
3. Google Search Console
Go to Google Search Console
Add Property
Enter your website URL.
Verify Ownership
Choose "HTML tag" verification.
Copy the meta tag provided.
Paste it into your <head> section (in your Blade layout).
Click "Verify" in Search Console.
4. Test Your Setup
Use the Tag Assistant Chrome extension to verify tags are firing.
Check real-time data in Google Analytics.
Confirm verification in Search Console.
Summary:
Start with Google Tag Manager, then add Google Analytics and Search Console. This will give you a foundation for all other marketing and tracking tasks.

Would you like the exact Blade code snippets and file locations for your project?

# PBS NYC API Documentation

## Authentication
All authenticated routes require a JWT token in the Authorization header.

### Authentication Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/register` | Register new user |
| POST | `/api/user/login` | Login user |
| GET | `/api/user/logout` | Logout user |

## Property Search Endpoints (No Authentication Required)
**POST** `/api/search-property`
Search for properties by borough, house number, and street name.

**Request Body:**
```json
{
    "borough": 1,
    "house": "123",
    "term": "MAIN STREET"
}
```

**Response:**
```json
[
    {
        "stname": "MAIN STREET",
        "boro": 1,
        "bbl": "1000010001",
        "bin": "1000001",
        "zipcode": "10001",
        "lhnd": "123",
        "hhnd": "125"
    }
]
```

### Search Property by BIN
**POST** `/api/search-property-by-bin`

Search for properties by Building Identification Number (BIN).

**Request Body:**
```json
{
    "bin": "1000001"
}
```

**Response:**
```json
[
    {
        "stname": "MAIN STREET",
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
]
```

## Property Management Endpoints (Authentication Required)

### Get User Properties
**GET** `/api/get-properties-of-user`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "user_id": 109,
      "bin": "1000001",
      "bbl": "1000010001",
      "boro": 1,
      "block": 1,
      "lot": 1,
      "house_number": "123",
      "stname": "MAIN STREET",
      "lat": 40.7128,
      "lng": -74.0060,
      "zipcode": "10001",
      "summary": {
        "dob_violations_count": 5,
        "dob_complaints_count": 2,
        "ecb_hearings_count": 3,
        "ecb_penalties_count": 1,
        "hpd_violations_count": 8,
        "hpd_complaints_count": 4,
        "hpd_repairs_count": 2
      },
      "dob_violations": [...],
      "dob_complaints": [...],
      "oath_hearings": [...],
      "hpd_violations": [...],
      "hpd_complaints": [...],
      "hpd_repair_vacate_orders": [...],
      "documents": [...],
      "notes": [...]
    }
  ]
}
```

### Add Property to User
**POST** `/api/add-property-to-user`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
```

**Request Body:**
```json
{
  "properties": [
    {
      "id": "1000001",
      "house": "123",
      "street": "MAIN STREET",
      "zipcode": "10001"
    }
  ]
}
```

**Response:** Returns the same comprehensive property data as above, including all summary information.

### Delete Property from User
**POST** `/api/delete-property-from-user`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
```

**Request Body:**
```json
{
  "properties": [1, 2, 3]
}
```

**Response:** Returns the same comprehensive property data as above, including all summary information.

### Delete Single Property from User
**POST** `/api/delete-single-property-from-user`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
```

**Request Body:**
```json
{
  "id": 1
}
```

**Response:** Returns the same comprehensive property data as above, including all summary information.

## Borough Codes
- 1: Manhattan
- 2: Bronx
- 3: Brooklyn
- 4: Queens
- 5: Staten Island

## Usage Examples

### Complete Flow: Add Property by Address

1. **Search for property:**
```bash
curl -X POST http://your-domain.com/api/search-property \
  -H "Content-Type: application/json" \
  -d '{
    "borough": 1,
    "house": "123",
    "term": "MAIN STREET"
  }'
```

2. **Add property to user:**
```bash
curl -X POST http://your-domain.com/api/add-property-to-user \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": [
      {
        "id": "1000001",
        "house": "123",
        "street": "MAIN STREET",
        "zipcode": "10001"
      }
    ]
  }'
```

### Complete Flow: Add Property by BIN

1. **Search for property by BIN:**
```bash
curl -X POST http://your-domain.com/api/search-property-by-bin \
  -H "Content-Type: application/json" \
  -d '{
    "bin": "1000001"
  }'
```

2. **Add property to user (same as above):**
```bash
curl -X POST http://your-domain.com/api/add-property-to-user \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": [
      {
        "id": "1000001",
        "house": "123",
        "street": "MAIN STREET",
        "zipcode": "10001"
      }
    ]
  }'
```

## Error Responses

All endpoints return consistent error responses:

```json
{
    "success": false,
    "message": "Error description"
}
```

Common HTTP status codes:
- 200: Success
- 400: Bad Request
- 401: Unauthorized (invalid or missing JWT token)
- 404: Not Found
- 500: Internal Server Error

## Legacy Endpoints (Deprecated)

The following endpoints are kept for backward compatibility but should not be used for new implementations:

- `POST /api/user/add-properties/bin`
- `POST /api/user/add-properties/address`
- `DELETE /api/user/properties/{bin}`
- `DELETE /api/user/properties/id/{id}`

## Department of Buildings (DOB)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/DOBliveViolations` | Get active DOB violations |
| POST | `/api/user/DOBswo` | Get Stop Work Orders |
| POST | `/api/user/DOBcomplaints` | Get DOB complaints |
| POST | `/api/user/DobJobFilings` | Get DOB job filings |
| POST | `/api/user/DobNowJobFilings` | Get DOB NOW job filings |
| POST | `/api/user/BsaApplicationStatus` | Get BSA application status |

## Environmental Control Board (ECB)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/ECBliveHearings` | Get active ECB hearings |
| POST | `/api/user/ECBliveDue` | Get due penalties |
| POST | `/api/user/ECBdefaulted` | Get defaulted cases |
| POST | `/api/user/ECBimposed` | Get imposed penalties |
| POST | `/api/user/ECBoverpaid` | Get overpaid penalties |
| POST | `/api/user/ECBcorrections` | Get corrections |
| POST | `/api/user/ECBcomplaints` | Get complaints |
| POST | `/api/user/ECBviolations` | Get violations |

## Fire Department (FDNY)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/FDNYliveHearings` | Get active FDNY hearings |
| POST | `/api/user/FDNYcorrections` | Get corrections |
| POST | `/api/user/FDNYliveDue` | Get due penalties |
| POST | `/api/user/FDNYactiveViolOrders` | Get active violation orders |
| POST | `/api/user/FDNYcomplaints` | Get complaints |

## Housing Preservation & Development (HPD)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/HPDliveViolations` | Get active HPD violations |
| POST | `/api/user/HPDcomplaints` | Get complaints |
| POST | `/api/user/HPDrepairs` | Get repairs |
| POST | `/api/user/HPDlitigations` | Get litigations |
| POST | `/api/user/HPDregistrations` | Get registrations |

## Inspections
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/InspectionsDOBboiler` | Get DOB boiler inspections |
| POST | `/api/user/InspectionsDEPboiler` | Get DEP boiler inspections |
| POST | `/api/user/InspectionsFacade` | Get facade inspections |
| POST | `/api/user/InspectionsOthers` | Get other inspections |

## Permits
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/PermitsDOBpermits` | Get DOB permits |
| POST | `/api/user/PermitsDOBNOWpermits` | Get DOB NOW permits |
| POST | `/api/user/PermitsDOBElevatorpermits` | Get elevator permits |
| POST | `/api/user/PermitsDOBahv` | Get after-hours variance permits |
| POST | `/api/user/PermitsFDNYAccount` | Get FDNY account permits |
| POST | `/api/user/PermitsElevator` | Get elevator permits |

## Other Features
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user/articles` | Get latest articles |
| POST | `/api/user/articlecontent` | Get article content |
| POST | `/api/user/setting` | Get user settings |
| POST | `/api/user/sendemail` | Send contact email |
| POST | `/api/user/notifications` | Get user notifications |
| POST | `/api/user/readNotification` | Mark notification as read |

## Public Endpoints

### Contact Form Submission
```json
POST /api/contact
Request:
{
    "full_name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "message": "Your message here"
}

Response (Success - 200):
{
    "success": true,
    "message": "Thank you for contacting us. We will get back to you soon.",
    "data": {
        "full_name": "John Doe",
        "email": "john@example.com",
        "phone": "+1234567890",
        "message": "Your message here"
    }
}

Response (Validation Error - 422):
{
    "success": false,
    "message": "Validation failed",
    "errors": {
        "email": ["The email field is required."],
        "full_name": ["The full name field is required."]
        // ... other validation errors
    }
}

Response (Server Error - 500):
{
    "success": false,
    "message": "An error occurred while processing your request. Please try again later.",
    "error": "Detailed error message (only in debug mode)"
}
```

## Request/Response Examples

### Authentication
#### Register User
```json
POST /api/user/register
{
    "name": "User Name",
    "email": "user@example.com",
    "password": "password",
    "password_confirmation": "password"
}
```

#### Login
```json
POST /api/user/login
{
    "email": "user@example.com",
    "password": "password"
}
```

### Property Data
Most endpoints require a property_id in the request body:
```json
POST /api/user/DOBliveViolations
{
    "property_id": "123"
}
```

## Error Handling
All endpoints return standard HTTP status codes:
- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Server Error

## Rate Limiting
The API implements Laravel's default rate limiting. Please contact support for specific limits.

## Security
- All requests must use HTTPS
- Authentication is handled via JWT tokens
- Tokens expire after 60 minutes
- Refresh tokens are valid for 2 weeks
- FCM token support for push notifications
- Profile images are stored in /photos/ directory
- Supported image formats: jpeg, png, jpg, gif, svg (max: 2MB)

## Error Responses
```json
// Authentication Error
{
    "success": false,
    "message": "Token is required"
}

// Invalid Login
{
    "success": false,
    "message": "Invalid Email or Password"
}

// Logout Error
{
    "success": false,
    "message": "Sorry, the user cannot be logged out"
}

// Update Error
{
    "success": false,
    "message": "User is not found"
}
```

## Property Data Endpoints

### Get Properties
```json
GET /api/user/properties

Response:
{
    "success": true,
    "data": [
        {
            "id": 1,
            "house_number": "123",
            "stname": "Main St",
            "documents": [...],
            "notes": [...],
            "summary": {...}
        }
    ]
}
```

### DOB Violations
```json
POST /api/user/DOBliveViolations
Request:
{
    "property_id": "123"
}

Response:
{
    "success": true,
    "data": [
        {
            "issue_date": "2024-02-20",
            "device_number": "123456",
            "description": "Violation description",
            "number": "V123456",
            "violation_category": "Category",
            "violation_type": "Type",
            "disposition_date": null,
            "status": "OPEN"
        }
    ]
}
```

### DOB Stop Work Orders
```json
POST /api/user/DOBswo
Request:
{
    "property_id": "123"
}

Response:
{
    "success": true,
    "data": [
        {
            "complaint_number": "123456",
            "date_entered": "2024-02-20",
            "status": "ACTIVE",
            "category": "SWO",
            "description": "Stop Work Order description"
        }
    ]
}
```

### Common Error Response Format
All endpoints follow this error format:
```json
{
    "success": false,
    "message": "Authentication error."
}
```

## Authentication Requirements
- All endpoints except `/api/user/register` and `/api/user/login` require authentication
- Authentication is done via JWT token in the Authorization header
- Token format: `Bearer <jwt_token>`

## Request Format Guidelines
1. All property-related endpoints require a `property_id` in the request body
2. Dates are returned in YYYY-MM-DD format
3. All responses include a `success` boolean field
4. Error responses include a `message` field
5. Successful responses include a `data` field with the requested information

## Data Relationships
Properties can have:
- Documents
- Notes
- Summary information
- DOB violations
- DOB complaints
- OATH hearings
- HPD violations
- HPD complaints
- Inspections
- Permits

## Request Format Guidelines
1. All property-related endpoints require a `property_id` in the request body
2. Dates are returned in YYYY-MM-DD format
3. All responses include a `success` boolean field
4. Error responses include a `message` field
5. Successful responses include a `data` field with the requested information

## Access Control & Rate Limiting

### Middleware
The API implements several layers of middleware for security and access control:

1. **Authentication Middleware**
   - All protected routes require JWT authentication
   - Token must be included in Authorization header

2. **Role-based Access**
   - Some endpoints may require specific roles:
     - `paid` - Requires active payment
     - `gold` - Gold membership required
     - `bronze` - Bronze membership required

3. **Rate Limiting**
   - API requests are throttled using Laravel's default rate limiter
   - Applies to all API routes
   - Rate limits are enforced per user/IP

### Security Features
1. **CORS Protection**
   - API implements Cross-Origin Resource Sharing protection
   - Requests must come from allowed origins

2. **Request Validation**
   - Post size validation
   - Empty string handling
   - CSRF protection for web routes

3. **Performance Optimizations**
   - DNS prefetching enabled
   - URL trimming
   - Attribute elision for better performance

## Response Headers
The API returns several important headers:
- `X-RateLimit-Limit`: Maximum number of requests per window
- `X-RateLimit-Remaining`: Number of requests remaining in current window
- `Retry-After`: Seconds to wait when rate limit is exceeded

## Error Codes
In addition to standard HTTP status codes, the API may return:
- 429: Too Many Requests (rate limit exceeded)
- 401: Unauthorized (invalid or expired token)
- 403: Forbidden (insufficient role/permissions)
- 422: Unprocessable Entity (validation failed)

# PBS.NYC Property Search API Documentation

## Overview

This API provides endpoints for searching properties and managing user property portfolios. The system uses two main tables:
- `property_addresses` - Public property lookup table (for portal search and add operations)
- `properties` - User-specific property portfolios (for storing user's properties and public search)

## Property Search Endpoints

### 1. Public Property Search
**Endpoint:** `POST /api/public-search-properties`

**Description:** Search for properties in the properties table (user portfolios). This searches across all user property portfolios.

**Authentication:** Not required (public endpoint)

**Request Parameters:**
```json
{
    "bin": "string",           // Optional: Search by BIN (Building Identification Number)
    "house_number": "string",  // Optional: House number
    "boro": "integer",         // Optional: Borough (1=Manhattan, 2=Bronx, 3=Brooklyn, 4=Queens, 5=Staten Island)
    "stname": "string"         // Optional: Street name (minimum 3 characters)
}
```

**Response:**
```json
{
    "success": true,
    "data": [
        {
            "id": 123,
            "user_id": 456,
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
            "created_at": "2024-01-01T00:00:00.000000Z",
            "updated_at": "2024-01-01T00:00:00.000000Z"
        }
    ],
    "count": 1
}
```

**Notes:**
- If `bin` is provided, it takes priority and other parameters are ignored
- All parameters are optional - you can search with any combination
- Results are limited to 50 properties to prevent overwhelming responses
- This searches across all user property portfolios in the properties table

### 2. Add Property from Search Results
**Endpoint:** `POST /api/add-property-from-search`

**Description:** Add a property found through public search to the authenticated user's portfolio.

**Authentication:** Required (JWT token)

**Request Parameters:**
```json
{
    "bin": "string",  // Required: Building Identification Number
    "bbl": "string"   // Required: Borough-Block-Lot number
}
```

**Response:**
```json
{
    "success": true,
    "message": "Property added successfully",
    "data": {
        "id": 123,
        "user_id": 456,
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

**Error Responses:**
- `401 Unauthorized` - Invalid or missing authentication token
- `404 Not Found` - Property not found in property_addresses table
- `409 Conflict` - Property already exists in user's portfolio
- `500 Internal Server Error` - Database error

## User Property Management Endpoints

### 3. Search User's Properties
**Endpoint:** `POST /api/search-user-properties`

**Description:** Search within the authenticated user's property portfolio.

**Authentication:** Required (JWT token)

**Request Parameters:**
```json
{
    "term": "string",      // Optional: Search term for street name
    "borough": "integer",  // Optional: Filter by borough
    "house": "string"      // Optional: Filter by house number
}
```

**Response:**
```json
{
    "success": true,
    "data": [
        {
            "id": 123,
            "user_id": 456,
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
    ]
}
```

### 4. Search User's Properties by BIN
**Endpoint:** `POST /api/search-user-properties-by-bin`

**Description:** Find a specific property in the user's portfolio by BIN.

**Authentication:** Required (JWT token)

**Request Parameters:**
```json
{
    "bin": "string"  // Required: Building Identification Number
}
```

**Response:** Same format as search-user-properties

### 5. Get All User Properties
**Endpoint:** `GET /api/user/properties`

**Description:** Get all properties in the authenticated user's portfolio.

**Authentication:** Required (JWT token)

**Response:** Same format as search-user-properties

### 6. Delete Property from User
**Endpoint:** `POST /api/delete-property-from-user`

**Description:** Remove properties from the user's portfolio.

**Authentication:** Required (JWT token)

**Request Parameters:**
```json
{
    "properties": ["array of property IDs"]
}
```

**Response:**
```json
{
    "success": true,
    "message": "Properties deleted successfully",
    "data": [/* updated property list */]
}
```

### 7. Delete Single Property
**Endpoint:** `POST /api/delete-single-property-from-user`

**Description:** Remove a single property from the user's portfolio.

**Authentication:** Required (JWT token)

**Request Parameters:**
```json
{
    "id": "integer"  // Property ID
}
```

**Response:**
```json
{
    "success": true,
    "message": "Property deleted successfully",
    "data": [/* updated property list */]
}
```

## Legacy Endpoints (Portal Compatibility)

### 8. Portal Property Search
**Endpoint:** `POST /api/search-property`

**Description:** Original portal search endpoint (same logic as public-search-properties).

**Authentication:** Not required

**Request Parameters:**
```json
{
    "borough": "integer",  // Required: Borough number
    "house": "string",     // Required: House number
    "term": "string"       // Required: Street name search term
}
```

### 9. Portal Property Search by BIN
**Endpoint:** `POST /api/search-property-by-bin`

**Description:** Search by BIN (original portal endpoint).

**Authentication:** Not required

**Request Parameters:**
```json
{
    "bin": "string"  // Required: Building Identification Number
}
```

## Data Flow Logic

### Search Flow:
1. **Public Search** → Searches `properties` table (all user portfolios)
2. **User Search** → Searches `properties` table (user's portfolio only)

### Add Flow:
1. **Find Property** → Look up in `property_addresses` table
2. **Check Template** → Look for existing property with same BIN in `properties` table
3. **Create Entry** → Add new record to `properties` table with `user_id`

### Key Features:
- **Public Search**: Searches across all user property portfolios in the `properties` table
- **User Search**: Searches only within the authenticated user's property portfolio
- **Template Reuse**: If a property with the same BIN already exists, its data is reused
- **User Isolation**: Each user has their own property portfolio
- **Comprehensive Data**: All properties include related violations, complaints, etc.
- **Error Handling**: Proper validation and error responses
- **Rate Limiting**: Built-in protection against abuse

## Authentication

Most endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Error Handling

All endpoints return consistent error responses:
```json
{
    "success": false,
    "message": "Error description",
    "data": null
}
```

Common HTTP status codes:
- `200` - Success
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (missing/invalid token)
- `404` - Not Found
- `409` - Conflict (duplicate entry)
- `500` - Internal Server Error