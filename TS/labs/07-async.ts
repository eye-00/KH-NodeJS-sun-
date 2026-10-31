// Lab 7: module, Promise, async/await và xử lý lỗi.
// Thử: thay 1 bằng 0 để quan sát nhánh catch.
import { findName } from "./07-service";

async function main(): Promise<void> {
  try {
    const name = await findName(1);
    console.log(name);
  } catch (error: unknown) {
    console.error(error instanceof Error ? error.message : error);
  }
}
void main();
