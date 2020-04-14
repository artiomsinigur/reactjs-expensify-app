export default function(expenses) {
    if (expenses.length) {
        return expenses.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.amount
        }, 0)
    } else {
        return 0
    }
}