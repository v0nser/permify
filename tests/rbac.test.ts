import { RBAC } from '../src/rbac';

describe('RBAC', () => {
  let rbac: RBAC;

  beforeEach(() => {
    rbac = new RBAC();
    rbac.addRole('admin', ['read', 'write', 'delete']);
    rbac.addRole('editor', ['read', 'write']);
  });

  it('should allow adding roles and assigning to users', () => {
    rbac.assignRoleToUser('user1', 'admin');
    expect(rbac.userHasPermission('user1', 'delete')).toBe(true);
    expect(rbac.userHasPermission('user1', 'read')).toBe(true);
  });

  it('should deny access if permission is not assigned', () => {
    rbac.assignRoleToUser('user2', 'editor');
    expect(rbac.userHasPermission('user2', 'delete')).toBe(false);
  });

  it('should return permissions for a role', () => {
    expect(rbac.getRolePermissions('admin')).toEqual(['read', 'write', 'delete']);
  });
});
