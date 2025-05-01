import { fetchInfos } from "@/app/lib/data";
import Card from "./Card";
import NoDataComponent from "./NoDataComponent";

export default async function CardList() {
  const infos = await fetchInfos();

  return (
    <div className="container mx-auto p-4">
      {infos.length === 0 ? (
        <NoDataComponent />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {infos.map((data) => {
            const { id, ...info } = data;
            return (
              <div key={id}>
                <Card details={info} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
