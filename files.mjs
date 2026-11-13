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
