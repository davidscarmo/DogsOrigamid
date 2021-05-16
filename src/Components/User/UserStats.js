import React from "react";
import { STATS_GET } from "../../Api.js";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));


const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();
      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) return (
      <React.Suspense fallback={<></>}>
        <Head
          title="Estatísticas"
          description="Página com as estatísticas do usuário"
        />
        <UserStatsGraphs  data={data}/>
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
