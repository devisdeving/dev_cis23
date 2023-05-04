// Function to render your items
const collectionList = document.getElementById('collection')

function renderItems(collection) {
	// The `ul` where the items will be inserted

	// Loop through each item in the collection array
	collection.forEach(function(item, index) {
		const itemDetails =
			`
			<div class="card" class="${item.side}" id="${item.idName}" data-ownership='${item.ownership}' data-item-idx=${index}>
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
}

fetch('NYC_in_Data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		// And passes the data to the function, above!
		renderItems(collection) // In reverse order
	})