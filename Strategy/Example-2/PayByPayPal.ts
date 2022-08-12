import PayStrategy from "./PayStrategy";

class PayByPayPal implements PayStrategy {
    pay(amount: number = 0): void {
        console.log(`Paying, ${amount} using PayPal`)
    }
}

export default PayByPayPal;