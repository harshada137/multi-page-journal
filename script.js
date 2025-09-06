const form = document.getElementById('journalForm');
const entriesList = document.getElementById('entries');

if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const content = document.getElementById('content').value;
    if(!title || !date || !content) return alert("All fields required.");

    const entry = {title, date, content};
    let entries = JSON.parse(localStorage.getItem('journalEntries') || "[]");
    entries.push(entry);
    localStorage.setItem('journalEntries', JSON.stringify(entries));
    alert("Saved! Refresh Journal page to see entries.");
    form.reset();
  });
}

if(entriesList){
  let entries = JSON.parse(localStorage.getItem('journalEntries') || "[]");
  entriesList.innerHTML = entries.map(e=>`<li><strong>${e.date} - ${e.title}</strong><br>${e.content}</li>`).join('');
}