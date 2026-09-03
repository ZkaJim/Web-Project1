const number = 1450;

if (number < 10) {
    console.log("Satuan.");
} else if (number < 100) {
    console.log("Puluhan.");
} else if (number < 1000) {
    console.log("Ratusan.");
} else {
    console.log("Ribuan.");
}