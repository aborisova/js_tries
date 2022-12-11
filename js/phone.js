const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

// var bank_balance = prompt( "Enter your bank balance" );;


function calculate() {
	let budget =  Number(document.getElementById("budget_id").value);
	let spends = calculatePhones(budget);
	showSpends(spends);
	console.log(spends);
}


function showSpends(spends) {
	document.getElementById("spent").innerText = formatAmount(spends.spentAmount);
	document.getElementById("tax").innerText = formatAmount(spends.taxAmount);
	document.getElementById("phones").innerText = spends.number_of_goods;
	document.getElementById("accesories").innerText = spends.number_of_accesories;
	document.getElementById("result").hidden = false;

}



function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed( 2 );
}

function canAfford(bank_balance, spentAmount, price) {
	return bank_balance >= spentAmount + price + calculateTax(price);
}

function calculatePhones(bank_balance){
	let spentAmount = 0;
	let number_of_goods = 0;
	let number_of_accesories = 0;
	// продолжаем покупать телефоны пока у нас остаются деньги
	while (canAfford(bank_balance, spentAmount, PHONE_PRICE)) {
		// покупаем новый телефон!
		spentAmount += PHONE_PRICE;
		spentAmount += calculateTax(PHONE_PRICE);
		number_of_goods++;

	// можем ли мы позволить себе аксессуар?
	if (canAfford(bank_balance, spentAmount, ACCESSORY_PRICE)) {
			spentAmount += ACCESSORY_PRICE;
			spentAmount += calculateTax(ACCESSORY_PRICE);
			number_of_accesories++;
		}
	}

	let tax = spentAmount - number_of_goods * PHONE_PRICE - number_of_accesories * number_of_accesories;
	return {
		spentAmount: spentAmount,
		number_of_goods: number_of_goods,
		number_of_accesories: number_of_accesories,
		taxAmount: tax
	};
}
