const DocsCatchAll = async ({
  params: slug,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const paramsData = await slug;
  const slugData = paramsData.slug;

  return (
    <div>
      <h1>Docs Catch All</h1>
      <p>Slug: {slugData}</p>
    </div>
  );
};
export default DocsCatchAll;
