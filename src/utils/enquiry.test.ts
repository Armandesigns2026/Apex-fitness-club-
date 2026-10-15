import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEnquiryForm, formatWhatsAppMessage, buildWhatsAppUrl } from './enquiry.ts';

test('validateEnquiryForm returns errors for empty required fields', () => {
  const result = validateEnquiryForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.preferredProgramme);
});

test('validateEnquiryForm accepts valid data', () => {
  const result = validateEnquiryForm({
    fullName: 'Alex Vance',
    email: 'alex@example.com',
    preferredProgramme: 'Strength Foundations',
    preferredPlan: 'Standard',
    message: 'Looking forward to touring the club.',
  });
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('validateEnquiryForm flags invalid emails', () => {
  const result = validateEnquiryForm({
    fullName: 'Alex Vance',
    email: 'not-an-email',
    preferredProgramme: 'Strength Foundations',
  });
  assert.equal(result.isValid, false);
  assert.equal(result.errors.email, 'Please enter a valid email address.');
});

test('formatWhatsAppMessage formats clean text', () => {
  const msg = formatWhatsAppMessage({
    clubName: 'Apex Fitness Club',
    programme: 'Functional Training',
    plan: 'Plus',
    senderName: 'Rohan Sharma',
  });
  assert.ok(msg.includes('Apex Fitness Club'));
  assert.ok(msg.includes('Functional Training'));
  assert.ok(msg.includes('Plus'));
  assert.ok(msg.includes('Rohan Sharma'));
});

test('buildWhatsAppUrl detects unconfigured placeholder numbers', () => {
  const resultZeroes = buildWhatsAppUrl('+91 00000 00000', 'Hello');
  assert.equal(resultZeroes.isConfigured, false);

  const resultEmpty = buildWhatsAppUrl('', 'Hello');
  assert.equal(resultEmpty.isConfigured, false);

  const resultValid = buildWhatsAppUrl('+91 98765 43210', 'Hello');
  assert.equal(resultValid.isConfigured, true);
  assert.ok(resultValid.url.includes('919876543210'));
});
