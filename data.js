const baseUrl = process.env.BASE_URL || 'http://localhost:5000';

const photoCards = [
  {
    id: 1,
    title: 'Не родные просторы',
    author: 'Борис',
    images: {
      mobile: {
        src: `${baseUrl}/img/spaces.webp`,
        x2: `${baseUrl}/img/spaces@2x.webp`,
      },
      tablet: {
        src: `${baseUrl}/img/spaces-desktop.webp`,
        x2: `${baseUrl}/img/spaces-desktop@2x.webp`,
      },
      desktop: {
        src: `${baseUrl}/img/spaces-desktop-wide.webp`,
        x2: `${baseUrl}/img/spaces-desktop-wide@2x.webp`,
      },
    },
    likes: 1350,
  },
  {
    id: 2,
    title: 'Местная растительность',
    author: 'Сергей',
    images: {
      mobile: {
        src: `${baseUrl}/img/vegetation.webp`,
        x2: `${baseUrl}/img/vegetation@2x.webp`,
      },
      tablet: {
        src: ``,
        x2: ``,
      },
      desktop: {
        src: `${baseUrl}/img/vegetation-desktop.webp`,
        x2: `${baseUrl}/img/vegetation-desktop@2x.webp`,
      },
    },
    likes: 143,
  },
  {
    id: 3,
    title: 'Дорога на север',
    author: 'Петр',
    images: {
      mobile: {
        src: `${baseUrl}/img/road-to-the-north.webp`,
        x2: `${baseUrl}/img/road-to-the-north@2x.webp`,
      },
      tablet: {
        src: ``,
        x2: ``,
      },
      desktop: {
        src: `${baseUrl}/img/road-to-the-north-desktop.webp`,
        x2: `${baseUrl}/img/road-to-the-north-desktop@2x.webp`,
      },
    },
    likes: 96,
  },
  {
    id: 4,
    title: 'Мост Дьявола',
    author: 'Антон',
    images: {
      mobile: {
        src: `${baseUrl}/img/devil-bridge.webp`,
        x2: `${baseUrl}/img/devil-bridge@2x.webp`,
      },
      tablet: {
        src: ``,
        x2: ``,
      },
      desktop: {
        src: `${baseUrl}/img/devil-bridge-desktop.webp`,
        x2: `${baseUrl}/img/devil-bridge-desktop@2x.webp`,
      },
    },
    likes: 254,
  },
]
module.exports = { photoCards }
