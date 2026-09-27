// // const usernameInput = document.getElementById("usernameInput")
// // const passwordInput = document.getElementById("passwordInput")
// // const admin = document.getElementById("admin")
// // const user = document.getElementById("user")

// // if(localStorage.getItem("username") == "admin") {
// //     window.location.href = "/admin.html"
// // }

// // const onlogin = () => {
// //     localStorage.setItem("username", usernameInput.value)
// //     if(usernameInput.value == "adolfhitler" && passwordInput.value == "nazi123") {
// //       window.location.href = "/admin.html"
// //     } else {
// //       window.location.href = "/user.html"
// //     }
// // }

// // const onLogout = () => {
// //   localStorage.clear() //ini buat ngapus data di local storage
// //   location.reload() //buat negrefresh halaman
// //   window.location.href = "/index.html" //buat ke halaman login
// // }

// // const teks = document.getElementById("teksHello")
// // const p = document.getElementsByClassName("item")

// const body = document.body

// const div = document.createElement("div")
// div.textContent = "Ini tag paragraph dari JavaScript"

// const p = document.createElement("p")
// p.innerHTML = "<marquee>Ini tag paragraf di JavaScript</marquee>"

// const div2 = document.createElement("div2")
// div2.textContent = "Ini tag yang kedua"

// console.log("div")
// console.log("p")
// console.log("div2")

// body.append(div)
// body.append(p)
// body.append(div2)

// const getData = async () => {
//   const data = await fetch('https://dummyjson.com/products')
//   const res = await data.json()

//   console.table(res.products)
// }

// getData()

const book = {
  title: "Pulang Pergi",
  pages: "250",
  writer: "Tere Liye",
  publisher: "SABAKGRIP",
}

const { title, pages, writer, publisher } = book

console.log(`hi, this is my book story. the title is ${title}, ${pages} pages, from ${writer}, ${publisher}`)


