const fs = require('fs');
const path = require('path');
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
const { JSDOM } = require('jsdom');

describe('index.html structure', () => {
  let document;
  beforeAll(() => {
    const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
    document = new JSDOM(html).window.document;
  });

  test('contains navigation bar', () => {
    const nav = document.querySelector('nav.navbar');
    expect(nav).not.toBeNull();
  });

  test('contact form posts to formsubmit', () => {
    const form = document.querySelector('form');
    expect(form).not.toBeNull();
    expect(form.getAttribute('action')).toMatch(/formsubmit\.co/);
  });

  test('lists at least five services', () => {
    const services = document.querySelectorAll('.servicios-grid .servicio');
    expect(services.length).toBeGreaterThanOrEqual(5);
  });
});
