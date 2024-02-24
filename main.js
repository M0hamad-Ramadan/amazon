let mainSelectLabel = document.getElementById("mainSelectLabel");
let mainSelect = document.getElementById("mainSelect");
let searchInp = document.getElementById("searchInp");
let searchForm = document.getElementById("searchForm");

mainSelect.addEventListener("focus", function (e) {
  mainSelectLabel.style = ` outline: 3px solid #ff9900;`;
});

mainSelect.addEventListener("blur", function (e) {
  mainSelectLabel.style = ` outline: 0px solid #ff9900;`;
});

searchInp.addEventListener("focus", () => {
  searchForm.style = ` outline: 3px solid #ff9900;`;
});

searchInp.addEventListener("blur", () => {
  searchForm.style = ` outline: 0px solid #ff9900;`;
});

/*---------------------------*/

// choose lang on hovermainBackDrop
let contLang = document.getElementById("contLang");
let chooseLang = document.getElementById("chooseLang");
let mainBackDrop = document.getElementById("mainBackDrop");

contLang.addEventListener("mouseenter", () => {
  setTimeout(() => {
    chooseLang.style.display = "flex";
    mainBackDrop.style.display = "flex";
  }, 200);
});

contLang.addEventListener("mouseleave", () => {
  chooseLang.style.display = "none";
  mainBackDrop.style.display = "none";
});

/*---------------------------*/
let hiLogIn = document.getElementById("hiLogIn");
let logInDialog = document.getElementById("logInDialog");

hiLogIn.addEventListener("mouseenter", () => {
  setTimeout(() => {
    logInDialog.style.display = "flex";
    mainBackDrop.style.display = "flex";
  }, 200);
});

hiLogIn.addEventListener("mouseleave", () => {
  logInDialog.style.display = "none";
  mainBackDrop.style.display = "none";
});
