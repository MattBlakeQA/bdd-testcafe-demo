import { ClientFunction } from "testcafe";

class Utilities {
	/**
	 * Returns an array of string values corresponding to all innerText values of
	 * the elements selected by the provided selector.
	 * @param {Selector} selector - Selector object which selects multiple elements.
	 */
	async innerTextArray(selector) {
		const elementCount = await selector.count;
		let element;
		const innerTextArray = [];

		for (let i = 0; i < elementCount; i++) {
			element = await selector.nth(i).innerText;
			innerTextArray.push(element);
		}
		return innerTextArray;
	}
	/**
	 * Returns true if every element in sourceArr contains at least 1 value defined in
	 * targetVals. Returns false otherwise.
	 * @param {Array} sourceArr - Array of source values.
	 * @param {String} targetVals - String containing target values to check against sourceArr. Comma-separated.
	 * @param {Array} excludeArr - (OPTIONAL) Array of exclude values. If specified, exclude values are removed from sourceArr.
	 */
	async allElementsContainSomeValue(sourceArr, targetVals, excludeArr) {
		let containsTerm;
		const targetArr = targetVals.split(",");

		if (excludeArr) {
			sourceArr = sourceArr.filter(ele => !excludeArr.includes(ele));
		}

		for (let element of sourceArr) {
			containsTerm = false;
			for (let value of targetArr) {
				if (element.toLowerCase().includes(value)) {
					containsTerm = true;
					break;
				}
			}
			if (containsTerm == false) {
				return false;
			}
		}
		return true;
	}

	async getUrl() {
		const cliFnc = ClientFunction(() => window.location.href);
		return await cliFnc();
	}
}

export default Utilities;
