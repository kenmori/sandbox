type Action = unknown;
type Resource = unknown;

interface Permission {
  action: Action;
  resource: Resource;
}

export interface Role {
  id: string;
  permissions: Permission[];
}

// // user, organization or group
// interface Subject {
//   id: string;
//   // roles: Role[];
// }

// interface UserSubject extends Subject {
//   id: string;
// }

// TODO: remove?
export interface Entry {
  subjectId: string;
  roleIds: Set<string>;
}
