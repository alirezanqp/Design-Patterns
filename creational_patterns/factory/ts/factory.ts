class Payment {
    private paymentMethod: PaymentMethod;
    private amount: number;

    constructor(amount: number, paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
        this.amount = amount;
    }

    pay() {
        return this.paymentMethod.pay(this.amount)
    }
}

class PaymentFactory {
    static createPaymentMethod(method: PaymentTypes): PaymentMethod {
        switch (method) {
            case PaymentTypes.BitCoinPayment:
                return new BitCoinPayment();
            case PaymentTypes.PayPalPayment:
                return new PayPalPayment();
            default:
                throw new Error('Invalid Payment Method' + method)
        }
    }
}

enum PaymentTypes {
    PayPalPayment,
    BitCoinPayment
}
    
interface PaymentMethod {
    pay(amount: number): string 
}

class PayPalPayment implements PaymentMethod {
    pay(amount: number): string {
        return `payment paypal: ${amount}`
    }
}

class BitCoinPayment implements PaymentMethod {
    pay(amount: number): string {
        return `payment bitcoin: ${amount}`
    }
}

const paymentMethod = PaymentFactory.createPaymentMethod(PaymentTypes.PayPalPayment);
const payment = new Payment(30, paymentMethod)

console.log(payment.pay());