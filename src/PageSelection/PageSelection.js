import './PageSelection.css';

const PageSelection = (props) =>{

    return (
        <div>
            <div className="Page-selection" >
            <div className="Page-selection"  >
            <button onClick={()=>{props.changePage("first")}} >First</button>
            {props.currentPage - 5 > 0 && <button onClick={()=>{props.changePage(-5)}} >-5</button>}
            {props.currentPage - 2 > 0 && <button onClick={()=>{props.changePage(-2)}} >-2</button>}
            {props.currentPage - 1 > 0 && <button onClick={()=>{props.changePage(-1)}} >Prev</button>}
            </div>
            <div className="Page-selection-number"  >
                <p className="Current-page-number" >{props.currentPage}</p>
            </div>               
            <div className="Page-selection"  >
            {props.currentPage + 1 <= props.totalPages &&<button onClick={()=>{props.changePage(1)}} >Next</button>}
            {props.currentPage + 2 <= props.totalPages &&<button onClick={()=>{props.changePage(2)}} >+2</button>}
            {props.currentPage + 5 <= props.totalPages &&<button onClick={()=>{props.changePage(5)}} >+5</button>}
            <button onClick={()=>{props.changePage("last")}} >Last</button>
            </div>
            </div>
        </div>
    )

}

export default PageSelection;