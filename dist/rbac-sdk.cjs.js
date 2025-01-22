'use strict';

class RBAC {
    constructor() {
        this.roles = {};
        this.users = {};
    }
    // Add a new role with permissions
    addRole(roleId, permissions) {
        if (this.roles[roleId]) {
            throw new Error(`Role ${roleId} already exists`);
        }
        this.roles[roleId] = { id: roleId, permissions };
    }
    // Assign a role to a user
    assignRoleToUser(userId, roleId) {
        if (!this.roles[roleId]) {
            throw new Error(`Role ${roleId} does not exist`);
        }
        if (!this.users[userId]) {
            this.users[userId] = { id: userId, roles: [] };
        }
        this.users[userId].roles.push(roleId);
    }
    // Check if a user has a specific permission
    userHasPermission(userId, permission) {
        const user = this.users[userId];
        if (!user)
            return false;
        return user.roles.some((roleId) => this.roles[roleId]?.permissions.includes(permission));
    }
    // Get permissions for a specific role
    getRolePermissions(roleId) {
        return this.roles[roleId]?.permissions || null;
    }
}

exports.RBAC = RBAC;
