import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="italic">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'} className="underline">Go back </Link>
    </div>
  );
}