export default function PostCard({ post }) {
  return (
    <div
      className="
bg-white 
rounded-xl 
p-5
shadow-sm
"
    >
      <img
        src={post.imageUrl}
        className="
rounded-xl
w-full
h-56
object-cover
"
      />

      <h2
        className="
text-2xl
font-bold
mt-6
text-slate-900
"
      >
        {post.title}
      </h2>

      <div className="flex justify-between mt-6">
        <div className="flex items-center gap-3">
          <img
            src={post.author.profileImage}
            className="w-10 h-10 rounded-full"
          />

          <span>{post.author.fullName}</span>
        </div>

        <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded">
          {post.category.name}
        </span>
      </div>

      <div
        className="
mt-5
text-gray-400
"
      >
        {post.publishedDate} ⏱ {post.readingTime}
      </div>
    </div>
  );
}
