var App = {};

App.turn = 'O';

App.unit = [0, 1, 2, 3, 4, 5, 6, 7, 8];

App.changeTurn = function() {
	if (App.turn == 'O') {
		App.turn = 'X';
	} else if (App.turn == 'X') {
		App.turn = 'O';
	} else {
		console.log('Turn error');
	}
};

App.winStatus = false;

App.checkWin = function() {
	if (App.unit[0] == App.unit[1] && App.unit[1] == App.unit[2]) {
		return true;
	} else if (App.unit[3] == App.unit[4] && App.unit[4] == App.unit[5]) {
		return true;
	} else if (App.unit[6] == App.unit[7] && App.unit[7] == App.unit[8]) {
		return true;
	} else if (App.unit[0] == App.unit[3] && App.unit[3] == App.unit[6]) {
		return true;
	} else if (App.unit[1] == App.unit[4] && App.unit[4] == App.unit[7]) {
		return true;
	} else if (App.unit[2] == App.unit[5] && App.unit[5] == App.unit[8]) {
		return true;
	} else if (App.unit[0] == App.unit[4] && App.unit[4] == App.unit[8]) {
		return true;
	} else if (App.unit[2] == App.unit[4] && App.unit[4] == App.unit[6]) {
		return true;
	} else {
		return false;
	}	
};

App.hoverOverUnit = function() {
	$('td').mouseenter(function() {
		$(this).css('background-color', '#efefef');
	});
	$('td').mouseleave(function() {
		$(this).css('background-color', 'white');
	});
};

<<<<<<< HEAD
App.reset = function() {
	App.winStatus = false;
	$('td').empty();

	for (var i = 0; i < App.unit.length; i++) {
		App.unit[i] = i;
	}

	$('.alert').fadeOut(1, function() {
		$('.tttable').fadeIn(1);
	});
}

=======
>>>>>>> origin/master
App.onClickUnit = function() {
	$('td').click(function() {
		var el = this;
		if ($(this).html() === 'X' || $(this).html() === 'O') {
			$(this).html($(this).html);
		}
		$(this).html(App.turn).hide().fadeIn();
		App.unit[this.id - 1] = App.turn;
		App.winStatus = App.checkWin();
<<<<<<< HEAD
		if(App.winStatus) {
			$('.alert').html('<p class="lead text-center">' + App.turn + ' won!</p>').fadeIn();
			$('.alert').append('<p class="lead text-center reset "><em>Reset game?</em></p>').fadeIn();
			$('.tttable').fadeOut(1);
			$('.reset').click(function() {
				App.reset();
			});
=======
		console.log(App.winStatus);
		if(App.winStatus) {
			console.log(App.turn + ' won!');
			$('.alert').append('<p class="lead text-center">' + App.turn + ' won!</p>').fadeIn();
			$('.tttable').fadeOut(1);
>>>>>>> origin/master
		}
		App.changeTurn();
		$('.turn h2').html('<h2 class="lead">Turn: ' + App.turn + '</h2>');
	});
};

App.main = function() {
	App.hoverOverUnit();
	App.onClickUnit();
};

$(document).ready(function() {
	App.main();
});
