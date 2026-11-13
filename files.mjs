import { readFileSync } from 'node:fs';
import { joinPath } from './paths.mjs';

// Reads a note from the notes folder by its name.
export function readNote(name) {
  return readFileSync(joinPath('notes', name), 'utf8');
}

// Returns the first line of a note.
export function firstLine(name) {
  return readNote(name).split('\n')[0];
}

// Reads a note named in a request's query string.
export function noteFromQuery(query) {
  return readNote(new URLSearchParams(query).get('note'));
}
