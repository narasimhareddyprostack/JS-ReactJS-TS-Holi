let Movie = ()=>{
    let msg="GM";
    let greet=()=>{
        return "GA"
    }
    return <div>
                <h2>Movie Component</h2>
                <hr/>
                <h2>Message1:{msg}</h2>
                <h2>Message2:{greet()}</h2>
            </div>
}
export default Movie;
