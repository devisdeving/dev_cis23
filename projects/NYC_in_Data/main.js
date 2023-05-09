const collectionList = document.getElementById('set')

const rentedGradients = [
	'linear-gradient(90deg, #00703a, #436cff, #ABC600)',
	'linear-gradient(90deg, #436cff, #CAFFD2, #EA6CFF)',
	'linear-gradient(90deg, #ABC600, #D1ACFF, #00703a)',
	'linear-gradient(90deg, #D1ACFF, #00703a, #EA6CFF)',
	'linear-gradient(90deg, #00703a, #EA6CFF, #CAFFD2)',
	'linear-gradient(90deg, #CAFFD2, #ABC600, #436cff)'
  ];
  const ownedGradients = [
	'linear-gradient(-90deg, #00703a, #436cff, #ABC600)',
	'linear-gradient(270deg, #436cff, #CAFFD2, #EA6CFF)',
	'linear-gradient(-90deg, #ABC600, #D1ACFF, #00703a)',
	'linear-gradient(270deg, #D1ACFF, #00703a, #EA6CFF)',
	'linear-gradient(-90deg, #00703a, #EA6CFF, #CAFFD2)',
	'linear-gradient(270deg, #CAFFD2, #ABC600, #436cff)'
  ];

	let lastRentedGradient = null;
	let lastOwnedGradient = null;
  
  function getRandomGradient(gradients, lastGradient) {
	let gradient = lastGradient;
	while (gradient === lastGradient) {
	  gradient = gradients[Math.floor(Math.random() * gradients.length)];
	}
	return gradient;
  }

function renderItems(collection) {

	collection.forEach(function(item, index) {
	  const rentedGradient = getRandomGradient(rentedGradients, lastRentedGradient);
	  const ownedGradient = getRandomGradient(ownedGradients, lastOwnedGradient);
		// if (item.countedHomeownershipUnits === 0) {
		// 	return;
		// } 
		
		// if (item.countedRentalUnits === 0) {
		// 	return;
		// }  
		const emptyClass = item.allCountedUnits === 0 ? 'empty' : '';

		const itemDetails =
			`
			<div id="row" class="${emptyClass}"
			style="
			height:${item.baseSquareFootage/10}px; 
			width: 100vw;
			--delay:${Math.random() * 2000};
			.rowText {
				display: none;
				color: white;
				font-size: var(--fontSize);
			}
			
			.rowText:hover {
				display: block;
			}">
			<div class="rowText">
			<p>${item.houseNumber} ${item.streetName} ${item.postcode}</p>
			<p>${item.ratio}</p>
			</div>
			<div class="rented" style="width:${item.countedRentalUnits / item.allCountedUnits * 100}%; background-image:${rentedGradient}">
				</div>
				<div class="owned" style="width:${item.countedHomeownershipUnits / item.allCountedUnits * 100}%; background-image:${ownedGradient}; opacity:">
				</div>
			</div>
			`;
			collectionList.insertAdjacentHTML('beforeend', itemDetails);

			lastRentedGradient = rentedGradient;
			lastOwnedGradient = ownedGradient;
	});

	collection.forEach
	
}


fetch('NYC_in_Data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		renderItems(collection)
	})

	// <div id="row"
	// style="
	// height:${item.baseSquareFootage/20}px; 
	// width: ${item.allCountedUnits * 50}px;">
	// <p  class="rowText">${item.ratio}</p>
	// <div class="rented" style="width:${item.countedRentalUnits / item.allCountedUnits * 100}%">
	// 	</div>
	// 	<div class="owned" style="width:${item.countedHomeownershipUnits * 50}px">
	// 	</div>
	// 	<p  class="rowText">${item.houseNumber} ${item.streetName} ${item.postcode}</p>

	// </div>
	