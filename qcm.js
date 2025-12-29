const reponse = {
    q1:["Rabat"],
    q2:["Paris"],
    q3:[
        "Reduction des emissions de gaz a effet de serre",
        "Ressources inepuisables",
        "Diminution de la pollution de lair"
    ],
    q4:[
        "La lumiere du soleil",
        "Le dioxyde de carbone",
        "L eau et les nutriments du sol"
    ],
    q5:["Paris","Madrid","Rome"]
};

function resetQCM() {
    document.getElementById("QCM").reset();
}

function afficherCorrige() {
    const nouvelleFenetre = window.open("", "Corrige", "width=600,height=600");
    let html = `
        <html>
        <head>
            <title>Corrigé du QCM</title>
            <style>
                .bonne { color: green; text-decoration: underline; font-weight: bold; }
            </style>
        </head>
        <body>
            <h2>Corrigé du QCM</h2>

            <p>1. Quelle est la capitale du Maroc ?</p>
            <p>A) Marrakech</p>
            <p class="bonne">B) Rabat</p>
            <p>C) Tanger</p>
            <p>D) Midelt</p>

            <p>2. Quelle est la capitale de la France ?</p>
            <p class="bonne">A) Paris</p>
            <p>B) Lyon</p>
            <p>C) Lille</p>
            <p>D) Marseille</p>

            <p>3. Quels sont les avantages des énergies renouvelables ?</p>
            <p class="bonne">A) Reduction des emissions de gaz a effet de serre</p>
            <p class="bonne">B) Ressources inepuisables</p>
            <p>C) Production de l'electricité constante sans dépendre du soleil ou du vent</p>
            <p class="bonne">D) Diminution de la pollution de l'air</p>

            <p>4. Éléments nécessaires à la croissance d'une plante :</p>
            <p class="bonne">A) La lumière du soleil</p>
            <p class="bonne">B) Le dioxyde de carbone</p>
            <p>C) Un régime carnivore</p>
            <p class="bonne">D) L’eau et les nutriments du sol</p>

            <p>5. Quelles villes sont capitales ?</p>
            <p class="bonne">A) Paris</p>
            <p class="bonne">B) Madrid</p>
            <p>C) Barcelone</p>
            <p class="bonne">D) Rome</p>
        </body>
        </html>
    `;
    nouvelleFenetre.document.write(html);
    nouvelleFenetre.document.close();
}

function afficherResultat() {
    const form = document.getElementById("QCM");
    const resultatFenetre = window.open("", "Résultat", "width=600,height=600");
    let html = `
        <html>
        <head>
            <title>Résultat du QCM</title>
            <style>
                .correct { color: green; font-weight: bold; }
                .incorrect { color: red; font-weight: bold; }
            </style>
        </head>
        <body>
            <h2>Résultat du QCM</h2>
    `;

    // q1
    let q1 = Array.from(form.q1).find(r => r.checked)?.value;
    html += q1 === reponse.q1[0]
        ? "<p class='correct'>Question 1 : Correcte</p>"
        : "<p class='incorrect'>Question 1 : Incorrecte</p>";

    // q2
    let q2 = Array.from(form.q2).find(r => r.checked)?.value;
    html += q2 === reponse.q2[0]
        ? "<p class='correct'>Question 2 : Correcte</p>"
        : "<p class='incorrect'>Question 2 : Incorrecte</p>";
    function comparerListes(liste1, liste2) {
        const a = liste1.map(x => x.trim()).sort();
        const b = liste2.map(x => x.trim()).sort();
        return JSON.stringify(a) === JSON.stringify(b);
    }

    // q3
    let q3 = Array.from(form.q3).filter(r => r.checked).map(r => r.value);
    html += comparerListes(q3, reponse.q3)
        ? "<p class='correct'>Question 3 : Correcte</p>"
        : "<p class='incorrect'>Question 3 : Incorrecte</p>";

    // q4
    let q4 = Array.from(form.q4).filter(r => r.checked).map(r => r.value);
    html += comparerListes(q4, reponse.q4)
        ? "<p class='correct'>Question 4 : Correcte</p>"
        : "<p class='incorrect'>Question 4 : Incorrecte</p>";

    // q5
    let q5 = Array.from(form.q5).filter(r => r.checked).map(r => r.value);
    html += comparerListes(q5, reponse.q5)
        ? "<p class='correct'>Question 5 : Correcte</p>"
        : "<p class='incorrect'>Question 5 : Incorrecte</p>";

    html += "</body></html>";
    resultatFenetre.document.write(html);
    resultatFenetre.document.close();
}