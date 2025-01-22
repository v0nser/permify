
# PERMIFY SDK

A lightweight, reusable Role-Based Access Control (RBAC) SDK for managing roles and permissions in any application.

**Features**
- Create and manage roles with specific permissions.
- Assign roles to users dynamically.
- Check if a user has the necessary permission for a specific action.
- Lightweight and easy to integrate into any Node.js application.
- Fully written in TypeScript with type safety.


**Installation**
1. Install the SDK via npm:
 ```npm install permify-sdk```

**Usage**
1. Here’s how to get started with the RBAC SDK:

**Import the SDK**

```import { RBAC } from 'permify ;```

**Initialize RBAC**

```const rbac = new RBAC();```

**Add Roles and Permissions**
```
// Add roles with specific permissions
rbac.addRole('admin', ['read', 'write', 'delete']);
rbac.addRole('editor', ['read', 'write']);
rbac.addRole('viewer', ['read']);
```

**Assign Roles to Users**
```
// Assign roles to users
rbac.assignRoleToUser('user1', 'admin');
rbac.assignRoleToUser('user2', 'editor');
rbac.assignRoleToUser('user3', 'viewer');
```

**Check User Permissions**
```
// Check if a user has a specific permission
console.log(rbac.userHasPermission('user1', 'delete')); // true
console.log(rbac.userHasPermission('user2', 'delete')); // false
console.log(rbac.userHasPermission('user3', 'read'));   // true
```

**Get Role Permissions**
```
// Retrieve permissions assigned to a specific role
console.log(rbac.getRolePermissions('admin')); // ['read', 'write', 'delete']
```

## API Reference

#### RBAC
The core class for managing roles, permissions, and user assignments.

```addRole(roleId: string, permissions: string[]): void```

Adds a new role with specified permissions.

- roleId: Unique identifier for the role.
- permissions: Array of permissions to assign to the role.

```userHasPermission(userId: string, permission: string): boolean```

Checks if a user has a specific permission.

- userId: User ID.
- permission: The permission to check.
```
getRolePermissions(roleId: string): string[] | null
```
Returns the permissions assigned to a specific role.

- roleId: Role ID to query.


## Running Tests
This SDK uses Jest for testing. To run the tests:
```
npm test
```
## Building the SDK
To build the SDK for distribution:
```
npm run build
```
This generates the compiled files in the dist/ folder.

## Contributing
We welcome contributions! If you’d like to improve this SDK:

- Fork the repository.
- Create a feature branch.
- Commit your changes.
- Submit a pull request.

## License
This project is licensed under the MIT License.



## Contact
For any questions or feedback, please contact:

- Name: Vaibhav Singh
- Email: raghuvanshivaibhav01@gmail.com
- GitHub: v0nser
