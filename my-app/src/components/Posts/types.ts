export type Post = {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  description: string;
  author: number;
};

export type PostsResponse = {
  count: number;
  next: string;
  previous: null | string;
  results: Post[];
};
