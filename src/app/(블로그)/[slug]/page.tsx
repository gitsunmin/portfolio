export async function generateStaticParams() {
  const posts = [{ slug: 'post-1' }, { slug: 'post-2' }];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <main>
      <div>slug: {slug}</div>
    </main>
  );
}
