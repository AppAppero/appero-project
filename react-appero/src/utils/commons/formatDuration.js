
// Per quantificare le ore come quelle del viaggio
export const formatDuration = (isoDuration) => {
    const durationRegex = /P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?/;

    const match = isoDuration.match(durationRegex);

    if (!match) return 'Durata non valida'

    const [, years, months, days, hours, minutes, seconds] = match.map(Number);

    const formattedDuration = [];

    if (years) formattedDuration.push(`${years}y`);
    if (months) formattedDuration.push(`${months}m`);
    if (days) formattedDuration.push(`${days}d`);
    if (hours) formattedDuration.push(`${hours}h`);
    if (minutes) formattedDuration.push(`${minutes}min`);
    if (seconds) formattedDuration.push(`${seconds}s`);

    return formattedDuration.join(' ');
};

// Per un formato ore giusto
export const formatHourByDate = (data) => {
    let da = new Date(data)

    // Estrai l'ora e i minuti
    const hours = da.getHours();
    const minutes = da.getMinutes();

    // Formatta l'ora
    const hourFormatted = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return hourFormatted;
}