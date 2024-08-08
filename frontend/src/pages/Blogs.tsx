import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export interface Blog {
  "content": string;
  "title": string;
  "id": number
  "author": {
      "name": string
  }
}
export const Blogs = () => {

  const { loading, blogs } = useBlogs();

  if(loading) {
    return(
      <div>
        loading....
      </div>
    )
  }

  return (
   <div className="">
      <div className="">
        <Appbar/>
      </div>
      <div className="flex  justify-center my-5">
    
        <div >

        {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
                />)}       

        </div>
      </div>
    </div>
  )
}
