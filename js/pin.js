	var cityMap = document.querySelector('section.map');
	var openForm = document.querySelector('form.notice__form');
	var elements = document.querySelector('.map__pins');
	var template = document.querySelector('#template').content.querySelector('button');
	var templateCard = document.querySelector('#template').content.querySelector('article');
	var mapFiltersContainer = document.querySelector(".map__filters-container");
	var map = document.querySelector(".map");

function render(data) {

		//Добавляем метки на карту	
		function renderPin() {
			
		//Активация карты и формы
			var pinElement = template.cloneNode(true);
			
			pinElement.id = "pin"+[i];
			pinElement.querySelector('img').src = data[i].author.avatar;
			pinElement.style.left = data[i].location.x + "px";
			pinElement.style.top = data[i].location.y + "px";
			
			return pinElement;		
		}

		var fragment = document.createDocumentFragment();
			for (var i = 0; i < data.length; i++) {
				fragment.appendChild(renderPin([i]));
			};

			elements.appendChild(fragment);

		button.addEventListener('click', renderPin);
		//Перевод на русский
		var MAP_CARD_TYPE_RU = {
		    'flat': 'Квартира',
		    'bungalo': 'Бунгало',
		    'house': 'Дом',
		    'palace': 'Дворец'
		  };

		//Содаем Card
			var renderCard = function () {
			var newCard = templateCard.cloneNode(true);
			
			newCard.classList.add('hidden');
			newCard.id = "card"+[i];
			newCard.querySelector('img').src = data[i].author.avatar;
			newCard.querySelector('h3').textContent = data[i].offer.title;
			newCard.querySelector('.popup__price').textContent = data[i].offer.price + ' рублей';
			newCard.querySelector('h4').textContent = MAP_CARD_TYPE_RU[data[i].offer.type];
			newCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + data[i].offer.checkin + "," + 'выезд до ' + data[i].offer.checkout;
			newCard.querySelector('.popup__text--capacity').textContent = data[i].offer.rooms + ' комнаты для ' + data[i].offer.guest;
			newCard.querySelector('small').textContent = data[i].offer.address;
			newCard.querySelector('.popup__description').textContent = data[i].offer.descriptions;
			
		//Закрытие карточки
			var closePopup = function () {
				  	newCard.classList.add('hidden');
			};

			var buttonClose = newCard.querySelector('.popup__close');

			buttonClose.addEventListener('click', function () {
					closePopup();
			});
			
			var pins = document.querySelectorAll('.map__pin');
			for (var j = 1; j < pins.length; j++) {
					pins[j].addEventListener('click', closePopup);
					      
			}

			return newCard;
			}

			var fragment = document.createDocumentFragment();
				for (var i = 0; i < data.length; i++) {
					fragment.appendChild(renderCard(data[i]));
					
				};

				elements.appendChild(fragment);
		
		//Открытие нужной карточки при нажатии на определенную кнопку 
		var card0 = document.querySelector('#card0');
		var openCard0 = function (evt){
		 		card0.classList.remove('hidden');
		}

		var btnPin0 = document.querySelector('#pin0');
		btnPin0.addEventListener('click', openCard0);

		var card1 = document.querySelector('#card1');
		var openCard1 = function (evt){
		 		card1.classList.remove('hidden');
		}

		var btnPin1 = document.querySelector('#pin1');
		btnPin1.addEventListener('click', openCard1);

		var card2 = document.querySelector('#card2');
		var openCard2 = function (evt){
		 		card2.classList.remove('hidden');
		}

		var btnPin2 = document.querySelector('#pin2');
		btnPin2.addEventListener('click', openCard2);

		var card3 = document.querySelector('#card3');
		var openCard3 = function (evt){
		 		card3.classList.remove('hidden');
		}

		var btnPin3 = document.querySelector('#pin3');
		btnPin3.addEventListener('click', openCard3);

		var card4 = document.querySelector('#card4');
		var openCard4 = function (evt){
		 		card4.classList.remove('hidden');
		}

		var btnPin4 = document.querySelector('#pin4');
		btnPin4.addEventListener('click', openCard4);

		var card5 = document.querySelector('#card5');
		var openCard5 = function (evt){
		 		card5.classList.remove('hidden');
		}

		var btnPin5 = document.querySelector('#pin5');
		btnPin5.addEventListener('click', openCard5);

		var card6 = document.querySelector('#card6');
		var openCard6 = function (evt){
		 		card6.classList.remove('hidden');
		}

		var btnPin6 = document.querySelector('#pin6');
		btnPin6.addEventListener('click', openCard6);

		var card7 = document.querySelector('#card7');
		var openCard7 = function (evt){
		 		card7.classList.remove('hidden');
		}

		var btnPin7 = document.querySelector('#pin7');
		btnPin7.addEventListener('click', openCard7);

		var card8 = document.querySelector('#card8');
		var openCard8 = function (evt){
		 		card8.classList.remove('hidden');
		}

		var btnPin8 = document.querySelector('#pin8');
		btnPin8.addEventListener('click', openCard8);

		var card9 = document.querySelector('#card9');
		var openCard9 = function (evt){
		 		card9.classList.remove('hidden');
		}

		var btnPin9 = document.querySelector('#pin9');
		btnPin9.addEventListener('click', openCard9);	

	}
	