const nom = document.querySelector("#nom");
const specialite = document.querySelector("#specialite");
const commentaire = document.querySelector("#commentaire");
const msgError = document.querySelector("#msg");
const btn = document.querySelector("#btn");
const divPostBloc = document.querySelector("#divPost");
const post = [];
btn.addEventListener("click", function() {
    //console.log(nom.value)
    const nomValue = nom.value;
    const specialiteValue = specialite.value;
    const commentaireValue = commentaire.value;
    //console.log(addPost(nomValue, specialiteValue, commentaireValue));
    addPost(nomValue, specialiteValue, commentaireValue);
    console.log("sss");
});
function showPost() {
    const postNode = post.map((post, index)=>{
        return createPost(post, index);
    });
    //tbody.innerHTML = " ";//
    //tbody.append(...postNode);//
    divPostBloc.append(...postNode);
}
function createPost(post, index) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = "ssdsdsddsd";
    div.append(p);
    return div;
/*const divPost = document.createElement('div');
    divPost.setAttribute('class', 'Post');

    const divHeading = document.createElement('div');
    divHeading.setAttribute('class', 'heading');

    const divHead = document.createElement('div');
    divHead.setAttribute('class', 'head');

    const h3 = document.createElement('h3');
    //h3.textContent = nom.value;
    //h3.textContent = `${arr[k].nomUtilisateur}`;
    h3.textContent = `${post.nom}`;
    const h5 = document.createElement('h5');
    //h5.textContent = specialite.value;
    //h5.textContent = `${arr[k].specialteUtilisateur}`;
    h5.textContent = `${post.specialite}`;

    const pHead = document.createElement('p');
    pHead.setAttribute('class', 'date');
    pHead.textContent = 'result';
    //pHead.textContent = `${formatDistance((Date.parse(arr[k].dateCreated)), new Date(), { addSuffix: true, locale: fr })}`;

    const divTextContent = document.createElement('div');
    divTextContent.setAttribute('class', 'textContent')

    const pComment = document.createElement('p');
    pComment.setAttribute('class', 'comment')
    //pComment.textContent = commentaire.value;
    //pComment.textContent = `${arr[k].commentUtilisateur}`;
    pComment.textContent = `${post.commentaire}`;

    //divPostBloc.appendChild(divPost);
    divPost.append(divHeading, divTextContent);
    divHeading.append(divHead, pHead);
    divHead.append(h3, h5);
    divTextContent.appendChild(pComment);
    return divPost;*/ }
function addPost(nom, specialite, commentaire) {
    post.push({
        nom,
        specialite,
        commentaire
    });
}

//# sourceMappingURL=index.09c24910.js.map
