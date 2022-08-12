import PayStrategy from "./PayStrategy";

class PayByCC implements PayStrategy {
    pay(amount: number = 0): void {
        console.log(`Paying. ${amount} using Credit Card`)
    }
}

export default PayByCC;