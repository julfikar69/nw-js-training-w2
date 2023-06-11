const vacancyData = [
    {nama: "Database Developer", kuota:1},
    {nama: "PHP Developer", kuota:2},
    {nama: "Javascript Developer", kuota:3},
    {nama: "Technical Writer", kuota:4},
    {nama: "System Analyst", kuota:0}
];
const position = ["Bandung", "Jakarta"];

let vacancySelect = document.getElementById("Vacancy");

for (const elementVacancy of vacancyData) {
    let vacancyOption = document.createElement("option");
    vacancyOption.text = elementVacancy.nama;
    vacancyOption.value = elementVacancy.nama;

    vacancySelect.appendChild(vacancyOption);
}


let positionSelect = document.getElementById("Position");

for (const elementPosition of position) {
    let positionOption = document.createElement("option");
    positionOption.text = elementPosition;
    positionOption.value = elementPosition;

    positionSelect.appendChild(positionOption);
}



