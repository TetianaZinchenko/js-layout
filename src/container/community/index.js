import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

// console.log(page)

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', "Ком'юніті")

page.append(title)

// ===

const INFO_CATEGORIES = [
  {
    text: 'База знань',
    viewed: true,
  },
  {
    text: 'Інформація',
    viewed: false,
  },
]

const info = createElement('main', 'info')

const createCategories = () => {
  const infoCategories = createElement(
    'div',
    'info__categories',
  )

  console.log(infoCategories)

  //   info.append(infoCategories)

  INFO_CATEGORIES.forEach((categoryData) => {
    const item = createElement(
      'div',
      'info__categories-item',
    )

    const category = createElement(
      'p',
      categoryData.viewed
        ? 'category category--viewed'
        : 'category',
      categoryData.text,
    )

    console.log(category)

    item.append(category)

    console.log(item)

    // return item

    infoCategories.append(item)

    return infoCategories
  })

  //   infoCategories.append(item)
  info.append(infoCategories)

  return info
}

const categories = createCategories()

page.append(info)

const image = createElement('img', 'img')
image.src = '/img/image.png'

page.append(image)

const infoMain = createElement('div', 'info-main')

const infoMainTitle = createElement(
  'h2',
  'info-main__title',
  'Що таке база знань?',
)

const infoMainText = createElement(
  'p',
  'info-main__text',
  'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
)

infoMain.append(infoMainTitle, infoMainText)

page.append(infoMain)

const button = createElement(
  'button',
  'button--accent',
  "Перейти до ком'юніті у Телеграм",
)

page.append(button)

// page.append(info)

// const createPost = () => {
//   const postList = createElement('main', 'post__list')

//   POST_LIST.forEach((postData) => {
//     const post = createElement(
//       'div',
//       postData.viewed
//         ? 'post button post--viewed'
//         : 'post button',
//     )

//     const postHeader = createElement('div', 'post__header')

//     // ===

//     const categoryList = createElement(
//       'div',
//       'post__category-list',
//     )

//     postData.category.forEach((category) => {
//       const categorySpan = createElement(
//         'span',
//         `post__category post__category--${category.id}`,
//         category.text,
//       )
//       categoryList.append(categorySpan)
//     })

//     // ===

//     const dateSpan = createElement(
//       'span',
//       'post__date',
//       postData.date,
//     )

//     // ===

//     postHeader.append(categoryList, dateSpan)

//     // ===

//     const infoParagraph = createElement(
//       'p',
//       'post__info',
//       postData.info,
//     )

//     // ===

//     post.append(postHeader, infoParagraph)

//     // ===

//     postList.append(post)
//   })

//   return postList
// }

// // ===

// const post = createPost()
// page.append(post)

// // ===
