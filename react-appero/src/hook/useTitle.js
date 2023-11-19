
// Hook per il titolo della pagina
const useTitle = (title) => {
    const t = document.title = "Apperò - "+title
    return t;
}

export default useTitle;
