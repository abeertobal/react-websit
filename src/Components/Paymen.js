import "./PaymenStyles.css"

const Paymen = () => {
    return(
        <div className="first-pay">

        <div className="pay-left">
            <img src={require("../images/rowan-heuvel-4.png")} alt="" />
        </div>
        
        <div className="pay-right">
            <h1 className="pay-right-header">Payment with Paytm & UPI</h1>
            <div className="pay-cont">
                <div className="pay-cont-number">
                    <label htmlFor="number">Company number</label>
                    <input type="number" placeholder='(225) 555-0118' required />
                 </div>
                <div className="pay-cont-file">
                    <h3 className="pay-cont-title">Add screenshot</h3> 
                    <div className="pay-cont-file1"> 
                        <input type="file" id="file" required />
                        <label className="pay-file-lab" for="file">Upload file</label>
                    </div>
                 </div>    
            </div>
            <div className="pay-cont-card">
                <p className="hom-cont-p">Or pay with 
                    <a href="/viacard" className="pay-cont-a"> Visa card or Mastercard</a>
                </p>
            </div>
        </div>
            
        
    </div>
    )
}
export default Paymen;





