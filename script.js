let kilometers;
let largeBtn;
let editPhotoBtn;
let closeMarkBtn;
let closeMarkBtn2;
let picture;
let rightSide;
let newPicture;
let editCarBtn;
let popupCar;
let br1;
let br2;
let br3;
let br4;
let km;
let input1;
let input2;
let input3;
let input4;
let er1;
let er2;
let er3;
let er4;
let er5;
let er6;
let er7;
let plus1Btn;
let plus2Btn;
let plus3Btn;
let plus4Btn;
let avatarsPopup;
let editAvatarBtn;
let closeAvatarBtn;
let divAvatar;
let divAvatar1;
let divAvatar2;
let divAvatar3;
let divAvatar4;
let confirmBtn;
let avatars;
let bigPicture;
let arrow;
let editBtn;
let deleteBtn;
let newTaskBtn;
let popupTask;
let closeTaskBtn;
let cat1Value;
let cat2Value;
let cat3Value;
let cat4Value;
let cat5Value;
let cat6Value;
let cat7Value;
let category1Value;
let category2Value;
let category3Value;
let category4Value;
let category5Value;
let category6Value;
let category7Value;
let confirmTaskBtn;
let numCat4;
let numCat5;
let numCat6;
let numCat7;
let ulList;
let liElement;
let newTask;
let newTask4;
let catArray;
let newResult1;
let newResult2;
let newResult3;
let newResult4;
let newResult5;
let newResult6;
let newResult7;
let actualKm;
let divEditBtns;
let popupEdit;
let closeMarkBtn4;
let taskToEdit;
let confirmEditTaskBtn;
let editedTask;
let result;
let span;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};
const prepareDOMElements = () => {
	largeBtn = document.querySelector(".large");
	editPhotoBtn = document.querySelector(".edit-photo");
	closeMarkBtn = document.querySelector(".x");
	closeMarkBtn2 = document.querySelector(".x1");
	picture = document.querySelector(".picture");
	rightSide = document.querySelector(".rightside");
	popupCar = document.querySelector(".popup-car");
	br1 = document.querySelector(".br1");
	br2 = document.querySelector(".br2");
	br3 = document.querySelector(".br3");
	br4 = document.querySelector(".br4");
	km = document.querySelector(".km");
	input1 = document.querySelector(".input1");
	input2 = document.querySelector(".input2");
	input3 = document.querySelector(".input3");
	input4 = document.querySelector(".input4");
	er1 = document.querySelector(".er1");
	er2 = document.querySelector(".er2");
	er3 = document.querySelector(".er3");
	er4 = document.querySelector(".er4");
	er5 = document.querySelector(".er5");
	er6 = document.querySelector(".er6");
	er7 = document.querySelector(".er7");
	plus1Btn = document.querySelector(".fa-circle-plus:nth-of-type(1)");
	plus2Btn = document.querySelector(".fa-circle-plus:nth-of-type(2)");
	plus3Btn = document.querySelector(".fa-circle-plus:nth-of-type(3)");
	plus4Btn = document.querySelector(".fa-circle-plus:nth-of-type(4)");
	editCarBtn = document.querySelector(".edit-car");
	editAvatarBtn = document.querySelector(".edit-photo");
	avatarsPopup = document.querySelector(".popup-avatars");
	closeAvatarBtn = document.querySelector(".x2");
	divAvatar = document.querySelector(".avatar");
	divAvatar1 = document.querySelector(".avatar1");
	divAvatar2 = document.querySelector(".avatar2");
	divAvatar3 = document.querySelector(".avatar3");
	divAvatar4 = document.querySelector(".avatar4");
	confirmBtn = document.querySelector(".confirm");
	avatars = [
		"url(images/Auto.jpg)",
		"url(images/Auto2.jpg)",
		"url(images/Auto3.jpg)",
		"url(images/Auto4.jpg)",
	];
	bigPicture = document.querySelector(".big-picture");
	arrow = document.querySelector(".arrow");
	editBtn = document.querySelector(".edittask");
	deleteBtn = document.querySelector(".delete");
	newTaskBtn = document.querySelector(".newtask");
	popupTask = document.querySelector(".popup-task");
	closeTaskBtn = document.querySelector(".x3");
	cat1Value = document.querySelector(".cat1");
	cat2Value = document.querySelector(".cat2");
	cat3Value = document.querySelector(".cat3");
	cat4Value = document.querySelector(".cat4");
	cat5Value = document.querySelector(".cat5");
	cat6Value = document.querySelector(".cat6");
	cat7Value = document.querySelector(".cat7");
	category1Value = document.querySelector(".category1");
	category2Value = document.querySelector(".category2");
	category3Value = document.querySelector(".category3");
	category4Value = document.querySelector(".category4");
	category5Value = document.querySelector(".category5");
	category6Value = document.querySelector(".category6");
	category7Value = document.querySelector(".category7");
	confirmTaskBtn = document.querySelector(".confirmtask");
	ulList = document.querySelector(".main ul");
	liElement = document.querySelector(".main li");
	catArray = document.querySelectorAll(".cat");
	actualKm = document.querySelector(".km");
	divEditBtns = document.querySelector(".edit-buttons");
	popupEdit = document.querySelector(".edittaskpopup");
	closeMarkBtn4 = document.querySelector(".x4");
	confirmEditTaskBtn = document.querySelector(".confirmedittask");
	result = document.querySelector(".result");
	span = document.querySelector(".result span");
};
const prepareDOMEvents = () => {
	largeBtn.addEventListener("click", largePicture);
	closeMarkBtn.addEventListener("click", closeLargePicture);
	editCarBtn.addEventListener("click", openPopupCar);
	closeMarkBtn2.addEventListener("click", closePopupCar);
	plus1Btn.addEventListener("click", addBr1);
	plus2Btn.addEventListener("click", addBr2);
	plus3Btn.addEventListener("click", addBr3);
	plus4Btn.addEventListener("click", addBr4);
	editAvatarBtn.addEventListener("click", openAvatarsPopup);
	closeAvatarBtn.addEventListener("click", closeAvatarsPopup);
	document.addEventListener("click", chooseAvatar);
	confirmBtn.addEventListener("click", confirmAvatar);
	input1.addEventListener("keyup", enterKeyCheck1);
	input2.addEventListener("keyup", enterKeyCheck2);
	input3.addEventListener("keyup", enterKeyCheck3);
	input4.addEventListener("keyup", enterKeyCheck4);
	newTaskBtn.addEventListener("click", openNewTask);
	closeTaskBtn.addEventListener("click", closeNewTask);
	closeMarkBtn4.addEventListener("click", closeEditTask);
	confirmTaskBtn.addEventListener("click", addNewTask);
	ulList.addEventListener("click", checkClick);
	confirmEditTaskBtn.addEventListener("click", addEditTask);
};

