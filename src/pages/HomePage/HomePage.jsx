import { useEffect, useRef, useState } from 'react';

export const HomePage = () => {
  // const [trends, setTrends] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const controllerRef = useRef();
  useEffect(() => {
   if (controllerRef.current) {
     controllerRef.current.abort();
   }
   controllerRef.current = new AbortController();

    async function getTrends() {
      try {
        setLoader(true);
        setError(false);
        // const responce = await serviceGetTrends(controllerRef.current.signal);
        // setTrends(responce.results);
        // console.log(responce.results)
      } catch (error) {
         if (error.code !== 'ERR_CANCELED') {setError(true)}
      } finally {
        setLoader(false);
      }
    }
    getTrends();

    // return () => { controllerRef.current.abort() };
  }, []);

  return <div>
   {loader}
   {error}
   <h1>HomePage</h1>
  </div>;
}
