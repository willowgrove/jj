export function fetchJSON(url: string, defaultValue?: any) {
  return fetch(url)
    .then((response) => response.json())
    .then((d) => d ?? defaultValue)
    .catch(() => defaultValue);
}

export function fetchText(url: string, defaultValue?: any) {
  return fetch(url)
    .then((response) => response.text())
    .then((d) => d ?? defaultValue)
    .catch(() => defaultValue);
}
