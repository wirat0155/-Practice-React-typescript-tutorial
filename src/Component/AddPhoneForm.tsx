import { useState } from "react";

const AddPhoneForm =(props: any)=> {
    const [name, setName] = useState<string>("");
    const [tel, setTel] = useState<string>("");

    const save =()=> {
        setName("");
        setTel("");
        props.onSave(name, tel);
    }

    return (
        <div className="my-5 row">
            <div className="col">
                <input placeholder="name here..." value={name} className="form-control" onChange={(e: any) => setName(e.target.value)}/>
            </div>
            <div className="col">
                <input placeholder="tel here..." value={tel} className="form-control" onChange={(e: any) => setTel(e.target.value)}/>
            </div>
            <div className="col-auto">
                <button className="btn btn-primary" onClick={save}>Add</button>
            </div>
        </div>
    );
}
export default AddPhoneForm;