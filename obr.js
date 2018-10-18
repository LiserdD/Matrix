//---------------------------------------------------------------------------------------------------------------------|
//+++++++++++++++++++++++++++++++++++++++++++ОБРАТНАЯ МАТРИЦА++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|
//---------------------------------------------------------------------------------------------------------------------|
function sumOrMin(){

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

	function Determinant(mtr) {
 
    	var length = mtr.length, submtr = [], detmtr = 0;       

	    if (length == 1) {
	    	return mtr[0][0];
	    } 
	    if (length == 2) {
	    	return (mtr[0][0] * mtr[1][1] - mtr[0][1] * mtr[1][0]);
	    } 
	    if (length == 3) {
	    	return ((mtr[0][0] * mtr[1][1] * mtr[2][2] + mtr[0][1] * mtr[1][2] * mtr[2][0] + mtr[0][2] * mtr[1][0] * mtr[2][1])
		    - (mtr[0][0] * mtr[1][2] * mtr[2][1] + mtr[0][1] * mtr[1][0] * mtr[2][2] + mtr[0][2] * mtr[1][1] * mtr[2][0]));
			 }

	    for (var i = 0; i < length; i++) {

	        for (var j = 0; j < length-1; j++) {
	         	submtr[j] = [];
	        } 
	       
	        for (var k = 1; k < length; k++) {

	            for (var b = 0; b < length; b++) {

	                     if (b < i) {
	                     	submtr[k - 1][b] = mtr[k][b];
	                     }       
	                      else if (b > i)  submtr[k - 1][b - 1] = mtr[k][b];
	                }
	        }

	          var sign = (i % 2 == 0) ? 1 : -1;
	          detmtr += sign * mtr[0][i] * Determinant(submtr);
	    }

    	return detmtr;	 
	}
	function AdjugateMatrix(mas) {   // mas - двумерный квадратный массив  
	    var length = mas.length, ansmas = [];

	    for (var i = 0; i < length; i++) {
	     ansmas[i] = [];
	       for (var j = 0; j < length; j++) {
	        var masR = [], sign = ((i + j) % 2 == 0) ? 1 : -1;
	          for (var m = 0; m < j; m++) {
	            masR[m] = [];
	             for (var n = 0; n < i; n++)   masR[m][n] = mas[m][n];
	             for (var n = i+1; n < length; n ++) masR[m][n-1] = mas[m][n];
	           }
	          for (var m = j+1; m < length; m++){
	            masR[m-1] = [];
	            for (var n = 0; n < i; n++)   masR[m-1][n] = mas[m][n];
	            for (var n = i+1; n < length; n++) masR[m-1][n-1] = mas[m][n];
	           }
	          ansmas[i][j] = sign*Determinant(masR);   // Функцию Determinant см. выше
	        }
	     }
	    return ansmas;
	}

	function InverseMatrix(mas){   // mas - двумерный квадратный массив   
	    var det = Determinant(mas);                // Функцию Determinant см. выше
	    if (det == 0) {
	    	return false;
	    }
	    var N = mas.length, mas = AdjugateMatrix(mas); // Функцию AdjugateMatrix см. выше
	    for (var i = 0; i < N; i++) {
	     	for (var j = 0; j < N; j++) {
	     		mas[i][j] /= det;
	     	}  
	  	}
	    return mas;
	}
	function ResultAdd(mas) {
		var resultF = document.querySelector('#result');
		var resultС = document.querySelector('#result-container');
		var length = mas.length;
		if(Determinant(mas_1) === 0) {
			resultС.innerHTML = '<div class="h4">Обратную матрицу невозможно найти, так как детерминант матрицы равен нулю</div>';
		}
		else{
		for (var i = 0; i < length; i++) {
			resultF.innerHTML +='<div class="flexCnt"></div>'; 
			for (var j = 0; j < length; j++) {
				$('.flexCnt').last().html(function(indx, oldHtml){
						return oldHtml + '<div class="result-item">'+ Math.round(mas[j][i] * 100) / 100 +'</div><br>' ;
					});	
				resultF.innerHTML += '<br>';
			}
		}
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
			
			if (isNaN(inpValEnter)) {
				$(this).css({
					"background-color":"#C25375"
				});
			}
			else {
				$(this).css({
					"background-color":"#9EA1A1"
				});
			} 
		});
	}// При снятии фокуса с '.matrInp' проверяет введенное значение. ПРи наведении делает белым <input>
	function GreatMatrField() {
		size = $('#size').val();

		MtrAdd(size, size, '#matr1');

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
			if (width[i] > max){
				max = width[i];
			}
		}
		$('.result-item').width(max);
	}

		var size;
		var MtrInput = '<input class="matrInp" maxlength="6"></input>', MtrBr = '<br>';

	GreatMatrField();
	$(".matrixSize").change(GreatMatrField);// при клике на кнопку создаем матрицы [][], с значениями row, collum взятых с <select>. Вызывает inpFocus() MtrAdd()

	var inpVal_1 = [];//масив со значениями получеными с <input>
	var mas_1 = [];
	var mas_2 = [];

	$("#rezBttn").on('click', function(){

		$('.result-item').text(''); //Обновляем текст итемов матрицы-результаты
		$('#result').children().remove(); //удаляем всех детей поля '#result'(прошлые матрицы-результаты)
		inpVal_1 = [];

		$('#matr1').children('.matrInp').each(function(indx, element){
		 	inpVal_1.push($(element).val());
		});
		
		MatrixGreat(mas_1, size, size, inpVal_1);
		mas_2 = InverseMatrix(mas_1);
		ResultAdd(mas_2);
		Maxwidth();
	
		
	});//При клике на кнопку набивает масивы inpVal значениями из <input> вызываем функции MatrixGreat() и Multi()
	inpFocus();
	fieldChange();

}
sumOrMin();









