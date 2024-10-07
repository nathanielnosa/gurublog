const Error = ({ error,color }) => {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div className={`alert alert-${color} alert-dismissible fade show`} role="alert">
            <strong>{error}!</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Error