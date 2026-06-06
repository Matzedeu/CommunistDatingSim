/* shared_state.js — localStorage bridge for Communist Dating Sim
   Place this in the same folder as all HTML files.
   Every page includes <script src="shared_state.js"></script>
   before its own <script> block. */

const SAVE_KEY = 'cds_state_v2';

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
      viewedChars:    [...(typeof viewedChars !== 'undefined' ? viewedChars : [])],
      dlgHistory:     typeof dlgHistory !== 'undefined' ? dlgHistory : [],
      unlockedQuests: [...(typeof unlockedQuests !== 'undefined' ? unlockedQuests : [])],
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(s));
  } catch(e) {}
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
    if (Array.isArray(s.viewedChars) && typeof viewedChars !== 'undefined')
      s.viewedChars.forEach(id => viewedChars.add(id));
    if (Array.isArray(s.dlgHistory) && typeof dlgHistory !== 'undefined')
      dlgHistory = s.dlgHistory;
    if (Array.isArray(s.unlockedQuests) && typeof unlockedQuests !== 'undefined')
      s.unlockedQuests.forEach(id => unlockedQuests.add(id));
    return true;
  } catch(e) { return false; }
}
