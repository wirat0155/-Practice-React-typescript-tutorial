const PhoneItem =(props: any)=> {
    const {name, tel} = props;
    return (
        <div className="d-flex justify-content-between shadow py-3 px-5 m-2 rounded">
            <div>{name}</div>
            <div>{tel}</div>
        </div>
    );
}
export default PhoneItem;