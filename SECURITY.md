# Security Guidelines

This document summarizes the security measures implemented in the Champions Arena platform to meet OWASP recommendations and protect user data.

## Password Storage

- User passwords are hashed using bcrypt with at least 12 rounds.
- Plaintext passwords are never stored or logged.

## Rate Limiting

- Global rate limiting of 100 requests per 5 minutes per IP using `express-rate-limit` helps mitigate brute-force attacks.

## HTTP Security Headers

- `helmet` middleware adds standard security headers, including `X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security` and others to prevent common attacks.
- CORS is configured to whitelist only the frontend origin.

## Input Validation and Sanitization

- All request bodies, query parameters and URL params are validated using Zod schemas.
- Any user-generated HTML is sanitized with `DOMPurify` on the frontend to prevent cross-site scripting (XSS).
- Database queries via Prisma use parameter binding; `$queryRaw` is only used with placeholders to avoid SQL injection.

## Transport Security

- All endpoints are served over HTTPS only. An express middleware redirects HTTP to HTTPS in production.
- JWT tokens are signed with strong secrets and have a one-hour expiry.

## Authentication and Session Management

- JWT access and refresh tokens are implemented with rotation. Refresh tokens can be blacklisted (e.g., using Redis) on logout.
- The refresh endpoint issues new tokens only when the previous refresh token is valid and unexpired.

## Authorization

- Role-based access control (RBAC) restricts API endpoints to specific roles (Organizer, Team Manager, Referee, Player/Fan).
- Sensitive operations require both authentication and authorization.

## Other Best Practices

- No secret values (JWT keys, database credentials) are included in the frontend bundle or committed to the repository. They are loaded from environment variables.
- The API enforces a maximum payload size to prevent abuse.
- OpenAPI definitions document all endpoints, request/response schemas and security requirements.

These measures will be revisited regularly, and automated security scanning (e.g., OWASP ZAP) will be part of the CI pipeline to detect regressions.
