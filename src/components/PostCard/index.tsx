interface PostCardProps {
  title: string;
  body: string;
}

function PostCard({ title, body }: PostCardProps) {
  return (
    <div className="p-3 h-auto max-w-full rounded-lg bg-[#E2E9F9]">
      <h1 className="font-bold border-b-2 border-white">{title}</h1>
      <p className="mt-3">{body}</p>
    </div>
  );
}

export default PostCard;
