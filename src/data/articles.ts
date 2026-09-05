export interface Article {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string[]
  date: string
  readTime: string
  category: string
  image: string
  imageCaption?: string
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "pelarian-abadi",
    title: "Pelarian abadi",
    excerpt:
      "Suatu pergerakan kecil, beranjak dari kemalasan mengarungi lautan ilmu.",
    date: "05 SEPT 2026",
    readTime: "1 MIN",
    category: "PERSONAL",
    image: "/images/pict1.jpeg",
    imageCaption: "ON THE WAY",
    content: [
      'Aku bukan manusia yang dilahirkan dengan seribu keberanian, setiap titik hidup yang aku lewati membawaku memahami kata "Berhenti untuk takut". Dan setelah 20 tahun, aku merasa setiap fase kehidupan mengajakku membawa kepada pelarian. ',
      "Buat apa terus berdiam diri? Lebih baik aku melakukan suatu perubahan, lebih baik aku bangun dari titik malasku untuk mulai mewujudkan setiap impian yang aku redam dari dulu.",
      'Sehingga pada akhirnya di penutup usiaku nanti, aku berkata "Terima kasih sudah berjuang hebat sejauh ini."',
    ],
  },
]