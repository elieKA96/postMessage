import { formatDistance, subDays, format } from 'date-fns'
import { fr } from 'date-fns/locale'

const nom = document.querySelector("#nom");
const specialite = document.querySelector("#specialite");
const commentaire = document.querySelector("#commentaire");
const msgError = document.querySelector("#msg");
const btn = document.querySelector("#btn");
const divPostBloc = document.querySelector("#divPost");

let data = [];
let id = "no";

const distanceDateFormatted = (newDate) => {
    return formatDistance(newDate, new Date(), { addSuffix: true, locale: fr })
}
const distanceDateFormatted1 = (newDate) => formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })

document.addEventListener('DOMContentLoaded', selectData);
btn.addEventListener("click", manageData);
function manageData() {
    msgError.textContent = "";
    const nomUtilisateur = nom.value;
    const specialteUtilisateur = specialite.value;
    const commentUtilisateur = commentaire.value;
    const dateCreated = new Date();
    console.log(dateCreated);

    if (nomUtilisateur == '' || specialteUtilisateur == '' || commentUtilisateur == '') {
        msgError.textContent = 'Remplissez le champs'
    }
    else {
        console.log(id);
        if (id == 'no') {
            let arr = getCrudData();
            if (arr == null) {
                data = [{ nomUtilisateur, specialteUtilisateur, commentUtilisateur, dateCreated }];//
                setCrudData(data);
            } else {
                arr.push({ nomUtilisateur, specialteUtilisateur, commentUtilisateur, dateCreated });//
                setCrudData(arr);
            }
            msgError.textContent = "Data added";
            selectData();
        } else {
            let arr = getCrudData();
            arr[id] = nom.value;//
            setCrudData(arr);
            message.textContent = "Data updated";
        }
        nom.value = " ";
        specialite.value = " ";
        commentaire.value = " "
    }

}
function selectData() {

    let arr = getCrudData();
    if (arr != null) {
        let sno = 1;
        for (let k in arr) {
            console.log(arr[k]);
            const divPost = document.createElement('div');
            divPost.setAttribute('class', 'Post');

            const divHeading = document.createElement('div');
            divHeading.setAttribute('class', 'heading');

            const divHead = document.createElement('div');
            divHead.setAttribute('class', 'head');

            const h3 = document.createElement('h3');
            h3.textContent = `${arr[k].nomUtilisateur}`;
            const h5 = document.createElement('h5');
            h5.textContent = `${arr[k].specialteUtilisateur}`;

            const pHead = document.createElement('p');
            pHead.setAttribute('class', 'date');
            pHead.textContent = `${formatDistance((Date.parse(arr[k].dateCreated)), new Date(), { addSuffix: true, locale: fr })}`;

            const divTextContent = document.createElement('div');
            divTextContent.setAttribute('class', 'textContent')

            const pComment = document.createElement('p');
            pComment.setAttribute('class', 'comment')
            pComment.textContent = `${arr[k].commentUtilisateur}`;

            divPostBloc.appendChild(divPost);
            divPost.append(divHeading, divTextContent);
            divHeading.append(divHead, pHead);
            divHead.append(h3, h5);
            divTextContent.appendChild(pComment);

            sno++;
        }

    }
}


function getCrudData() {
    let arr = JSON.parse(localStorage.getItem('crud'));
    return arr;
}

function setCrudData(arr) {
    localStorage.setItem('crud', JSON.stringify(arr));
}

