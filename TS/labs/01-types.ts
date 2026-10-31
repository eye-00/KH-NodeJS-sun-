// Lab 1: Kiểu cơ bản, mảng, tuple và unknown.
// Thử: thêm một điểm, đổi tên và thử gán sai kiểu để xem lỗi của TypeScript.
const name: string = "An";
const age = 20; // TypeScript suy luận number.
const active: boolean = true;
const scores: number[] = [8, 9, 10];
const student: readonly [string, number] = [name, age];
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

function describe(value: unknown): string {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value.toFixed(1);
  return "Không hỗ trợ";
}

console.log({ student, active, average, description: describe("typescript") });
export {};
