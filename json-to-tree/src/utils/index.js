export function formatJsonToTree(jsonStr) {
	if (jsonStr === "") return [];
	if (!isJson(jsonStr)) throw new Error("json格式错误");
	const result = [];
	function processNode(obj, prefix = "", deep = 0) {
		for (const key in obj) {
			if (isOnlyObjType(obj[key])) {
				const newNode = {
					name: `${prefix}${key}`,
					children: [],
					deep: deep || 0,
				};
				result.push(newNode);
				processNode(obj[key], `${prefix}${key}.`, deep + 1);
			} else {
				result.push({
					name: `${prefix}${key}`,
					children: JSON.stringify(obj[key]),
					deep: deep || 0,
				});
			}
		}
	}
	processNode(JSON.parse(jsonStr));

	return result;
}
function isOnlyObjType(obj) {
	return Object.prototype.toString.call(obj) === "[object Object]";
}
export function isJson(str) {
	try {
		JSON.parse(str);
		return true;
	} catch (e) {
		return false;
	}
}
