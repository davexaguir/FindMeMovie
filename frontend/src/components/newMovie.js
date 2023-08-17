


export default function new_form (data) {
    let message = ''
    if(data.message){
      message = (
        <h4 className='alert-danger'>
          {data.message}
        </h4>
      )
    }
    return (
        <Def>
            <main>
                <h1>Add a New Movie</h1>
                {message}
                <form method="POST" action="/">
                    <div className="form-group">
                        <label htmlFor="name">Movie Name</label>
                        <input className="form-control" id="name" name="name" required/>
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="pic">Movie Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Genre</label>
                        <input className="form-control" id="genre" name="genre" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">Run Time</label>
                        <input className="form-control" id="runTime" name="runTime"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Main Actor</label>
                        <input className="form-control" id="actor" name="actor" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Release Year</label>
                        <input type='number' className="form-control" id="release" name="release"  />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place"/>
                </form>
            </main>
        </Def>
    )
}