const largePicture = () => {
	if (avatarsPopup.style.display === "block") {
		return;
	} else {
		picture.classList.add("big-picture");
		closeMarkBtn.style.display = "block";
		return;
	}
};
const closeLargePicture = () => {
	picture.remove("big-picture");
	closeMarkBtn.style.display = "none";
	rightSide.append(picture);
	picture.classList.remove("big-picture");
};
const openPopupCar = () => {
	if (
		avatarsPopup.style.display === "block" ||
		picture.classList.contains("big-picture")
	) {
	} else {
		popupCar.style.display = "flex";
	}
};
const closePopupCar = () => {
	popupCar.style.display = "none";
	er1.textContent = "";
	er2.textContent = "";
	er3.textContent = "";
};

const addBr1 = () => {
	if (input1.value !== "") {
		br1.textContent = input1.value;
		er1.textContent = "Dodano nową markę.";
		er1.style.color = "rgb(60, 255, 46)";
		input1.value = "";
	} else if (input1.value === "") {
		er1.textContent = "Nie podałeś marki.";
		er1.style.color = "rgb(255, 0, 0)";
	}
};
const addBr2 = () => {
	if (input2.value !== "") {
		br2.textContent = input2.value;
		er2.textContent = "Dodano nowy model.";
		er2.style.color = "rgb(60, 255, 46)";
		input2.value = "";
	} else if (input2.value === "") {
		er2.textContent = "Nie podałeś żadnej modelu.";
		er2.style.color = "rgb(255, 0, 0)";
	}
};
const addBr3 = () => {
	if (input3.value !== "") {
		br3.textContent = input3.value;
		er3.textContent = "Dodano nową wersję.";
		er3.style.color = "rgb(60, 255, 46)";
		input3.value = "";
	} else if (input3.value === "") {
		er3.textContent = "Nie podałeś wersji.";
		er3.style.color = "rgb(255, 0, 0)";
	}
};
const addBr4 = () => {
	if (input4.value !== "") {
		km.textContent = input4.value;
		er4.textContent = "Dodano aktualny przebieg.";
		er4.style.color = "rgb(60, 255, 46)";
		input4.value = "";
	} else if (input4.value === "") {
		er4.textContent = "Nie podałeś aktuanego przebiegu.";
		er4.style.color = "rgb(255, 0, 0)";
	}
};

