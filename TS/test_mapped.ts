interface User {
  id: number;
  name: string;
  age: number;
}
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};
type UserPartial = MyPartial<User>;

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
interface Person {
  name: string;
  age: number;
  location: string;
}
type LazyPerson = Getters<Person>;
