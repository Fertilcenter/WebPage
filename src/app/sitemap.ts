import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fertilcenter.com.mx'
  
  return [
    {
      url: `${baseUrl}/webpage/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Puedes agregar más páginas aquí si las tienes
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
