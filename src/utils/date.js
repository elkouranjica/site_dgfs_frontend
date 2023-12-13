export function formatDate(inputDateString) {
    const dateObject = new Date(inputDateString);
    const options = {day: 'numeric', month: 'long', year: 'numeric'};
    return dateObject.toLocaleDateString('fr-FR', options)
}