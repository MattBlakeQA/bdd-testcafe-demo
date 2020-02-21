import { Given, When, Then } from "cucumber";
import SearchResultsPage from "../page-objects/pages/searchResultsPage";
import Utilities from "../common/utilities";
import urls from "../common/urls";

const utilities = new Utilities();
const searchResultsPage = new SearchResultsPage();

Then("I should be taken to the search results page", async t => {
	const url = await utilities.getUrl();
	await t.expect(url).contains(urls["search"]);
	await t.expect(searchResultsPage.resultsTotalLine.exists).ok();
});

Then(/^I should see search results containing "(.+)"$/, async (t, [terms]) => {
	const containsTerm = await searchResultsPage.searchResultsContainTerms(terms);

	await t
		.expect(containsTerm)
		.ok("At least 1 product name does not contain any expected search terms");
});

Then("the total number of results is displayed", async t => {
	const total = await searchResultsPage.totalSearchResults();
	await t.expect(total).gt(0);
});
