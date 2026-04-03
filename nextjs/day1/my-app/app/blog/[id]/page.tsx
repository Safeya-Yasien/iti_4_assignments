const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const paramsData = await params;
  const blogId = paramsData.id;

  return (
    <div>
      <h1>Blog Details</h1>
      <p>ID: {blogId}</p>
    </div>
  );
};
export default BlogDetailsPage;
