import { Given, When, Then } from "cucumber";
import urls from "../common/urls";

Given(/^I open the "(.+)" page$/, async (t, page) => {
	await t.navigateTo(urls[page]);
});
