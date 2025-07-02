$(document).ready(function () {
	// modal 1
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'block')
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 2
	$('.openModal1').on('click', () => {
		$('.modal1').css('display', 'block')
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

	const images = [
		'./images/let1.jpg',
		'./images/let2.jpg',
		'./images/let3.jpg',
		'./images/let4.jpg',
		'./images/let5.jpg'
	]
	let bandera = 0
	$('.letx1').on('click', () => {
		if (bandera > 0) {
			$('#image1').attr('src', images[bandera - 1])
			bandera --
		}
	})

	$('.letx').on('click', () => {
		if (bandera < 5) {
			$('#image1').attr('src', images[bandera +1])
			bandera ++
		}

		
	})


	const images9 = [
		'./images/Responsive/pol1.png',
		'./images/Responsive/pol2.png',
		'./images/Responsive/pol3.png',
		'./images/Responsive/pol4.png',
		'./images/Responsive/pol5.png',
		'./images/Responsive/pol6.png',
		'./images/Responsive/pol9.png',
		'./images/Responsive/pol7.png',
		'./images/Responsive/pol8.png'
	]
	let bandera9 = 0
	$('.letx1-9').on('click', () => {
		if (bandera9 > 0) {
			$('#image9').attr('src', images9[bandera9 - 1])
			bandera9 --
		}
	})

	$('.letx-9').on('click', () => {
		if (bandera9 < 9) {
			$('#image9').attr('src', images9[bandera9 +1])
			bandera9 ++
		}

		
	})
})
