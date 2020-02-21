import { Selector, t } from "testcafe";
import Utilities from "../../common/utilities";
import exclusions from "../../common/exclusions";

const utilities = new Utilities();

class Navbar {
	get searchInputField() {
		return Selector("#twotabsearchtextbox");
	}

	get searchSubmitButton() {
		return Selector("input.nav-input").withAttribute("type", "submit");
	}

	get searchSuggestionsMenu() {
		return Selector("#suggestions");
	}

	get suggestions() {
		return this.searchSuggestionsMenu.find(".s-suggestion");
	}

	/**
	 * Returns an array of Strings of all suggestion menu items
	 */
	async suggestionsStringArray() {
		return await utilities.innerTextArray(this.suggestions);
	}

	/**
	 * Returns true if the suggestions displayed all contain the terms specified by the
	 * terms parameter. Returns false otherwise.
	 * @param {String} terms - String containing terms
	 */
	async suggestionsContainTerms(terms) {
		return await utilities.allElementsContainSomeValue(
			await this.suggestionsStringArray(),
			terms,
			exclusions.suggestions
		);
	}
}

export default Navbar;
