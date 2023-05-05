const collectionList = document.getElementById('set')

function renderItems(collection) {
	collection.forEach(function(item, index) {
		const itemDetails =
			`
			<div id="row">
			<div style="height:${item.baseSquareFootage/100}px; width:${item.allCountedUnits * 75}%"; class="all">
				<p>${item.houseNumber} ${item.streetName}</p>
				<div class="rented" width:${item.countedRentalUnits * 50}px"></div>
			</div>
			<div class="owned" width:${item.countedHomeownershipUnits * 50}px"></div>
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

	