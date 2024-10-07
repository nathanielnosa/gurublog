import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Create = () => {
  const red = useNavigate()
  const [data, setData] = useState({
    title: '',
    body: ''
  })

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
    fetch('http://localhost:1234/blogs', {
      method: 'POST',
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
            <div className="card-header display-6 text-center">Create Blog</div>
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

export default Create