// dependency inversion principle
// main class should not depend on sub class
// not call subclass directly in main class maybe i need to change the way of doing it later
// then i will change the main class

class PaymentHandlerOld {
  requestPayment(paymentDetails, amount) {
    return PayPal.requestPayment(paymentDetails, amount);
  }
}

class PaymentHandler {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  pay(amount) {
    return this.paymentMethod.pay(amount);
  }
}

class PayPal {
  pay(amount) {
    console.log(`PayPal: Paying ${amount}`);
    return true;
  }
}

class Stripe {
  pay(amount) {
    console.log(`Stripe: Paying ${amount}`);
    return true;
  }
}

console.log(`\n Dependency inversion principle \n\n`);
const paypal = new PayPal();
const stripe = new Stripe();
let paymentHandler = new PaymentHandler(paypal);
paymentHandler.pay(100);

paymentHandler = new PaymentHandler(stripe);
paymentHandler.pay(200);
