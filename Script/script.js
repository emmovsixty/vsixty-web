let badan = document.body;
const limit = 5;
let darkCounter = 0;

function mode() {
  darkCounter++;
  if (darkCounter == limit) {
    console.log('batas perubahan mode habis');
    return;
  }
  console.log('mengganti mode sebanyak ', darkCounter, ' kali');
  badan.classList.toggle('dark');
}
