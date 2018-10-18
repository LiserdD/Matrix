//---------------------------------------------------------------------------------------------------------------------|
//+++++++++++++++++++++++++++++++++++++++++++УМНОЖЕНИЕ МАТРИЦЫ НА ЧИСЛО++++++++++++++++++++++++++++++++++++++++++++++++|
//---------------------------------------------------------------------------------------------------------------------|
function mltNumber() {

	function MtrAdd(row, collum, idElem) {
		var mtr = '';
		for (var i = 0; i < row; i++) {
			
			for (var j = 0; j < collum; j++) {
				mtr += MtrInput;
			}
			mtr += MtrBr;
		}
	 $(idElem).html(function(indx, oldHtml) {
	    	return mtr;
	    }); 
	} // Добавляет матрицу[row][collum] заполненую <input> в DOM idElem 

	function MatrixGreat(mas, row, collum, masInp) {
		var k = 0;
		for (var i = 0; i < row; i++) {
	    mas[i] = [];
		    for (var j = 0; j < collum; j++) {
		        mas[i][j] = masInp[k];
		        k++;
			}
		}
	}// Создаст масив [row][collum] и заполнит ее масивом masInp(масив который получаем с <input> DOM)

	function act(mas1, mas3, number) {
		var resultF = document.querySelector('#result');

			for (var i = 0; i < rowsMat1; i++) {
			    	
				for (var j = 0; j < collumsMat1; j++) {
						mas3[i][j] = 0;
						mas3[i][j] = mas1[i][j] * number;				
				}		
			}
			for (var i = 0; i < collumsMat1; i++) {
				resultF.innerHTML +='<div class="flexCnt"></div>'; 
				for (var j = 0; j < rowsMat1; j++) {
					$('.flexCnt').last().html(function(indx, oldHtml) {
							return oldHtml + '<div class="result-item">' + mas3[j][i] + '</div><br>' ;
						});	
				}
				resultF.innerHTML += '<br>';
			}
				 
	}
	function fieldChange() {
		var actFieldcont = document.querySelectorAll('.actField-container');
		var choseBttn = $('.choseAct-button');

		$('.actField-container').not('.actField-container:first').hide();// Сначало скрываем все поля кроме первого

		choseBttn.on('click', function() {
			$('.actField-container').not($(this)).hide();//при каждом клике скрываем все поля кроме текущего
			$(this).css({
					"background-color":"#191919",
					"color":"#C9C9C9"
				});
			choseBttn.not($(this)).css({
					"background-color":"#D4D4D4",
					"color":"black"
				});//изменяем цвет кнопки при клике, а остальным сбрасывает цвет

			var thisBttn = $(this).data("bttn"); //Получаем номер текущей кнопки по data atribute

			if (thisBttn == 1) {
				console.log(actFieldcont[0]);
				actFieldcont[0].style.display = "block";
			}//по номеру кнопки устанавливаем даному полю display: block

			else if (thisBttn == 2) {
				console.log(actFieldcont[1]);
				actFieldcont[1].style.display = "block";		
			}

			else if (thisBttn == 3) {
				console.log(actFieldcont[2]);
				actFieldcont[2].style.display = "block";		
			}
		});
	}//Переключает поля по кликам на кнопки
	function inpFocus() {
		$('.matrInp').on('focus', function() {
			$(this).css({
					"background-color":"#E7E7E7",
					
				});
		});

		$('.matrInp').on('blur', function() {
			var inpValEnter = $(this).val();
			
			if(isNaN(inpValEnter)) {
				$(this).css({
					"background-color":"#C25375"
				});
			}
			else{
				$(this).css({
					"background-color":"#9EA1A1"
				});
			} 
		});
	}// При снятии фокуса с '.matrInp' проверяет введенное значение. ПРи наведении делает белым <input>

	function GreatMatrField() {
		rowsMat1 = $('#matr1-rows').val();
		collumsMat1 = $('#matr1-collums').val();

		MtrAdd(rowsMat1, collumsMat1, '#matr1');

		$('#result').html(function(indx, oldHtml) {
			return '';
		}); 
		inpFocus();	
	}
	function Maxwidth() { 
		var width = [];
		var max = 0;
		$('.result-item').each(function(indx) {
 			width.push($(this).width());
		});
		for (var i = 0; i < width.length; i++) {
			if (width[i] > max) {
				max = width[i];
			}
		}
		$('.result-item').width(max);
	}

	var rowsMat1, collumsMat1;
	var MtrInput = '<input class="matrInp" maxlength="6"></input>', MtrBr = '<br>';

	GreatMatrField();
	$(".matrixSize").change(GreatMatrField);// при клике на кнопку создаем матрицы [][], с значениями row, collum взятых с <select>. Вызывает inpFocus() MtrAdd()

	var inpVal_1 = [];//масив со значениями получеными с <input>
	var mas_1 = [];
	var mas_3 = [];

	$("#rezBttn").on('click', function() {


		$('.result-item').text(''); //Обновляем текст итемов матрицы-результаты
		$('#result').children().remove(); //удаляем всех детей поля '#result'(прошлые матрицы-результаты)
		inpVal_1 = [];

		$('#matr1').children('.matrInp').each(function(indx, element) {
		 	inpVal_1.push($(element).val());
		});
		
		MatrixGreat(mas_1, rowsMat1, collumsMat1, inpVal_1);
		MatrixGreat(mas_3, rowsMat1, collumsMat1, inpVal_1);

		var selectAct = $('#mltnumber').val();
		act(mas_1, mas_3, selectAct);
		Maxwidth();


	});//При клике на кнопку набивает масивы inpVal значениями из <input> вызываем функции MatrixGreat() и Multi()
	inpFocus();
	fieldChange();

}
mltNumber();



