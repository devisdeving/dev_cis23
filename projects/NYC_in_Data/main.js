const collectionList = document.getElementById('set')

const rentedGradients = [
	'linear-gradient(90deg, #000000, #ABC600)',
	'linear-gradient(90deg, #000000, #EA6CFF)',
	'linear-gradient(90deg, #000000, #00703a)',
	'linear-gradient(90deg, #000000, #D1ACFF)',
	'linear-gradient(90deg, #000000, #734132)',
	'linear-gradient(90deg, #000000, #436cff)'
  ];
  const ownedGradients = [
'linear-gradient(90deg, #000000, #ABC600)',
'linear-gradient(90deg, #000000, #EA6CFF)',
'linear-gradient(90deg, #000000, #00703a)',
'linear-gradient(90deg, #000000, #D1ACFF)',
'linear-gradient(90deg, #000000, #734132)',
'linear-gradient(90deg, #000000, #436cff)'
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
	  const rentedGradient = getRandomGradient(rentedGradients);
	  const ownedGradient = getRandomGradient(ownedGradients);
		// if (item.countedHomeownershipUnits === 0) {
		// 	return;
		// } 
		
		// if (item.countedRentalUnits === 0) {
		// 	return;
		// }  
		const emptyClass = item.allCountedUnits === 0 ? 'empty' : '';

		const itemDetails =
			`
			<div id="row"  class="${emptyClass}"
			style="
			height:${item.baseSquareFootage/20}px; 
			width: 100vw;
			--delay:${Math.random() * 2000}">
			<!--<p  class="rowText">${item.ratio}</p>-->
			<div class="rowText">${item.houseNumber} ${item.streetName} ${item.postcode}</div>
			<div class="rented" style="width:${item.countedRentalUnits / item.allCountedUnits * 100}%; background-image:${rentedGradient}">
				</div>
				<div class="owned" style="width:${item.countedHomeownershipUnits / item.allCountedUnits * 100}%; background-image:${ownedGradient}"">
				</div>
				<!--<p  class="rowText">${item.houseNumber} ${item.streetName} ${item.postcode}</p>-->

			</div>
			`;
			collectionList.insertAdjacentHTML('beforeend', itemDetails);
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
	