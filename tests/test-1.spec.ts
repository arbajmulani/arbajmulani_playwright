import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.testingmavens.com/blogs/architecture-breakdown-selenium-cypress-and');
  await page.setViewportSize({width:1280, height:720})
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await page.getByRole('link', { name: 'Our Company' }).click();
  await page.getByRole('button', { name: 'contact-button' }).click();
  await page.locator('#name').click();
  await page.locator('#name').fill('Arbaj');
  await page.getByRole('textbox', { name: 'Company *' }).click();
  await page.getByRole('textbox', { name: 'Company *' }).fill('INtech');
  await page.getByRole('textbox', { name: 'Name * Email *' }).click();
  await page.getByRole('textbox', { name: 'Name * Email *' }).fill('arbajmulani@gmail.com');
  await page.getByRole('textbox', { name: 'Country *' }).click();
  await page.getByRole('textbox', { name: 'Country *' }).fill('india');
  await page.getByRole('textbox', { name: 'State/City *' }).click();
  await page.getByRole('textbox', { name: 'State/City *' }).fill('mh');
  await page.getByRole('spinbutton', { name: 'Phone' }).click();
  await page.getByRole('spinbutton', { name: 'Phone' }).fill('3435');
  await page.getByText('Select option...').click();
  await page.getByRole('option', { name: 'Performance Testing' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

});