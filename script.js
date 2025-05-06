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
});
