// An array of routes that are public and do not require authentication
// type {string[]}
export const publicRoutes = ["/",];

// An array of routes that are used for authentication
// these routes will redirect logged in users to the dashboard page
// type {string[]}
export const authRoutes = ["/login", "/register"];

// The prefix for API authentication routes
// these routes that start with this prefix are used for API authentication
// type {string}
export const apiAuthPrefix = "/api/auth";

//  The default redirect URL after login
//  @type {string}
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
