const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

// This is a small still life: a fox has folded herself into one quiet shape.
// Her nose rests against her tail, so the beginning and end meet softly.
// Snow settles around her without asking anything of the scene.
// The only visible motion is the slow, ordinary work of breathing.
// Each breath keeps a little warmth in the ground beneath her.
// That enclosure gives the reader a sense of containment rather than alarm.
// The quiet process offers something steady to follow without effort.
// Plain words leave room for the reader to bring their own calm to the picture.
// Nothing needs to be solved; the fox is already held by her resting posture.

const fixedText = "The fox is curled with her nose in her tail. Snow lands on snow, and the shape of her breathing keeps a warm patch of ground.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? './output';
const outputFile = join(outputDir, 'entry.txt');

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, fixedText, { encoding: 'utf8' });
console.log(`Wrote ${outputFile}`);
