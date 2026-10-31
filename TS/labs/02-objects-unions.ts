// Lab 2: Interface, union, enum, thuộc tính tùy chọn và null.
// Thử: thêm học viên chưa có email và đổi trạng thái của học viên.
enum Status {
  Active = "active",
  Paused = "paused",
}
interface Student {
  readonly id: number;
  name: string;
  email?: string;
  status: Status;
}
type SearchKey = number | string;
const students: Student[] = [
  { id: 1, name: "An", email: "an@gmail.com", status: Status.Active },
  { id: 2, name: "Bình", email: "binh@gmail.com", status: Status.Paused },
  { id: 3, name: "Cường", status: Status.Active },
];
function findStudent(key: SearchKey): Student | undefined {
  return students.find((student) =>
    typeof key === "number" ? student.id === key : student.name === key,
  );
}
const found = findStudent(2);
console.log(found?.name ?? "Không tìm thấy", found?.email ?? "Chưa có email");
export {};
