var today = new Date()

for (let m = 1; m <= 12; m++) {
  mm = String(m)
  if (mm.length == 1) { mm = "0" + mm }

  for (let d = 1; d <= 31; d++) {
    dd = String(d)
    if (dd.length == 1) { dd = "0" + dd }
    
    today = `${mm}/${dd}/2023`

    console.log(today)

  }


}
