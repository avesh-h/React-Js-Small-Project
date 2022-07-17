const expense_date = (props) =>{

    const month = props.date.toLocaleString('en-Us',{month:'long'})
    const day = props.date.toLocaleString('en-Us',{day:'2-digit'})
    const year =props.date.getFullYear()

    return(

    <div className='date-item'>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
    </div>

    )

}
export default expense_date