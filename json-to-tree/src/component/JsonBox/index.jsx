import React, { useState } from "react";
import style from "./index.module.css";

export default function Json({ onChang }) {
	return (
		<div className={style.warp}>
			<div className={style.title}>Json</div>

			<textarea
				placeholder="请输入Json格式的数据"
				className={style.textarea}
				onChange={(e) => {
					onChang(e.target.value);
				}}
			/>
		</div>
	);
}
