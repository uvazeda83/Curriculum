function showSection(sectionId) {
    var selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        document.getElementById('section1').style.display = 'none';
        document.getElementById('section2').style.display = 'none';
        document.getElementById('section3').style.display = 'none';
        selectedSection.style.display = 'block';
    }
}