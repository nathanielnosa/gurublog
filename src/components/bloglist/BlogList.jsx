import { Link } from "react-router-dom"

const BlogList = ({ title, ctaDelete }) => {
  // const blogger = props.title
  return (
    <div className="row">
      {
        title.map(({ id, title, body }) => (
          <div className="col-md-4" key={id}>
            <div className="card">
              <Link to={`/detail/${id}`} className="text-decoration-none text-dark">
                <div className="card-header">{title}</div>
                <div className="card-body">{body}</div>
              </Link>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-danger" onClick={() => ctaDelete(id)}>Delete</button>
                <Link className="btn btn-info" to={`/update/${id}`}>Update</Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default BlogList