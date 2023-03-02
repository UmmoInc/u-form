export const loadState = () => {
    try {
      const serialState = localStorage.getItem('appState');
      if (serialState === null) {
        return undefined;
      }
      return JSON.parse(serialState);
    } catch (err) {
      return undefined;
    }
};

export const loadGradeState = () => {
  try {
    const serialState = localStorage.getItem('gradeResponse');
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};

export const loadValue = () => {
  try {
    const serialState = localStorage.getItem('value');
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};

export const loadUser = () => {
  try {
    const serialState = localStorage.getItem('user');
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};

export const loadUserData = () => {
  try {
    const serialState = localStorage.getItem('userData');
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
    try {
      const serialState = JSON.stringify(state);
      localStorage.setItem('appState', serialState);
    } catch(err) {
        console.log(err);
    }
};