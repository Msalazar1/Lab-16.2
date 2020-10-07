interface Mountain {
    name: String,
    height: Number,
    
}

function findNameOfTallestMountain(mountains: Mountain[]) {
	let tallestMountain = undefined;
	if (!(mountains === undefined || mountains === null || mountains.length == 0)) {
		tallestMountain = mountains[0];
		for (let mountain of mountains) {
			if (mountain.height > tallestMountain.height) {
				tallestMountain = mountain;
			}
		}
	}
	return tallestMountain.name
}

function getTallestMountain() {
	let mountains: Mountain[] = [
		{ name: "Kilimanjaro", height: 19341 },
		{ name: "Everest", height: 29029 },
		{ name: "Denali", height: 20310 }
	];
	let tallestMountainName = findNameOfTallestMountain(mountains);
	console.log(tallestMountainName);
}

interface Product {
	name: String,
	price: number
}

function calcAverageProductPrice(products: Product[]) {
	let averageProductPrice = 0;
	if (!(products === undefined || products === null || products.length == 0)) {
		for (let product of products) {
			averageProductPrice += product.price;
		}
		averageProductPrice = averageProductPrice / products.length;
	}
	return `$${averageProductPrice.toFixed(2)}`;
}

function getAveragePrice() {
	let products: Product[] = [
		{ name: "Taco", price: 1.99 },
		{ name: "Bean Burrito", price: 2.99 },
		{ name: "Taco Supreme", price: 3.50 },
		{ name: "Burrito Supreme plus guacamole", price: 5.99 }
	];
	let averagePrice = calcAverageProductPrice(products);
	console.log(averagePrice);
}


interface Inventory {
	product: Product,
	quantity: number
}

function calcInventoryValue(inventory: Inventory[]) {
	let totalValue = 0;
	if (!(inventory === undefined || inventory === null || inventory.length == 0)) {
		for (let product of inventory) {
			totalValue += product.product.price * product.quantity;
		}
	}
	return `$${totalValue.toFixed(2)}`;
}

function getTotalValue() {
	let inventory: Inventory[] = [
		{ product: { name: "motor", price: 10.00 }, quantity: 10 },
		{ product: { name: "sensor", price: 12.50 }, quantity: 4 },
		{ product: { name: "LED", price: 1.00 }, quantity: 20 }
	];
	let totalValue = calcInventoryValue(inventory);
	console.log(totalValue);
}