import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Update = () => {
  const red = useNavigate()
  const { id } = useParams()
  console.log(id);
  const [data, setData] = useState({
    title: "",
    body: ""
  })
  // fetch
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(setData(data));
      })
  }, [id])


  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, body } = data
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(() => console.log({ "Success": "Blog created successfully" }))
    red('/')
  }
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div className="card">
            <div className="card-header display-6 text-center">Update Blog</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <label htmlFor="title">Title</label>
                  <input type="text" value={data.title} onChange={handleChange} name="title" className="form-control" id="title" />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="body">Description</label>
                  <textarea name="body" value={data.body} onChange={handleChange} id="body" className="form-control" />
                </div>
                <div className="d-grid mb-2">
                  <button className="btn btn-outline-dark">Submit</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update