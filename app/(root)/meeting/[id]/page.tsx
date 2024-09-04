export default function Meeting({
  params,
}: {
  params: { id: string };
}) {
  return <div>Meetin Room: {params.id}</div>;
}
