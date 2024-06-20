
const Child = (props) => {
  
  return (
    <div className="d-flex flex-column  align-items-center justify-content-center" style={{height:"80vh"}}>
      <h3 className="display-3">{props.count}</h3>
      <div className="d-flex gap-2">
        <button className="px-4 shadow-sm btn btn-outline-success "  incNum={props.incNum} onClick={props.incNum}>+</button>
        <button className="px-4 shadow-sm btn btn-outline-secondary " resetNum={props.resetNum} onClick={props.resetNum} disabled={props.count === 0 ? true : false}  style={props.count === 0? { backgroundColor: "red" , color:"gary"}: { backgroundColor: "transparent", color: "black" }}>Reset</button>
        <button className="px-4 shadow-sm btn btn-outline-danger " decNum={props.decNum} onClick={props.decNum} style={props.count === 0? { backgroundColor: "red", color: "white" }: { backgroundColor: "transparent", color: "black"  }}>-</button>
      </div>
    </div>
  );
};

export default Child;
