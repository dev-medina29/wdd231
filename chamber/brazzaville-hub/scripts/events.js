// scripts/events.js
// Loads ./data/events.json and renders a simple list. Replace with Google Calendar API if needed.

async function loadEvents(){
  const container = document.getElementById('events-list');
  try{
    const res = await fetch('./data/events.json', {cache: 'no-store'});
    if(!res.ok) throw new Error('Network response not ok');
    const data = await res.json();
    renderEvents(data.events || []);
  }catch(err){
    container.innerHTML = `<p class="error">Unable to load events. ${err.message}</p>`;
    console.error(err);
  }
}

function renderEvents(events){
  const container = document.getElementById('events-list');
  if(!events.length){
    container.innerHTML = '<p>No upcoming events — check back later.</p>';
    return;
  }

  // sort by start date
  events.sort((a,b)=> new Date(a.start) - new Date(b.start));

  container.innerHTML = '';
  events.forEach(e => {
    const el = document.createElement('article');
    el.className = 'event';

    const title = document.createElement('div');
    title.innerHTML = `<strong>${escapeHtml(e.title)}</strong><div class="meta">${formatDateRange(e.start,e.end)} • ${escapeHtml(e.location || 'Online')}</div>`;

    const action = document.createElement('div');
    action.innerHTML = `<a href="${encodeURI(e.url || '#')}" class="btn" aria-label="More about ${escapeHtml(e.title)}">Details</a>`;

    el.appendChild(title);
    el.appendChild(action);
    container.appendChild(el);
  });
}

function formatDateRange(startISO,endISO){
  try{
    const s = new Date(startISO);
    const e = endISO ? new Date(endISO) : null;
    const opts = {year:'numeric',month:'short',day:'numeric', hour:'2-digit', minute:'2-digit'};
    if(e){
      return `${s.toLocaleString()} — ${e.toLocaleString()}`;
    }
    return s.toLocaleString();
  }catch(_){
    return `${startISO}${endISO? ' — '+endISO:''}`;
  }
}

function escapeHtml(s){
  if(!s) return '';
  return s.replace(/[&<>"']/g, function(ch){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]);
  });
}

// Initialize on DOM ready
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', loadEvents);
}else{
  loadEvents();
}
