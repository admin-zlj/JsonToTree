import { useState } from "react";
import "./App.css";
import JsonBox from "./component/JsonBox";
import TreeBox from "./component/TreeBox";

function App() {
	const [jsonV, setJsonV] = useState("");
	const onChang = (v) => {
		setJsonV(v);
	};
	return (
		<div className="box">
			<JsonBox onChang={onChang}></JsonBox>
			<TreeBox jsonValue={jsonV}></TreeBox>
		</div>
	);
}

export default App;