const openAvatarsPopup = () => {
	avatarsPopup.style.display = "block";
};
const closeAvatarsPopup = () => {
	avatarsPopup.style.display = "none";
};
const chooseAvatar = (e) => {
	divAvatar1.classList.remove("active");
	divAvatar2.classList.remove("active");
	divAvatar3.classList.remove("active");
	divAvatar4.classList.remove("active");
	if (e.target.matches(".avatar")) {
		e.target.closest(".avatar").classList.toggle("active");
	}
};
const confirmAvatar = () => {
	if (divAvatar1.classList.contains("active")) {
		picture.style.backgroundImage = avatars[0];
		closeAvatarsPopup();
		divAvatar1.classList.remove("active");
	} else if (divAvatar2.classList.contains("active")) {
		picture.style.backgroundImage = avatars[1];
		closeAvatarsPopup();
		divAvatar2.classList.remove("active");
	} else if (divAvatar3.classList.contains("active")) {
		picture.style.backgroundImage = avatars[2];
		closeAvatarsPopup();
		divAvatar3.classList.remove("active");
	} else if (divAvatar4.classList.contains("active")) {
		picture.style.backgroundImage = avatars[3];
		closeAvatarsPopup();
		divAvatar4.classList.remove("active");
	} else {
		closeAvatarsPopup();
	}
};
const enterKeyCheck1 = (e) => {
	if (e.key === "Enter") {
		addBr1();
	}
};
const enterKeyCheck2 = (e) => {
	if (e.key === "Enter") {
		addBr2();
	}
};
const enterKeyCheck3 = (e) => {
	if (e.key === "Enter") {
		addBr3();
	}
};
const enterKeyCheck4 = (e) => {
	if (e.key === "Enter") {
		addBr4();
	}
};

// SECTION MAIN

