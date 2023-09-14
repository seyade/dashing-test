import Access from "./pages/access";
import SignIn from "./pages/sign-in";

const routes = [
	{
		path: "/",
		element: <SignIn />,
	},
	{
		path: "/access",
		element: <Access />,
	},
];

export default routes;
