import BlogList from "../components/bloglist/BlogList"
import { useParams } from "react-router-dom"
import useFetch from "../components/hook/useFetch"
import Error from "../components/error/Error"
import Loader from "../components/loader/Loader"
const Detail = () => {
  const { id } = useParams()
  const { blogs, error, isLoading } = useFetch(`http://localhost:1234/blogs/${id}`)

  return (
    <div>
      {
        error && <Error color="danger" error={error} />
      }
      {
        isLoading && <Loader />
      }
      {
        blogs && (
          <div className="container">
            <div className="row">
              <div className="col-md-4 mx-auto" key={blogs.id}>
                <div className="card">
                  <div className="card-header">{blogs.title}</div>
                  <div className="card-body">{blogs.body}</div>
                  <div className="card-footer d-flex justify-content-between">
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Detail