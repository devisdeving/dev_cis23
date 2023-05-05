const collectionList = document.getElementById('set')

function renderItems(collection) {
	collection.forEach(function(item, index) {
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
			width: 100vw;">
			<!--<p  class="rowText">${item.ratio}</p>-->
			<div class="rented" style="width:${item.countedRentalUnits / item.allCountedUnits * 100}%">
				</div>
				<div class="owned" style="width:${item.countedHomeownershipUnits / item.allCountedUnits * 100}%">
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
	