import Article from '../model/article/IArticle'

export default class ArticleRepository {
  //
  public static async save(name: string, content: string) {
    await Article.create({
      name,
      content,
      user: '',
    })
  }

  public static async findAll() {
    const articles = await Article.find()
    return articles
  }

  public static async findById(id: string) {
    const article = await Article.findById(id)
    return article
  }

  public static async updateById(id: string) {
    await Article.findByIdAndUpdate(id, {})
  }

  public static async deleteById(id: number) {
    await Article.findByIdAndDelete(id)
  }
}
