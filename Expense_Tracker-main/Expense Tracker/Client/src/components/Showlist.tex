import { useEffect, useState } from "react";
import IDataList from "../model/IDataList";
import { getDataFromServer, pushDataFromUser } from "../services/menu";
import ExpenseTracker from "./ExpenseTracker";

export default function ShowData(){

    const [items, setItems] = useState<IDataList[]>([]);
    const [error, setError] = useState<Error|null>(null);
    const [sum, setSum] = useState<number|null>(0);
    const [rahulSpent, setRahulSpent] =  useState<number>(0);
    const [rameshSpent, setRameshSpent] =  useState<number>(0);
    const [showForm, setShowForm] = useState<boolean>(false);

    useEffect(()=>{
        const fetchMenu = async () => {
            try{
                const data = await getDataFromServer();
                console.log(data);
                setItems(data);
                // data.reduce
                setSum(data.reduce((result,v) =>  result + v.price , 0 ))
                calculateShares(data);
                // let newPurchase = {
                //     "payeeName": "Rahul",
                //     "product": "water",
                //     "price": 100,
                //     "setDate": "2022-10-30",
                // }
                // const purchasedData = await pushDataFromUser(newPurchase);
                // console.log(purchasedData);
            }
            catch(error: any){
                console.error(error);
                setError(error);
            }
        }
        fetchMenu();
    },[showForm]);
 
    const calculateShares = (data: IDataList[]) => {
        // Use data.map... 
        // figure out how much rahul, ramesh spent
        // setRahulSpent
        //setRameshSpent
        var rahulspent1 : number = 0
        var rameshspent1 : number = 0
        data.map(
            sams => (
                sams.payeeName === "Rahul" ? (
                    rahulspent1 = rahulspent1 + sams.price
                ):
                (
                    rameshspent1 = rameshspent1 + sams.price
                )
            )
        )
        setRahulSpent(rahulspent1)
        setRameshSpent(rameshspent1)
    }
    

    //header... Expense Tracker
    // headers of the table
    // create rows for the table
    // Display total, rahul paid, ramesh paid 
    return (
        <>
            <header id="page-Header">Expense Tracker</header>
            {/* Add button */}
            <button id="Add-Button" onClick={()=>setShowForm(true)}>Add</button>
            {
                showForm && (
                    <div className="form">
                        <ExpenseTracker onTrue={()=>setShowForm(false)} onClose={()=>setShowForm(false)}></ExpenseTracker>
                    </div>
                )
            }
            <>
                <div className="use-inline date header-color">Date</div>
                <div className="use-inline header-color">Product Purchased</div>
                <div className="use-inline price header-color">Price</div>
                <div className="use-inline header-color" style={{width: 112}}>Payee</div>
            </>
            {
                items && items.map ((user,idx)=>{
                    return (<div key={idx}>
                        <div className="use-inline date">{user.setDate}</div>
                        <div className="use-inline">{user.product}</div>
                        <div className="use-inline price">{user.price}</div>
                        <div className={`use-inline ${user.payeeName}`}>{user.payeeName}</div>
                    </div>)
                })
            }
        <hr/>
        <div className="use-inline ">Total: </div>
        <span className="use-inline total">{sum}</span> <br />
        <div className="use-inline ">Rahul paid: </div>
        <span className="use-inline total Rahul">{rahulSpent}</span> <br />
        <div className="use-inline ">Ramesh paid: </div>
        <span className="use-inline total Ramesh">{rameshSpent}</span> <br />
        <span className="use-inline payable">{rahulSpent>rameshSpent? "Pay Rahul " : "Pay Ramesh"}</span>
        <span className="use-inline payable price"> {Math.abs((rahulSpent-rameshSpent)/2)}</span>
        {
               error && (
                    <>
                        {error?.message}
                    </>
                )
            } 
        </>
    );
}