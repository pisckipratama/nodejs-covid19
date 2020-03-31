$(document).ready(() => {
  loadDataGlobalPositif();
  loadDataGlobalSembuh();
  loadDataGlobalMeninggal();
  loadDataIndonesia();
  loadDataProvinsi();
})

const loadDataIndonesia = () => {
  $.ajax({
      method: "GET",
      url: "https://api.kawalcorona.com/indonesia/",
      dataType: "json"
    })
    .done(result => {
      const data = result[0];
      console.log("dataIndonesia:", data)
      let indoMeni = `
        <p class="card-title"><strong>Total Meninggal</strong></p>
        <p class="card-text h4 text-muted">${data.meninggal} orang</p>
        `

      let indoPositif = `
        <p class="card-title"><strong>Total Positif</strong></p>
        <p class="card-text h4 text-muted">${data.positif} orang</p>
        `

      let indoSembuh = `
        <p class="card-title"><strong>Total Sembuh</strong></p>
        <p class="card-text h4 text-muted">${data.sembuh} orang</p>
        `

      $('#indonesia-total-meninggal').html(indoMeni)
      $('#indonesia-total-sembuh').html(indoSembuh)
      $('#indonesia-total-positif').html(indoPositif)
    })
}

const loadDataGlobalPositif = () => {
  $.ajax({
      method: "GET",
      url: "https://api.kawalcorona.com/positif/",
      dataType: "json"
    })
    .done(result => {
      const data = result
      console.log("dataGlobalPositif", data)

      let htmlPosi = `
        <p class="card-title"><strong>${data.name}</strong></p>
        <p class="card-text h4 text-muted">${data.value} orang</p>`

      $("#global-positif").html(htmlPosi)
    })
}

const loadDataGlobalSembuh = () => {
  $.ajax({
      method: "GET",
      url: "https://api.kawalcorona.com/sembuh/",
      dataType: "json"
    })
    .done(result => {
      const data = result
      console.log("dataGlobalSembuh", data)

      let htmlSem = `
        <p class="card-title"><strong>${data.name}</strong></p>
        <p class="card-text h4 text-muted">${data.value} orang</p>`

      $("#global-sembuh").html(htmlSem)
    })
}

const loadDataGlobalMeninggal = () => {
  $.ajax({
      method: "GET",
      url: "https://api.kawalcorona.com/meninggal/",
      dataType: "json"
    })
    .done(result => {
      console.log("dataGlobalMeninggal", result)

      let htmlMen = `
        <p class="card-title"><strong>${result.name}</strong></p>
        <p class="card-text h4 text-muted">${result.value} orang</p>`

      $("#global-meninggal").html(htmlMen);
    })
}

const loadDataProvinsi = () => {
  $.ajax({
    method: "GET",
    url: "https://api.kawalcorona.com/indonesia/provinsi/",
    dataType: "json"
  })
  .done(result => {
    console.log("dataProvinsi", result)

    let htmlProv = ''
    result.forEach((item, index) => {
      htmlProv += `
      <tr>
        <th scope="row" class="text-center">${index + 1}</th>
        <td class="text-center">${item.attributes.Kode_Provi}</td>
        <td>${item.attributes.Provinsi}</td>
        <td class="text-center">${item.attributes.Kasus_Posi}</td>
        <td class="text-center">${item.attributes.Kasus_Semb}</td>
        <td class="text-center">${item.attributes.Kasus_Meni}</td>
      </tr>
      `  
    })
    $("table tbody").html(htmlProv);
  })
}