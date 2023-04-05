// Function to render your items
function renderItems(collection) {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')

	// Loop through each item in the collection array
	collection.forEach(function(item) {
		const itemDetails =
			`
			<div class="card" id="${item.idName}" data-item-origin=${item.class}>
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

// why is below (30-41) wrong? 
// let filterContainer = document.querySelector(".card");
// let filterOwnership = document.querySelector(".family-button");
// filterOwnership.addEventListener("click", function(){


//       if ( "${item.ownership} === "Family Owned") {
//         filterContainer.style.display = "flex";

//       } else {
//         filterContainer.style.display = "none";
//       }
//     })

// const shopCat = document.createElement('div');



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
		renderItems(collection) // In reverse order
	})


// 1. Add click handler
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
button.addEventListener('click', function(event) {
	// 2. Get clicked button value.
	const clickedButtonValue = event.target.getAttribute('value');
  
	//                |---------- 3a ↓ --------|
	//.                                                     |-------- 3b ----------|
	//  |-- 3c ↓ --|
	let itemsToHide = document.querySelectorAll(`.card:not([data-item-origin='${clickedButtonValue}'])`);
	let itemsToShow = document.querySelectorAll(`.card[data-item-origin='${clickedButtonValue}']`);
  
	// 4a. Apply classes to hide items in `itemsToHide` list.
	itemsToHide.forEach(function(el) {
	  el.classList.add('hide');
	  el.classList.remove('show');
	});
  
	// 4a. Apply classes to show items in `itemsToShow` list.
	itemsToShow.forEach(function(el) {
	  el.classList.add('show');
	  el.classList.remove('hide');
	});
  });
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
