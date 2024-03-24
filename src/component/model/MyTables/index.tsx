import { useSearch } from "@/hooks/useSearch";
import { useQuery } from "@apollo/client";
import { Order } from "../Order";
import Query from "./MyTables.graphql";

function MyTables() {
  const { search } = useSearch();
  const { data, error } = useQuery(Query, {
    variables: {
      input: {
        table: ["Order"],
        uuid: search,
      },
    },
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {data.mydb_records.map((record) => {
        if (record.__typename === "Order") {
          return <Order key={record.id} id={record.id} />;
        }
      })}
    </>
  );
}

export default MyTables;
