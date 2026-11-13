// Joins two path segments with one slash.
export function joinPath(a, b) {
  return a.replace(/\/$/, '') + '/' + b.replace(/^\//, '');
}
