import Comment from '../model/comment/IComment'

export default class CommentRepository {
  public static async save(comment: any) {
    await Comment.create({
      ...comment,
    })
  }

  public static async findById(id: string) {
    const user = await Comment.findById(id)
    return user
  }

  public static async updateById(id: string, comment: any) {
    await Comment.findByIdAndUpdate(id, comment)
    return comment
  }

  public static async deleteById(id: string) {
    await Comment.findByIdAndDelete(id)
  }
}
