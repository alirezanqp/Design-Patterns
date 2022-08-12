export default interface PayStrategy {
    pay(amount: number): void
}