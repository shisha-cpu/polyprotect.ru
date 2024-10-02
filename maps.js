ymaps.ready(i2nit);

function i2nit () {
    var myMap = new ymaps.Map('map', {
            center: [55.80, 37.64],
            zoom: 10
        }),
        	
		objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // размер кластеризации
            gridSize: 32
        });

	objectManager.objects.options.set('preset', 'islands#greenDotIcon'); // установка иконки по умолчанию
	objectManager.objects.options.set('hideIconOnBalloonOpen', false); // не скрывать значки при всплытии балуна
	objectManager.objects.options.set('iconLayout','default#image');

	//Далее указана иконка. Если нет возможности класть её на сервер, грузи прямым полным урлом с любого места door.ru
    objectManager.objects.options.set('iconImageHref', 'https://www.door.ru/design/elm/pp_flag_2.png'); // урл к иконке
	objectManager.objects.options.set('iconImageSize', [35, 50]); // размер иконки
    objectManager.objects.options.set('iconImageOffset', [-4, -62]); // сдвиг, если ножка не в левом верхнем углу картинки
	objectManager.clusters.options.set('preset', 'islands#greenClusterIcons'); // тип иконки при кластеризации (сейчас - зеленый круг)

	myMap.geoObjects.add(objectManager);

  jQuery(document).ready(function($) {
 	$.ajax({
		dataType: "jsonp",
		jsonp:false,
		cache:false,
		jsonpCallback:"myCallback",
        // В файле data.jsonp заданы геометрия, опции и данные меток.
		// В следующей строке ничего не меняй. Должно работать. Файл с залами редактируй по этому адресу. Он тут и будет браться. его кодировка вин-1251 не меняй
        url: "https://www.door.ru/yosh/tst2/data.jsonp?"
    }).done(function(data) {objectManager.add(data);});
  });
}