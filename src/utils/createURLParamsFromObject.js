function createUrlParamsFromObject(paramsObject) {
  const urlParams = new URLSearchParams();

  for (const key in paramsObject) {
    // eslint-disable-next-line no-prototype-builtins
    if (paramsObject.hasOwnProperty(key)) {
      urlParams.append(key, paramsObject[key]);
    }
  }

  return urlParams.toString();
}

export default createUrlParamsFromObject;
