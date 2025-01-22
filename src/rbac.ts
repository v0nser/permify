import {Role, User, Permission} from "./types";

export class RBAC {
    private roles: Record<string, Role> = {};
    private users: Record<string, User> = {};

    // Add a new role with permissions
    addRole(roleId: string, permissions: Permission[]): void {
        if (this.roles[roleId]) {
            throw new Error(`Role ${roleId} already exists`);
        }
        this.roles[roleId] = {id: roleId, permissions};
    }

    // Assign a role to a user
    assignRoleToUser(userId: string, roleId: string): void {
        if (!this.roles[roleId]) {
            throw new Error(`Role ${roleId} does not exist`);
        }
        if (!this.users[userId]) {
            this.users[userId] = {id: userId, roles: []};
        }
        this.users[userId].roles.push(roleId);
    }

    // Check if a user has a specific permission
    userHasPermission(userId: string, permission: Permission): boolean {
        const user = this.users[userId];
        if (!user) return false;

        return user.roles.some((roleId) => this.roles[roleId]?.permissions.includes(permission));
    }

    // Get permissions for a specific role
    getRolePermissions(roleId: string): Permission[] | null {
        return this.roles[roleId]?.permissions || null;
    }
}
