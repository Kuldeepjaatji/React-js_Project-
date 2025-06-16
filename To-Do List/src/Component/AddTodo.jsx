import { useRef} from "react";

function AddTodo({newitems}){
    
    const inputNameValue = useRef('');
    const dueDateValue= useRef('');

    function handleAddBtn(event){

        let text = inputNameValue.current.value;
        const dueDate = dueDateValue.current.value;
       
        event.preventDefault();
        
        
        if( text.trim() === ''|| dueDate.trim() === ''){
            alert('Please Inter Task and Date');
            return;
        }else{
            inputNameValue.current.value = '';
            dueDateValue.current.value = '';
             newitems(text,dueDate);
        }

        // if (item2 === "" || index2 === "") {
        //     alert("Please enter a task before adding.");
        //     return;
        // }
        // if (item2.trim() === ""||index2.trim() === "") {
        //     alert("Please enter a task before adding.");
        //     return;
        // }
    }
    return(
        <>
        <div className="container border border-0">
            <form onSubmit={(event)=>handleAddBtn(event)} className="row d-flex align-items-center">
                <div className="col-4 border border-0">
                    <input type="text" placeholder="Enter your task" className="w-100" ref={inputNameValue}/>
                </div>
                <div className="col-4 border border-0">
                    <input type="date" className="w-100" ref={dueDateValue}/>
                </div>
                <div className="col-4 ">
                    <button type="submit" className="btn btn-success w-100 border border-0">Add</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddTodo;