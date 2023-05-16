
export const DateConverter = (dateNumber: number) => {
    const d = new Date(dateNumber);
    const date = d.toLocaleDateString();
    const hour = d.toLocaleTimeString();
    return `${date} ${hour}`;
}