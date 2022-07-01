import { useEffect, useState } from "react";
import AddPhoneForm from "./AddPhoneForm";
import PhoneItem from "./PhoneItem";

const PhoneBook =()=> {
    
    const [phoneList, setPhoneList] = useState<any>([]);

    useEffect(() => {
        setPhoneList([
            {id: 1, name: "John", tel: "0986781234"},
            {id: 2, name: "Brown", tel: "0879561243"}
        ]);
    }, []);

    useEffect(() => {
        console.log("add phone book to db");
        // add to db code here
    })

    const addPhoneBook =(name: string, tel: string)=> {
        let tempPhoneList = [...phoneList];
        tempPhoneList.push({
            id: phoneList.length + 1,
            name: name,
            tel: tel
        });
        setPhoneList(tempPhoneList);
        tempPhoneList = [];
    }
    return (<>
        <h1 className="display-6">Phone Book Application</h1>
        <AddPhoneForm onSave={(name: string, tel: string) => addPhoneBook(name, tel)} />
        {phoneList.map((phoneItem: any) => {
            return <PhoneItem key={phoneItem.id} name={phoneItem.name} tel={phoneItem.tel}/>;
        })}
    </>);
}
export default PhoneBook;