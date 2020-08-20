export default class Helper {
    getDateString: (datestring: string) => string = (datestring) => {
        let deadline: string = ''
        let date: Date = new Date(datestring);
    
        const day = date.getDate().toString();
        const month = date.getMonth() < 10 ? `0${date.getMonth().toString()}` : date.getMonth().toString();
        const year = date.getFullYear().toString();
    
        deadline = `${day}-${month}-${year}`;
    
        return deadline;
    }
}