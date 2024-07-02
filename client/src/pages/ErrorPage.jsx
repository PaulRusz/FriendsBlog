import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const Error = useRouteError();
  console.error(Error);

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{Error.statusText || Error.message}</i>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;