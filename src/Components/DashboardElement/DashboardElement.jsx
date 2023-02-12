const DashboardElement = ({emission,date,initiator,bytes})=>{
    return(
        <div className="w-full p-5 rounded-md grid grid-cols-5 border-b-2 border-b-gray-200 border-opacity-30">
            {console.log(date.getFullYear())}
            <h1 className="text-md place-self-center tracking-wider text-red-100">{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</h1>
            <a className="text-md col-span-2 place-self-center hover:opacity-80 text-red-100" href={initiator} target="_blank">{initiator}</a>
            <h1 className="text-md place-self-center text-red-100">{emission}</h1>
            <h1 className="text-md place-self-center text-red-100">{bytes}</h1>
        </div>
    )
}

export default DashboardElement