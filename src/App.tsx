import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import routes from "./routes";

import "./App.scss";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					{routes.map(route => (
						<Route key={route.path} path={route.path} element={route.element} />
					))}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
