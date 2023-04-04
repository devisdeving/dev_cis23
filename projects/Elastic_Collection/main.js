// Function to render your items
function renderItems(collection) {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')

	// Loop through each item in the collection array
	collection.forEach(function(item) {
		const itemDetails =
			`
			<div class="card" id="${item.idName}">
			<h3 class="${item.class}">${item.placeName}</h3>	
			<img src="${item.img}"/>
			<div class="tags">
				<p>Established in <time>${item.yearEstablished}</time></p>
				<p><em>${item.crossLane}</em></p>
				<p>${item.type}</p>
				<p>${item.ownership}</p>
			</div>
				</div>
			
			`
			collectionList.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert
			// collectionList.classList.add("jShop")
			
//			collectionList.classList.add("bakery")
	})
}

const shopCat = document.createElement('div');



// 			if (`${item.placeName} == "bakery"`) {
//	collectionList.classList.add("bakery")
// } else if {
// }

// Fetch gets your JSON file.
fetch('ec_data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})

	// const shop = JSON.parse('ec_data.json');
	// const firstCross = 'First Cross Lane';
	// const secondCross = 'Second Cross Lane';
	// const thirdCross = 'Third Cross Lane';
	// const fourthCross = 'Fourth Cross Lane';
	// const sectionFirstCross = [];
	// const sectionSecondCross = [];
	// const sectionThirdCross = [];
	// const sectionFourthCross = [];
	
	// if (shop.crossLane === firstCross) {
	// 	sectionFirstCross.push(shop);
	//   } else if (shop.crossLane === secondCross) {
	// 	sectionSecondCross.push(shop);
	//   } else if (shop.crossLane === thirdCross) {
	// 	sectionThirdCross.push(shop);
	//   } else if (shop.crossLane === fourthCross) {
	// 	sectionFourthCross.push(shop);
	// }
