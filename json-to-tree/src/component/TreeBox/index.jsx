import { useMemo } from "react";
import style from "./index.module.css";
import React from "react";
import TreeItem from "./TreeItem";
import { formatJsonToTree, isJson } from "../../utils";
import Error from "./Error";

export default function Tree({ jsonValue }) {
	const jsonInfo = useMemo(() => {
		console.log("jsonValue", jsonValue);
		const isJsonStr = jsonValue === "" ? true : isJson(jsonValue);
		return {
			isJsonStr,
			treeArr: isJsonStr ? formatJsonToTree(jsonValue) : [],
		};
	}, [jsonValue]);

	return (
		<div className={style.warp}>
			<div className={style.title}>Tree</div>
			<div  className={style.scroll}>
				{jsonInfo.isJsonStr ? (
					jsonInfo.treeArr?.map((item) => (
						<TreeItem data={item}></TreeItem>
					))
				) : (
					<Error />
				)}
			</div>
		</div>
	);
}
