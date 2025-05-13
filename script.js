document.getElementById("form-examen").addEventListener("submit", async function (e) { 
  e.preventDefault();

  const data = {
    titre: document.getElementById("titre").value,
    description: document.getElementById("description").value,
    public: document.getElementById("public").value,
    nb_questions: document.getElementById("nb-questions").value
  };

  try {
    const res = await fetch("http://localhost:5000/api/examens", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (result.success) {
      window.location.href = `ajouter_questions.html?exam_id=${result.exam_id}`;
    } else {
      alert("Erreur : " + result.message);
    }
  } catch (error) {
    alert("Erreur de connexion : " + error.message);
  }
});

// Sélection du bouton et ajout d'un événement 'click'
const bouton = document.getElementById('lien-examen');
bouton.addEventListener('click', function() {
  alert("Vous avez cliqué sur le bouton !");
  window.location.href = "https://www.example.com"; 
  document.getElementById('link').textContent = lien;
      document.getElementById('result').style.display = 'block';

      // Ici tu peux aussi envoyer les données vers un backend via fetch()
      console.log({ titre, description, publicCible, lien });
});
const form = document.getElementById('form-examen');
  const linkContainer = document.getElementById('lien-examen');
  const linkSpan = document.getElementById('generated-link');
  const copyBtn = document.getElementById('btn-copy');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const uuid = generateUUID();
    const lien = "https://examora.com/exam/" + uuid;

    linkSpan.textContent = lien;
    linkContainer.style.display = 'block';
    copyBtn.setAttribute('data-lien', lien);
  });

  copyBtn.addEventListener('click', function () {
    const lien = this.getAttribute('data-lien');

    navigator.clipboard.writeText(lien).then(() => {
      window.location.href = "ajout_qst.html";
    }).catch(() => {
      alert("Erreur lors de la copie du lien.");
    });
  });
  function genererLien() {
    const titre = document.getElementById('titre').value;
    const description = document.getElementById('description').value;
    const publicCible = document.getElementById('public').value;

    if (!titre || !description || !publicCible) {
      alert("Remplis tous les champs !");
      return;
    }

    const token = Math.random().toString(36).substring(2, 10);
    const lien = `https://exam.local/exam/${token}`;

    document.getElementById('lienGenere').textContent = "Lien généré : " + lien;
  }
