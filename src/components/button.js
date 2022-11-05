function Btn({ clickFunction, className = "", type = "", value = "" }) {
    return (
        <button type={type} className={className} onClick={clickFunction} >{value}
        </button>
    );
}
export default Btn