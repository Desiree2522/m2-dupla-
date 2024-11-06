const nameResponsavelInput = document.getElementById("nameResponsavel");
const nameCriançaInput = document.getElementById("nameCriança");
const sintomasInput = document.getElementById("sintomas");
const idadeInput = document.getElementById("idadeCriança");
const formulario = document.getElementById("formulario");
const criançaList = document.getElementById("criançaList");
const saidaSection = document.getElementById("saida");

let crianças = [];
let currentIndex = null;

class Criança {
    constructor(nomeResponsavel, nomeCriança, sintomas, idade) {
        this.nomeResponsavel = nomeResponsavel;
        this.nomeCriança = nomeCriança;
        this.sintomas = sintomas;
        this.idade = idade;
    }
}

function renderCriançaList() {
    criançaList.innerHTML = "";
    crianças.forEach((criança, index) => {
        const li = document.createElement("li");
        li.innerText = `Responsável: ${criança.nomeResponsavel}, Criança: ${criança.nomeCriança}, Sintomas: ${criança.sintomas}, Idade: ${criança.idade} anos`;

        const editButton = document.createElement("button");
        editButton.innerText = "Editar";
        editButton.className = "button edit-button";
        editButton.onclick = () => editCriança(index);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Deletar";
        deleteButton.className = "button delete-button";
        deleteButton.onclick = () => deleteCriança(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        criançaList.appendChild(li);
    });

    saidaSection.classList.toggle("hidden", crianças.length === 0);
}

function addcriança(event) {
    event.preventDefault();
    const nomeResponsavel = nameResponsavelInput.value;
    const nomeCriança = nameCriançaInput.value;
    const sintomas = sintomasInput.value;
    const idade = idadeInput.value;

    if (currentIndex !== null) {
        crianças[currentIndex] = new Criança(nomeResponsavel, nomeCriança, sintomas, idade);
        currentIndex = null;
    } else {
        crianças.push(new Criança(nomeResponsavel, nomeCriança, sintomas, idade));
    }

    formulario.reset();
    renderCriançaList();
}

function editCriança(index) {
    const criança = crianças[index];
    nameResponsavelInput.value = criança.nomeResponsavel;
    nameCriançaInput.value = criança.nomeCriança;
    sintomasInput.value = criança.sintomas;
    idadeInput.value = criança.idade;
    currentIndex = index;
}

function deleteCriança(index) {
    crianças.splice(index, 1);
    renderCriançaList();
}

formulario.addEventListener("submit", addcriança);