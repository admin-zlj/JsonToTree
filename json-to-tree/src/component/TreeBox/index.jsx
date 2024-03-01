import { useMemo } from "react";
import style from "./index.module.css";
import React from "react";

export default function Tree({ jsonValue }) {
	const isJsonStr = useMemo(() => {
		if (jsonValue === "") return true;
		console.log("isJson(jsonValue)", isJson(jsonValue));
		return isJson(jsonValue);
	}, [jsonValue]);

	const testValue = { a: { a: 1, b: 2 }, b: 3 };

	return (
		<div className={style.warp}>
			<div>Tree</div>
			{/* {isJsonStr ? "tree" : "error"} */}
		</div>
	);
}

function TreeItem() {}

function formatV(value) {
	const testValue = { a: { a: 1, b: 2 }, b: 3 };

	let taget = [
		{
			name: "a",
			children: [
				{ name: "a.a", children: 1 },
				{ name: "a.b", children: 2 },
			],
		},
		{
			name: "b",
			children: 3,
		},
	];
}

function isJson(str) {
	console.log("str", str);
	try {
		JSON.parse(str);
		return true;
	} catch (e) {
		return false;
	}
}
