// images.js
// This line imports some built-in Node helper functions
import { accessSync, mkdirSync, writeFileSync } from "node:fs"

// This creates a subfolder called 'output' if it doesn't already exist
try {
  accessSync('output')
} catch (err) {
  mkdirSync('output')
}

// Here are a few geometric shapes for you to work with.
// They are encoded using SVG markup (Scalable Vector Graphics),
// which is used for icons, logos, and illustrations.
// Keep in mind, within this JavaScript file, they are just
// strings, so you can treat them as strings.
const square = `<?xml version="1.0" encoding="UTF-8"?>
                <svg id="square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
                  <defs><style>.cls-1{fill:#e94c33;}</style></defs>
                  <rect class="cls-1" width="160" height="160"/>
                </svg>`

const triangle = `<?xml version="1.0" encoding="UTF-8"?>
                  <svg id="triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.5 63.65">
                    <defs><style>.cls-1{fill:#ec8323;}</style></defs>
                    <polygon class="cls-1" points="36.75 63.65 0 0 73.5 0 36.75 63.65"/>
                  </svg>`

const circle = `<?xml version="1.0" encoding="UTF-8"?>
                <svg id="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.74 61.74">
                  <defs><style>.cls-1{fill:#1579A0;}</style></defs>
                  <path class="cls-1" d="m0,30.87c0,17.05,13.82,30.87,30.87,30.87s30.87-13.82,30.87-30.87S47.92,0,30.87,0,0,13.82,0,30.87"/>
                </svg>`
