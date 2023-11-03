
// Hook per il titolo della pagina
const useTitle = (title) => {
    const t = document.title = title
    return t;
}

export default useTitle;
