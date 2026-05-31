/* shared_state.js — localStorage bridge for Communist Dating Sim
   Include this before any other <script> on every page.
   All pages share the same save slot so state persists across navigation. */

const SAVE_KEY = 'cds_state_v1';

function saveState() {
  try {
    const s = {
      playerName,
      stats,
      relationship,
      choicesMade,
      chaptersRead,
      skillPoints,
      unlockedSkills: [...unlockedSkills],
      unlockedAch:    [...unlockedAch],
      viewedChars:    [...viewedChars],
      dlgHistory,
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(s));
  } catch(e) { /* storage blocked */ }
}

function loadState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    const s = JSON.parse(raw);
    if (s.playerName)   playerName = s.playerName;
    if (s.stats)        Object.assign(stats, s.stats);
    if (s.relationship) Object.assign(relationship, s.relationship);
    if (typeof s.choicesMade  === 'number') choicesMade  = s.choicesMade;
    if (typeof s.chaptersRead === 'number') chaptersRead = s.chaptersRead;
    if (typeof s.skillPoints  === 'number') skillPoints  = s.skillPoints;
    if (Array.isArray(s.unlockedSkills)) s.unlockedSkills.forEach(id => unlockedSkills.add(Number(id)));
    if (Array.isArray(s.unlockedAch))    s.unlockedAch.forEach(id => unlockedAch.add(id));
    if (Array.isArray(s.viewedChars))    s.viewedChars.forEach(id => viewedChars.add(id));
    if (Array.isArray(s.dlgHistory))     dlgHistory = s.dlgHistory;
    return true;
  } catch(e) { return false; }
}
