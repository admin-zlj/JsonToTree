import React from "react";
import style from "./index.module.css";
export default function TreeItem({ data }) {
	const { name, children, deep } = data;
	return (
		<div className={style.treeItemBox}>
			{!!deep && (
				<div className={style.pos} style={{ width: 120 * deep }}></div>
			)}
			<div className={style.treeItem}>
				<div className={style.line}></div>
				<div className={style.name}>{name}</div>
				{Array.isArray(children) ? (
					<></>
				) : (
					<div className={style.name}>{children}</div>
				)}
			</div>
		</div>
	);
}
