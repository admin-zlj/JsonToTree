import React, { useState } from "react";
import style from "./index.module.css";

export default function Json({ onChang }) {
	return (
		<div className={style.warp}>
			Json
			<textarea
				className={style.textarea}
				onChange={(e) => {
					onChang(e.target.value);
				}}
			/>
		</div>
	);
}
