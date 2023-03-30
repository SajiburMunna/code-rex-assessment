type Posts = {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
};

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};
