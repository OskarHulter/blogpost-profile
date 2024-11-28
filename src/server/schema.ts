export type BlogPostComment = {
  name: string
  id: number;
  title: string;
  content: string;
  relevancy: number;
  rating: number;
  postId: string;
  ownerId: string
}

export type Comments = Array<BlogPostComment> | null
