class Payment {
    private paymentMethod: PaymentMethod;
    private amount: number;

    constructor(amount: number, method: PaymentTypes) {
        const factoryMethod = new PaymentFactoryMethod()
        this.paymentMethod = factoryMethod.makePaymentMethod(method)

        this.amount = amount;
    }

    pay() {
        this.paymentMethod.pay(this.amount)
    }
}

class PaymentFactoryMethod {
    makePaymentMethod(method: PaymentTypes): PaymentMethod {
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