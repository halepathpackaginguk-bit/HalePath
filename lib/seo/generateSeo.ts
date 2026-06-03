const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export function buildSeo(data: any, slug?: string) {
  const canonical = slug ? `${baseUrl}/${slug}` : baseUrl;

  if (data?.seo) {
    return {
      title: data.seo.title,
      description: data.seo.description,
      alternates: { canonical },
      openGraph: data.seo.openGraph?.image?.secureUrl
        ? { images: [data.seo.openGraph.image.secureUrl] }
        : undefined,
    };
  }

  return { alternates: { canonical } };
}