let Emp=(props)=>{


    return <div>
                <h3>Emp Component</h3>
                <pre>{JSON.stringify(props)}</pre>
                <h3>Employee id:{props.eid}</h3>
                <h3>Location:{props.eloc[0]}</h3>
            </div>
}
export default Emp;