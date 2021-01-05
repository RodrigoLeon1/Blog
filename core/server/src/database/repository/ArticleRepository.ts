import Article, { IArticle } from '../model/article/IArticle'

export default class ArticleRepository {
  public static async save(article: any) {
    await Article.create({
      ...article,
    })
  }

  public static async findAll() {
    const articles = await Article.find().populate('user')
    return articles
  }

  public static async findById(id: string) {
    // Populate with 'user', 'comments', 'tags'
    const article = await Article.findById(id).populate('user')
    return article
  }

  public static async updateById(id: string, article: any) {
    await Article.findByIdAndUpdate(id, article)
    return article
  }

  public static async deleteById(id: string) {
    await Article.findByIdAndDelete(id)
  }
}
