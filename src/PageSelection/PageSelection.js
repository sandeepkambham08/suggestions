import './PageSelection.css';

const PageSelection = (props) =>{

    return (
        <div>
            <div className="Page-selection" >
            <div className="Page-selection"  >
            <button onClick={()=>{props.changePage("first")}} >First</button>
            <button disabled={props.currentPage - 5 <= 0} onClick={()=>{props.changePage(-5)}} >-5</button>
            <button disabled={props.currentPage - 2 <= 0} onClick={()=>{props.changePage(-2)}} >-2</button>
            <button disabled={props.currentPage - 1 <= 0} onClick={()=>{props.changePage(-1)}} >Prev</button>
            </div>
            <div className="Page-selection-number"  >
                <p className="Current-page-number" >{props.currentPage}</p>
            </div>               
            <div className="Page-selection"  >
            <button disabled={props.currentPage + 1 >= props.totalPages} onClick={()=>{props.changePage(1)}} >Next</button>
            <button disabled={props.currentPage + 2 >= props.totalPages} onClick={()=>{props.changePage(2)}} >+2</button>
            <button disabled={props.currentPage + 5 >= props.totalPages} onClick={()=>{props.changePage(5)}} >+5</button>
            <button onClick={()=>{props.changePage("last")}} >Last</button>
            </div>
            </div>
        </div>
    )

}

export default PageSelection;