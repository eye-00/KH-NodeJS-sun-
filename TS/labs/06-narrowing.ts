// Lab 6: Kiểm tra dữ liệu ngoài và discriminated union.
// Thử: truyền object thiếu name hoặc id là chuỗi; xác nhận trả về lỗi.
type Result =
  | { ok: true; user: { id: number; name: string } }
  | { ok: false; error: string };
function parseUser(input: unknown): Result {
  if (
    typeof input !== "object" ||
    input === null ||
    !("id" in input) ||
    !("name" in input)
  ) {
    return { ok: false, error: "Thiếu id hoặc name" };
  }
  if (typeof input.id !== "number" || typeof input.name !== "string") {
    return { ok: false, error: "Sai kiểu id hoặc name" };
  }
  return { ok: true, user: { id: input.id, name: input.name } };
}
const parsed = parseUser(JSON.parse('{"id":1,"name":"An"}') as unknown);
console.log(parsed.ok ? parsed.user.name : parsed.error);
export {};
