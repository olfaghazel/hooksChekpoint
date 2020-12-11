
const Rating = ({ rate, setRateValue }) => {
    const stars = (x) => {
        let array = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= x) {
                array.push(
                    <span
                        onClick={() => setRateValue(i)}
                        key={i}>★
                        </span>
                )
            } else {
                array.push(
                    <span
                        onClick={() => setRateValue(i)}
                        key={i}>☆
                        </span>
                )
            }
        }
        return array
    }
    return <div>{stars(rate)}</div>
}

Rating.defaultProps = {
    setRateValue: () => { }
}

export default Rating;