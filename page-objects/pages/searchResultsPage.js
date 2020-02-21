import { Selector, t } from "testcafe";
import Utilities from "../../common/utilities";

const utilities = new Utilities();

class SearchResultsPage {
	get productNames() {
		return Selector("div[data-index] span.a-size-medium");
	}

	get resultsTotalLine() {
		return Selector("div.a-section > span");
	}

	/**
	 * Returns an int value representing the total number of search results found
	 */
	async totalSearchResults() {
		const resultsTextStr = await this.resultsTotalLine.innerText;
		const totalResultsStr = resultsTextStr.split(" ")[3].replace(",", "");
		return parseInt(totalResultsStr);
	}

	/**
	 * Returns an array of Strings of all product names
	 */
	async productNamesStringArray() {
		return await utilities.innerTextArray(this.productNames);
	}

	/**
	 * Returns true if the product names displayed all contain at least 1 term specified by the
	 * terms parameter. Returns false otherwise.
	 * @param {String} terms - String containing terms. Comma-separated.
	 */
	async searchResultsContainTerms(terms) {
		return await utilities.allElementsContainSomeValue(
			await this.productNamesStringArray(),
			terms
		);
	}
}

export default SearchResultsPage;
