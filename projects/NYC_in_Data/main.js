const collectionList = document.getElementById('set')

function renderItems(collection) {
	collection.forEach(function(item, index) {
		const itemDetails =
			`
			<div id="row" style="height:${item.baseSquareFootage/20}px; width:${item.allCountedUnits * 50}px"; class="all">
				<div class="rented" style="width:${item.countedRentalUnits * 50}px">
				</div>
				<div class="owned" style="width:${item.countedHomeownershipUnits * 50}px">
				<p  class="rowText">${item.houseNumber} ${item.streetName}</p>
				</div>
			</div>
			`;
			collectionList.insertAdjacentHTML('beforeend', itemDetails); // Which can we then insert
	});
}

fetch('NYC_in_Data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		renderItems(collection)
	})

	