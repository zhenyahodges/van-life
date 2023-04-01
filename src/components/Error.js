import { useRouteError } from 'react-router-dom';

export default function Error() {
    const error = useRouteError();
    // console.log(error);

    return (
        <>
            <h1>Error: {`${error.message}; ${error.status}; ${error.statusText}`}</h1>;
            {/* <pre>
                {error.status} - {error.statusText}
            </pre> */}
        </>
    );
}
