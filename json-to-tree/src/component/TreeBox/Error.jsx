import React from 'react'
import style from "./index.module.css";
export default function Error() {
  return (
	<div className={style.error}>数据格式错误，请输入Json格式的数据</div>
  )
}
