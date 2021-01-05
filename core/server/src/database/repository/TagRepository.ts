import Tag from '../model/tag/ITag'

export default class TagRepository {
  public static async save(tag: any) {
    await Tag.create({
      ...tag,
    })
  }

  public static async findAll() {
    const tags = await Tag.find()
    return tags
  }

  public static async findById(id: string) {
    const tag = await Tag.findById(id)
    return tag
  }
}
