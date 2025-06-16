function TodoItem({itemList1,handledeleteBtn1}){

    return(
        <>
        {itemList1.map((item1,index1)=>(
            <div key={index1} className="container text-start my-1">
          <div className="row d-flex align-items-center">
            <div className="col-4">{item1.taskName}</div>
            <div className="col-4">{item1.date}</div>
            <div className="col-4">
              <button type="submit" className="btn btn-danger w-100" onClick={()=>handledeleteBtn1(index1)}>
                Delete
              </button>
            </div>
          </div>
        </div>
        ))
        }
        </>
    )
}
export default TodoItem;