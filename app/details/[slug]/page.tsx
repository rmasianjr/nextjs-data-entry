import Card from "../../components/general/Card";
import { notFound } from "next/navigation";

type SearchParams = Promise<{
  name: string;
  age: string;
  email: string;
  contact: string;
  address: string;
}>;

export default async function DetailsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const isEmpty = (obj: Object) => Object.keys(obj).length === 0;

  const query = await searchParams;

  if (query && isEmpty(query)) {
    notFound();
  }

  return <Card details={query} />;
}
