//Функция выбора случайного числа
// function getRandomInRange(min, max) {
// return Math.floor(Math.random() * (max - min + 1)) + min;
// };
var MAX_X = 1200;
var MIN_X = 0;
var MAX_Y = 650;
var MIN_Y = 130;
//Drag'n'Drop
var offerHandle = document.querySelector('.map__pin--main');

offerHandle.addEventListener('mousedown', function (evt) {
	evt.preventDefault();

	var startCoords = {
		x: evt.clientX,
		y: evt.clientY
	};

	var onMouseMove = function (moveEvt) {
		moveEvt.preventDefault();

		var shift = {
			x: startCoords.x - moveEvt.clientX,
			y: startCoords.y - moveEvt.clientY
		};

		startCoords = {
			x: moveEvt.clientX,
			y: moveEvt.clientY
		};

		var offerHandleTop = offerHandle.offsetTop - shift.y;
		var offerHandleLeft = offerHandle.offsetLeft - shift.x;

		if (offerHandleTop > MIN_Y && offerHandleTop < MAX_Y) {
			offerHandle.style.top = offerHandleTop + 'px';
		}
		if (offerHandleLeft > MIN_X && offerHandleLeft < MAX_X) {
			offerHandle.style.left = offerHandleLeft + 'px';
		}
		//Записываем координаты в строку адрес
		var offerAddressInput = document.querySelector('input[name="address"]');
		offerAddressInput.value = offerHandleTop + ', ' + offerHandleLeft;
	};

	var onMouseUp = function (upEvt) {
		upEvt.preventDefault();

		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	}

	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
});

//Активация карты и формы
var button = document.querySelector('.map__pin');
function openMap(e) {
	//Удаляем слушателя
	button.removeEventListener('click', openMap);

	cityMap.classList.remove('map--faded');
	openForm.classList.remove('notice__form--disabled');

	render();
	// const promise = getObject(); 
	// promise.then(render);
	// promise.then(filterType);


}

button.addEventListener('click', openMap);


