// Function to render your items
const collectionList = document.getElementById('set')

function renderItems(collection) {
	// The `ul` where the items will be inserted

	// Loop through each item in the collection array
	collection.forEach(function(item, index) {
		const itemDetails =
			`
			<div id="row">
			<div style="width:${item.allCountedUnits * 200}px"; class="div1">
				<p>${item.houseNumber} ${item.streetName}</p>
				<div class="rented" width:${item.countedRentalUnits * 200}px"></div>
				<div class="owned" width:${item.countedHomeownershipUnits * 200}px"></div>
			</div>
			<div id="div2">
				<p>${item.ratio}</p>
			</div>
			</div>
			`;
			collectionList.insertAdjacentHTML('beforeend', itemDetails); // Which can we then insert
	});
}

// fetch('NYC_in_Data.json')
//   .then(response => response.json())
//   .then(data => {
//     const ratio = data.ratio; // extract the ratio value from the JSON data
    
//     const container = document.getElementById("row"); // get the container element
//     const div1 = document.getElementById("div1"); // get the first div element
//     const div2 = document.getElementById("div2"); // get the second div element
    
//     // set the widths of the div elements based on the ratio
//     div1.style.width = ratio * container.offsetWidth + "px";
//     div2.style.width = (1 - ratio) * container.offsetWidth + "px";
//   });

fetch('NYC_in_Data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		// And passes the data to the function, above!
		renderItems(collection)
	})

	