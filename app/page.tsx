import Spinner from "./components/general/Spinner";
import CardList from "./components/general/CardList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Suspense fallback={<Spinner />}>
      <CardList />
    </Suspense>
  );
}
