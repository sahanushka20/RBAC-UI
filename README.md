# RBAC Management Dashboard

## Overview

The RBAC Management Dashboard is a web application built for managing user roles, permissions, and users in a system following Role-Based Access Control (RBAC) principles. The application allows administrators to manage roles, assign permissions to those roles, and manage users effectively.

This project is built using React and integrates a backend API for CRUD operations. It offers features such as:
- User Management
- Role Management
- Permission Management

The dashboard is responsive and supports mobile and tablet screens.

## Features

- **User Management**: Add, edit, delete, and toggle user status (Active/Inactive).
- **Role Management**: Create, update, delete, and assign permissions to roles.
- **Permission Management**: Toggle permissions (Read, Write, Delete) for each role.
- **Responsive Design**: Optimized for both desktop and mobile views.

## Technologies Used

- **Frontend**:
  - React
  - Tailwind CSS (for styling)
  - React Context API (for state management)
  - Axios (for making API requests)
  
- **Backend (assumed)**:
  - Express (or similar) API for managing roles and users

## Installation

To set up the project locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/rbac-dashboard.git
   cd rbac-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
    ```bash
   npm install
   ```

## Folder Structure
```bash
/src
├── /components        # Contains all the UI components (UserManagement, RoleManagement, PermissionManagement)
├── /context           # Context API for managing global state (AppContext)
├── /services          # API service functions (axios requests to the backend)
└── App.js             # Main entry point of the application
```
## Components
## UserManagement
Displays a list of users with options to edit, delete, and toggle their status.
Includes a table with pagination and search features.
## RoleManagement
Allows the creation, updating, and deletion of roles.
Displays a list of roles with their associated permissions.
Users can modify roles and their permissions.
## PermissionManagement
Provides a table view of roles and the permissions (Read, Write, Delete) they have.
Admins can toggle permissions for each role.
## API Endpoints
Here is an overview of the API endpoints used by the application:

## GET /roles
Fetches a list of all roles.

## POST /roles
Creates a new role with the specified permissions.

## PUT /roles/:id
Updates an existing role's permissions.

## DELETE /roles/:id
Deletes a role.

## GET /users
Fetches a list of all users.

## POST /users
Creates a new user.

## PUT /users/:id
Updates an existing user.

## DELETE /users/:id
Deletes a user.

## Styling
The application uses Tailwind CSS for styling, which provides a utility-first CSS framework to help build modern, responsive designs. All components are styled with Tailwind classes to ensure a consistent and responsive layout.

## Features
Mobile Responsiveness
The application uses Tailwind's responsive design utilities, ensuring it works seamlessly across all devices. Tables are scrollable on smaller screens to prevent layout overflow.

## Dark Gradient Background
The dashboard features a beautiful gradient background that adapts based on the theme, ensuring an aesthetic and modern user interface.

## Buttons & Interactions
Buttons are styled with hover effects, and form elements are designed for ease of use. The app ensures that actions such as role updates, user status changes, and permissions toggling are intuitive and visually appealing.
