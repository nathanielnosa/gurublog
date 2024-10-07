import { redirect, useNavigate } from "react-router-dom"
import BlogList from "../components/bloglist/BlogList"
import Error from "../components/error/Error"
import useFetch from "../components/hook/useFetch"
import Loader from "../components/loader/Loader"

const Home = () => {
  const red = useNavigate()
  const { blogs, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => console.log('Deleted successful'))
    red('/')
  }

  return (
    <div className="container">
      {
        isLoading && <Loader />
      }
      {
        error && <Error color="warning" error={error} />
      }
      {blogs && <BlogList title={blogs} ctaDelete={handleDelete} />}
      {/* single post */}

    </div>
  )
}

export default Home