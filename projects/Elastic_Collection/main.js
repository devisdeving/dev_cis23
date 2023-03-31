// Function to render your items
function renderItems(collection) {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')

	// Loop through each item in the collection array
	collection.forEach(function(item) {
		const itemDetails =
			`
			<br>
			<p>${item.placeName}</p>	
			<img src="${item.img}"/>
				<p>Established in <time>${item.yearEstablished}</time></p>
				<p><em>${item.crossLane}</em></p>
				<p>${item.type}</p>
				<p>${item.ownership}</p>
			`
			collectionList.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert
	})
}



// Fetch gets your JSON file.
fetch('ec_data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})
