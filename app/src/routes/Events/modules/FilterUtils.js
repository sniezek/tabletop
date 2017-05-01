export default function getCurrentDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    const year = date.getFullYear();

    if (day < 10) {
        day = `0${day}`;
    }

    if (month < 10) {
        month = `0${month}`;
    }

    return `${day}-${month}-${year}`;
}
