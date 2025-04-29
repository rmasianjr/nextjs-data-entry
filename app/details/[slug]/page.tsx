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
  const { name, age, email, contact, address } = await searchParams;

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
      <p>{contact}</p>
      <p>{address}</p>
    </div>
  );
}
