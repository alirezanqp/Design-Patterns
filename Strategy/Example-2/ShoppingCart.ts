import PayByCC from './PayByCC';
import PayByPayPal from './PayByPayPal';
import PayStrategy from './PayStrategy';

class ShoppingCart {
    public amount: number = 0;
    public payment: PayStrategy;


    constructor(amount: number) {
        this.amount = amount;
    }

    public getAmount() {
        return this.amount;
    }

    public payAmount() {
        if (this.amount > 50000) {
            this.payment = new PayByCC()
        } else {
            this.payment = new PayByPayPal()
        }

        return this.payment.pay(this.amount)
    }
}

export default ShoppingCart;