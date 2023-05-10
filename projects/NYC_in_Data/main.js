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
let heightCalc;
function renderItems(collection) {

	collection.forEach(function(item, index) {

		const rentalCalc = item.countedRentalUnits / item.allCountedUnits * 100;
		const ownedCalc = item.countedHomeownershipUnits / item.allCountedUnits * 100;
		
		if(item.baseSquareFootage/20<20){
			heightCalc = '40';

		}else{
			heightCalc = item.baseSquareFootage/20;
		}
		const zeroZero = item.ratio;
  
		// if (rentalCalc == 0) {
		//   return;
		// }

		// if (ownedCalc == 0) {
		// 	return;
		//   }

		//   if (zeroZero === '0:0') {
		// 	return;
		//   }

		  if (item === 0) {
			return;
		  }

	  const rentedGradient = getRandomGradient(rentedGradients, lastRentedGradient);
	  const ownedGradient = getRandomGradient(ownedGradients, lastOwnedGradient);
	function ghostClass(){
			if(heightCalc === '40' || zeroZero === '0:0'){
				return "ghost"
			} else {
				return "null"
			}
		}

		function rentGreyBg(){
			if(heightCalc === '40'){
				return "linear-gradient(90deg, #242424, #a2a2a2)"
			} else {
				return rentedGradient
			}
		}

		function ownGreyBg(){
			if(heightCalc === '40'){
				return "linear-gradient(90deg, #242424, #a2a2a2)"
			} else {
				return ownedGradient
			}
		}

		console.log(heightCalc)

		const itemDetails =
			`
			<div id="row" class="${ghostClass()}"
			style="
			height:${heightCalc}px; 
			width: ${item.allCountedUnits * 100}px;
			--delay:${Math.random() * 2000};">
				<div class="rowText" style="height:${heightCalc}px">
					<p>${item.ratio}</p>
					<p>${item.houseNumber} ${item.streetName} ${item.postcode}</p>
				</div>
				<div class="rented ${ghostClass()}" style="width: ${rentalCalc}%; background-image:${rentGreyBg()}">
				</div>
				<div class="owned ${ghostClass()}" style="width:${ownedCalc}%; background-image:${ownGreyBg()}">
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

	