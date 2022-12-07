const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = prompt( "Enter your bank balance" );;
var amount = 0;
var number_of_goods = 0;
var number_of_accesories = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed( 2 );
}

// продолжаем покупать телефоны пока у нас остаются деньги
while (amount < bank_balance) {
	// покупаем новый телефон!
	amount = amount + PHONE_PRICE;
	number_of_goods++;
	

	// можем ли мы позволить себе аксессуар?
	if (amount < SPENDING_THRESHOLD) {
		amount = amount + ACCESSORY_PRICE;
		number_of_accesories++;
	}
}

console.log("Ваш налог:" + calculateTax( amount ));

amount = amount + calculateTax( amount );

console.log(
	"Ваша покупка: " + formatAmount( amount )
);
console.log("Количество телефонов:" + number_of_goods);
console.log("Количество аксессуаров:" + number_of_accesories);


}