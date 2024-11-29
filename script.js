function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
}

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Certifications array with file names and paths
const certifications = [
    { title: 'NLP Certification', file: 'Sem5-certifications/E22CSEU1245_LakshayGarg_CSET-346.pdf' },
    { title: 'General Certification', file: 'Sem5-certifications/E22CSEU1245.pdf' },
    { title: 'Hyperparameters Tuning', file: 'Sem5-certifications/hyperparameters tuning.pdf' },
    { title: 'Generative AI with llm Certification', file: 'Sem5-certifications/IMDAI_Certificate.pdf' },
    { title: 'Supervised ML', file: 'Sem5-certifications/supervised ml.pdf' },
    { title: 'Unsupervised ML', file: 'Sem5-certifications/unsupervise ml.pdf' },
];

function displayCertifications() {
    const container = document.getElementById('certification-list');
    certifications.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'certification-card';
        card.innerHTML = `
            <h3>${cert.title}</h3>
            <embed src="${cert.file}" type="application/pdf" width="100%" height="200px">
        `;
        container.appendChild(card);
    });
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const container = document.getElementById('certification-list');
        const card = document.createElement('div');
        card.className = 'certification-card';
        card.innerHTML = `
            <h3>${file.name}</h3>
            <embed src="${e.target.result}" type="application/pdf" width="100%" height="200px">
        `;
        container.appendChild(card);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

displayCertifications();