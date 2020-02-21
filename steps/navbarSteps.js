import { Given, When, Then } from "cucumber";
import Navbar from "../page-objects/components/navbar";

const navbar = new Navbar();

When(
	/^I enter search terms "(.+)" in the search field$/,
	async (t, [searchTerms]) => {
		await t.typeText(navbar.searchInputField, searchTerms, { paste: true });
	}
);

When("I submit the search", async t => {
	await t.click(navbar.searchSubmitButton);
});

Then("I should see the search suggestions menu", async t => {
	await t.expect(navbar.searchSuggestionsMenu.exists).ok();
});

Then(/^I should see suggestions containing "(.+)"$/, async (t, [terms]) => {
	const containsTerm = await navbar.suggestionsContainTerms(terms);
	await t
		.expect(containsTerm)
		.ok("At least 1 suggestion does not contain the exact search term");
});
