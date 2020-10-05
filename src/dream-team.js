module.exports = function createDreamTeam(members) {
  if (members == undefined || !Array.isArray(members) || members.length == 0) {
    return false;
  }
  
  members = members.map(member => (typeof member == 'string') ? member.trim().charAt(0).toUpperCase() : '');
  return members.sort().join('');
};
