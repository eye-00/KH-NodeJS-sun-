// Lab 4: Class, kế thừa, implements và phạm vi truy cập.
// Thử: tạo tài khoản mới và nạp thêm tiền; thử nạp số âm.
interface Payable {
  pay(amount: number): boolean;
}
class Account implements Payable {
  constructor(
    public readonly owner: string,
    protected balance: number,
  ) {
    if (!Number.isFinite(balance) || balance < 0)
      throw new Error("Số dư không hợp lệ");
  }
  deposit(amount: number): void {
    if (!Number.isFinite(amount) || amount <= 0)
      throw new Error("Số tiền không hợp lệ");
    this.balance += amount;
  }
  pay(amount: number): boolean {
    if (!Number.isFinite(amount) || amount <= 0 || amount > this.balance)
      return false;
    this.balance -= amount;
    return true;
  }
  getBalance(): number {
    return this.balance;
  }
}
class SavingsAccount extends Account {
  addInterest(rate: number): void {
    if (!Number.isFinite(rate) || rate < 0)
      throw new Error("Lãi suất không hợp lệ");
    this.balance *= 1 + rate;
  }
}
const account = new SavingsAccount("An", 100);
account.deposit(50);
account.pay(20);
account.addInterest(0.1);
console.log(account.owner, account.getBalance()); // An 143
export {};
