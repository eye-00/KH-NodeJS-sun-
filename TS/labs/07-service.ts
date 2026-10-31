export async function findName(id: number): Promise<string> {
  if (id <= 0) throw new Error("ID phải lớn hơn 0");
  return `Học viên ${id}`;
}
