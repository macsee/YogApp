export function formatDateComp(dia) {
  let month = dia.getMonth() + 1;
  let day = dia.getDate();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  return dia.getFullYear() + "-" + month + "-" + day;
}

export function printFormData(formdata) {
  for (var pair of formdata.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }
}
