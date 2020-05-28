// Filters with checkboxes
document.getElementById("check").addEventListener("click", filterCheck);
function filterCheck() {
  let data = document.querySelectorAll("#check-items li");
  let checkboxItems = document.querySelectorAll(".item");
  let i = 0;
  let status = false;
  while (i < data.length) {
    let value = data[i].value;
    let present = false;
    let j = 0;
    let val;
    while (j < checkboxItems.length) {
      if (checkboxItems[j].checked === true) {
        status = true;
        val = checkboxItems[j].value;

        //   console.log("value vs val" + value, val, val == value);
        if (value == val) {
          present = true;
          break;
        }
      }
      j++;
    }
    if (present == true) {
      // console.log(data[i]);
      data[i].style = "visibility:visible; display:''";
    } else {
      data[i].style = "visibility:hidden; display:none";
    }
    i++;
  }

  if (status == false) {
    let j = 0;
    while (j < data.length) {
      let val = data[j].value;
      // console.log("value vs val" + value, val);

      data[j].style = "visibility:visible; display:''";

      j++;
    }
  }
  console.log(status);
  i++;
}
