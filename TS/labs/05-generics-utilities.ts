// Lab 5: Generic, keyof, indexed access, utility và mapped type.
// Thử: đọc email bằng getField và cập nhật tên bằng updateUser.
interface User {
  id: number;
  name: string;
  email: string;
}
function getField<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}
function updateUser(user: User, changes: Partial<Omit<User, "id">>): User {
  return { ...user, ...changes };
}
type Preview = Pick<User, "id" | "name">;
type Flags<T> = { [K in keyof T]: boolean };
const user: User = { id: 1, name: "An", email: "an@example.com" };
const preview: Preview = { id: user.id, name: user.name };
const visible: Flags<User> = { id: true, name: true, email: false };
const roles: Record<"admin" | "student", boolean> = {
  admin: true,
  student: false,
};
console.log(
  getField(user, "name"),
  updateUser(user, { name: "Bình" }),
  preview,
  visible,
  roles,
);
export {};