const openNewTask = () => {
	popupTask.style.display = "flex";
};
const closeNewTask = () => {
	popupTask.style.display = "none";
	for (const cat of catArray) {
		cat.style.backgroundColor = "rgb(211, 211, 211";
		cat.value = "";
		er5.textContent = "";
	}
};
const addNewTask = () => {
	if (
		cat1Value.value === "" &&
		cat2Value.value === "" &&
		cat4Value.value === ""
	) {
		cat1Value.style.backgroundColor = "tomato";
		cat2Value.style.backgroundColor = "tomato";
		cat4Value.style.backgroundColor = "tomato";
		er5.textContent = "Te pola nie mogą być puste!";
		er5.style.color = "rgb(255, 0, 0)";
	} else if (
		cat1Value.value === "" &&
		cat2Value.value === "" &&
		cat4Value.value < 0
	) {
		cat1Value.style.backgroundColor = "tomato";
		cat2Value.style.backgroundColor = "tomato";
		cat4Value.style.backgroundColor = "tomato";
		er5.textContent = "Te pola nie mogą być puste lub są mniejsze od 0!";
		er5.style.color = "rgb(255, 0, 0)";
	} else if (cat1Value.value === "" && cat2Value.value === "") {
		cat1Value.style.backgroundColor = "tomato";
		cat2Value.style.backgroundColor = "tomato";
		er5.textContent = "Te pola nie mogą być puste!";
		er5.style.color = "rgb(255, 0, 0)";
	} else if (cat1Value.value === "" && cat4Value.value === "") {
		cat1Value.style.backgroundColor = "tomato";
		cat4Value.style.backgroundColor = "tomato";
		er5.textContent = "Te pola nie mogą być puste!";
		er5.style.color = "rgb(255, 0, 0)";
	} else if (cat2Value.value === "" && cat4Value.value === "") {
		cat2Value.style.backgroundColor = "tomato";
		cat4Value.style.backgroundColor = "tomato";
		er5.textContent = "Te pola nie mogą być puste!";
		er5.style.color = "rgb(255, 0, 0)";
	} else if (cat1Value.value === "") {
		cat1Value.style.backgroundColor = "tomato";
		er5.textContent = "To pole nie może być puste!";
		er5.style.color = "rgb(255, 0, 0)";
	} else if (cat2Value.value === "") {
		cat2Value.style.backgroundColor = "tomato";
		er5.textContent = "To pole nie może być puste!";
		er5.style.color = "rgb(255, 0, 0)";
	} else if (cat4Value.value === "") {
		cat4Value.style.backgroundColor = "tomato";
		er5.textContent = "Wartość nie może być mniejsza od 0!";
		er5.style.color = "rgb(255, 0, 0)";
	} else if (cat4Value.value < 0 || cat5Value.value < 0) {
		er5.textContent = "Te wartości nie mogą być mniejsze od 0!";
		er5.style.color = "rgb(255, 0, 0)";
	} else {
		newTask = document.createElement("li");
		ulList.append(newTask);
		newResult1 = document.createElement("p");
		newResult1.classList.add("result");
		newResult1.textContent = cat1Value.value;
		newTask.append(newResult1);
		newResult2 = document.createElement("p");
		newResult2.classList.add("result");
		newResult2.textContent = cat2Value.value;
		newTask.append(newResult2);
		newResult3 = document.createElement("p");
		newResult3.classList.add("result");
		newResult3.textContent = cat3Value.value;
		newTask.append(newResult3);
		newResult4 = document.createElement("p");
		newResult4.classList.add("result");
		newResult4.textContent = cat4Value.value;
		newTask.append(newResult4);
		newResult5 = document.createElement("p");
		newResult5.classList.add("result");
		newResult5.textContent = cat5Value.value;
		newTask.append(newResult5);
		newResult6 = document.createElement("p");
		newResult6.classList.add("result");
		newResult6.textContent =
			Number(newResult5.textContent) - Number(actualKm.textContent);
		newTask.append(newResult6);
		newResult7 = document.createElement("p");
		newResult7.classList.add("result");
		newResult7.textContent =
			Number(actualKm.textContent) - Number(newResult4.textContent);
		newTask.append(newResult7);
		er7.textContent = "";
		createEditButtons();

		kilometers = " KM";

		newResult6.textContent += kilometers;
		newResult7.textContent += kilometers;

		for (const cat of catArray) {
			cat.style.backgroundColor = "rgb(211, 211, 211";
			cat.value = "";
			er5.textContent = "";
		}
	}
	const numbers = /[0-9]/;
	const letters = /[a-z]/;
	if (cat4Value.value.match(numbers) && cat4Value.value >= 0) {
		cat4Value.style.backgroundColor = "rgb(211,211,211)";
	}
	if (cat1Value.value !== "") {
		cat1Value.style.backgroundColor = "rgb(211,211,211)";
	}
	if (cat2Value.value.match(numbers)) {
		cat2Value.style.backgroundColor = "rgb(211,211,211)";
	}
};

const createEditButtons = () => {
	const arrowBtn = document.createElement("button");
	arrowBtn.classList.add("arrow");
	arrowBtn.innerHTML = '<i class="fa-solid fa-square-caret-down arrow"></i>';

	const editTool = document.createElement("div");
	editTool.classList.add("edit-buttons");
	newTask.append(editTool);

	const editBtn = document.createElement("button");
	editBtn.classList.add("edittask");
	editBtn.textContent = "Edytuj";
	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("delete");
	deleteBtn.textContent = "Usuń";

	editTool.append(editBtn, deleteBtn, arrowBtn);
};
const checkClick = (e) => {
	if (e.target.matches(".arrow")) {
		e.target.closest("div").children[0].classList.toggle("visible");
		e.target.closest("div").children[0].classList.toggle("fontsizetool");
		e.target.closest("div").children[1].classList.toggle("visible");
		e.target.closest("div").children[1].classList.toggle("fontsizetool");
	} else if (e.target.matches(".edittask")) {
		openEditTask(e);
	} else if (e.target.matches(".delete")) {
		deleteTask(e);
	} else if (e.target.matches(".confirmedittask")) {
		addEditTask(e);
	}
};

const openEditTask = (e) => {
	taskToEdit = e.target.closest("li");

	category1Value.value = taskToEdit.children[0].textContent;
	category2Value.value = taskToEdit.children[1].textContent;
	category3Value.value = taskToEdit.children[2].textContent;
	category4Value.value = taskToEdit.children[3].textContent;
	category5Value.value = taskToEdit.children[4].textContent;
	category6Value.textContent = taskToEdit.children[5].textContent;
	category7Value.textContent = taskToEdit.children[6].textContent;
	popupEdit.classList.add("block");
};
const closeEditTask = () => {
	popupEdit.classList.remove("block");
};
const deleteTask = (e) => {
	e.target.closest("li").remove();

	const allTasks = document.querySelectorAll("li");

	if (allTasks.length === 0) {
		er7.textContent = "Brak czynności serwisowych.";
	}
};

