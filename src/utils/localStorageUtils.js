export const setBooleanInLocalStorage = (key, value) => {
  if (value==="false") {
    localStorage.setItem(key, false);
  } else if (value==="true") {
    localStorage.setItem(key, true);
  }
};

