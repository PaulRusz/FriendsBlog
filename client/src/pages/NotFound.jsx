import { useLocation } from 'react-router-dom'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {
  let Location = useLocation();
  const Error = useRouteError();
  console.error(Error);

  return (
    <div className='card bg-white card-rounded w-50'>
      <div className='card-header bg-dark text-center'>
        <h1>Oops!</h1>
        <p>Sorry, no match for <code>{Location.pathname}</code> was found.</p>
        <p>
          <i><code>{Error.statusText || Error.message}</code></i>
        </p>
      </div>
    </div>
  );
}

export default NotFound;