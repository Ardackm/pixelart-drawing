// Select color input
// Select size input
const sizePicker = document.querySelector('#sizePicker');
const table = $('#pixel_canvas');
const MouseDrawer = $('#mouseMoveDrawer');
let color = "black";
let width, height, cellSize;

function GetInput() {
	width = $('#input_width').val();
	height = $('#input_height').val();
	cellSize = $('#input_cellSize').val() + "px";

	//validation
	if (width >= 50) {
		width = 50;
	}
	if (height >= 50) {
		height = 50;
	}
}

function makeGrid() {
	GetInput();
	//remove the previous canvas
	table.children().remove();

	//generate the grid
	for (let row = 1; row <= height; row++) {
		table.append(`<tr id='${row}'></tr>`);
		for (let col = 1; col <= width; col++) {
			$(`#${row}`).append('<td></td>');
		}
	}
	table.css("background-color", "white");
	$("td").css("height", cellSize);
	$("td").css("width", cellSize);
}

// grid submit button event
sizePicker.addEventListener('submit', function (e) {
	e.preventDefault();
	makeGrid();
});

//pick color when changes
$('#colorPicker').on('change', function () {
	color = $('#colorPicker').val();
});

//apply color to the cell
$('#pixel_canvas').on('mousedown', function (e) {
	$(e.target).css('background-color', color);
});

//mouse move drawer
MouseDrawer.change(function () {
	if (this.checked == true) {
		$('#pixel_canvas').on("mousemove", function (e) {
			$(e.target).css('background-color', color);
		});
	} else {
		$('#pixel_canvas').unbind('mousemove');
	}
});

//clear grid
$('#clear_grid').click(function () {
	makeGrid();
});
