// Function to render your items
const collectionList = document.getElementById('collection')

function renderItems(collection) {
	// The `ul` where the items will be inserted

	// Loop through each item in the collection array
	collection.forEach(function(item, index) {
		const itemDetails =
			`
			<div class="card" id="${item.idName}" data-ownership='${item.ownership}' data-item-idx=${index}>
			<h3 class="${item.class}">${item.placeName}</h3>	
			<img src="${item.img}"/>
			<div class="tags">
				<p>Established in <time>${item.yearEstablished}</time></p>
				<p><em>${item.crossLane}</em></p>
				<p>${item.type}</p>
				<p>${item.ownership}</p>
			</div>
				</div>
			
			`;
			collectionList.insertAdjacentHTML('beforeend', itemDetails); // Which can we then insert
	});

	const buttons = document.querySelectorAll("input[type=button][name=filters]");

	buttons.forEach(function(filterOne) {
		filterOne.addEventListener('click', function(event) {
		console.log('clicked');
		const clickedButtonValue = event.target.getAttribute('value');

    let itemsToHide = document.querySelectorAll(`.card:not([data-ownership='${clickedButtonValue}'])`);
	let itemsToShow = document.querySelectorAll(`.card[data-ownership='${clickedButtonValue}']`);
	  
		itemsToHide.forEach(el => {
			el.classList.add('hide');
			el.classList.remove('show');
		  });

		itemsToShow.forEach(el => {
			el.classList.remove('hide');
			el.classList.add('show'); 
		});
	  })
	});
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