const addEditTask = () => {
	if (
		category1Value.value === "" &&
		category2Value.value === "" &&
		category4Value.value === ""
	) {
		category1Value.style.backgroundColor = "tomato";
		category2Value.style.backgroundColor = "tomato";
		category4Value.style.backgroundColor = "tomato";
		er6.textContent = "Te pola nie mogą być puste!";
		er6.style.color = "rgb(255, 0, 0)";
	} else if (
		category1Value.value === "" &&
		category2Value.value === "" &&
		category4Value.value < 0
	) {
		category1Value.style.backgroundColor = "tomato";
		category2Value.style.backgroundColor = "tomato";
		category4Value.style.backgroundColor = "tomato";
		er6.textContent = "Te pola nie mogą być puste lub są mniejsze od 0!";
		er6.style.color = "rgb(255, 0, 0)";
	} else if (category1Value.value === "" && category2Value.value === "") {
		category1Value.style.backgroundColor = "tomato";
		category2Value.style.backgroundColor = "tomato";
		er6.textContent = "Te pola nie mogą być puste!";
		er6.style.color = "rgb(255, 0, 0)";
	} else if (category1Value.value === "" && category4Value.value === "") {
		category1Value.style.backgroundColor = "tomato";
		category4Value.style.backgroundColor = "tomato";
		er6.textContent = "Te pola nie mogą być puste!";
		er6.style.color = "rgb(255, 0, 0)";
	} else if (category2Value.value === "" && category4Value.value === "") {
		category2Value.style.backgroundColor = "tomato";
		category4Value.style.backgroundColor = "tomato";
		er6.textContent = "Te pola nie mogą być puste!";
		er6.style.color = "rgb(255, 0, 0)";
	} else if (category1Value.value === "") {
		category1Value.style.backgroundColor = "tomato";
		er6.textContent = "To pole nie może być puste!";
		er6.style.color = "rgb(255, 0, 0)";
	} else if (category2Value.value === "") {
		category2Value.style.backgroundColor = "tomato";
		er6.textContent = "To pole nie może być puste!";
		er6.style.color = "rgb(255, 0, 0)";
	} else if (category4Value.value === "") {
		category4Value.style.backgroundColor = "tomato";
		er6.textContent = "Wartość nie może być mniejsza od 0!";
		er6.style.color = "rgb(255, 0, 0)";
	} else if (category4Value.value < 0 || category5Value.value < 0) {
		er6.textContent = "Te wartości nie mogą być mniejsze od 0!";
		er6.style.color = "rgb(255, 0, 0)";
	} else {
		taskToEdit.children[0].textContent = category1Value.value;
		taskToEdit.children[1].textContent = category2Value.value;
		taskToEdit.children[2].textContent = category3Value.value;
		taskToEdit.children[3].textContent = category4Value.value;
		taskToEdit.children[4].textContent = category5Value.value;
		taskToEdit.children[5].textContent = "";
		taskToEdit.children[5].textContent =
			Number(taskToEdit.children[4].textContent) -
			Number(actualKm.textContent);
		taskToEdit.children[6].textContent = "";
		taskToEdit.children[6].textContent =
			Number(actualKm.textContent) -
			Number(taskToEdit.children[3].textContent);

		kilometers = " KM";

		newResult6.textContent += kilometers;
		newResult7.textContent += kilometers;

		for (const cat of catArray) {
			cat.style.backgroundColor = "rgb(211, 211, 211";
			cat.value = "";
			er5.textContent = "";
		}
	}
	const numbers = /[0-9]/;
	const letters = /[a-z]/;
	if (category4Value.value.match(numbers) && category4Value.value >= 0) {
		category4Value.style.backgroundColor = "rgb(211,211,211)";
	}
	if (category1Value.value !== "") {
		category1Value.style.backgroundColor = "rgb(211,211,211)";
	}
	if (category2Value.value.match(numbers)) {
		category2Value.style.backgroundColor = "rgb(211,211,211)";
	}
};

document.addEventListener("DOMContentLoaded", main);
