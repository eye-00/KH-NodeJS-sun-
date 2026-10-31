// Lab 3: Hàm, tham số tùy chọn/mặc định/rest và narrowing.
// Thử: gọi formatPrice với đơn giá dạng số, chuỗi số và chuỗi không hợp lệ.
function formatPrice(
  price: number | string,
  currency = "VND",
  ...tags: string[]
): string {
  const amount = typeof price === "string" ? Number(price) : price;
  if (!Number.isFinite(amount)) throw new Error("Giá không hợp lệ");
  const suffix = tags.length ? ` (${tags.join(", ")})` : "";
  return `${amount} ${currency}${suffix}`;
}
function greeting(name: string, title?: string): string {
  return `Xin chào ${title ? `${title} ` : ""}${name}`;
}
console.log(formatPrice("120000", "VND", "sách", "mới"));
console.log(greeting("An"));
export {};
