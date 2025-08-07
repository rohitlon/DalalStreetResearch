// Sample JS to demonstrate interactivity – add more if needed

document.addEventListener('DOMContentLoaded', () => {
  console.log("DalalStreet Research site loaded.");

  const links = document.querySelectorAll('.report-card a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      alert('This is a demo. No full report available.');
      e.preventDefault();
    });
  });
});
