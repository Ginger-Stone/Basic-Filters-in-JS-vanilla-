// Filters with searches
document.getElementById("filter").addEventListener("keyup", filterList);

function filterList() {
  let filter = document.getElementById("filter");
  let wordlist = document.getElementById("wordlist");
  let category = document.querySelectorAll(".category");

  let i = 0;
  while (i < category.length) {
    let value = category[i].innerText.toUpperCase();
    if (value.indexOf(filter.value.toUpperCase()) === -1) {
      category[i].style =
        "visibility: hidden; display:none; transition:all 500ms ease-in";
    } else {
      category[i].style =
        "visibility: visible; display:''; transition:all 500ms ease-in";
    }

    i++;
  }
}
