const cleanParams = (params, allowed) => {
  let filtered = {};
  for (let i = 0; i < allowed.length; i++) {
    if (params.hasOwnProperty(allowed[i])) {
      filtered[allowed[i]] = params[allowed[i]];
    }
  }
  return filtered;
};

module.exports = cleanParams;