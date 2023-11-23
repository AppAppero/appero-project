const ERROR_EMPTY = "Non può essere vuoto !"
const ERROR_MIN = "Minimo 2 caratteri !"
const ERROR_0 = "Non può essere 0 !"
const ERROR_NEGATIVE = "Non può essere un numero negativo!"
const MORE_THAN = "Deve essere almeno di 300 euro"
const ERROR_DATE = "Devi inserire una data di "
const ERROR_DATE_TODAY = "La data di partenza non può essere antecedente a oggi"
const ERROR_DATE_RETURN = "La data di ritorno deve essere maggiore o uguale alla data di partenza"
const ERROR_MIN_ADULTS = "Deve esserci almeno un adulto."
const ERROR_MAX_ADULTS = "Il numero totale dei viaggiatori seduti (adulti e bambini) non può superare 9."
const ERROR_REQUIRED_ADULTS = "Inserisci il numero di adulti."
const MESSAGE_INFO_BUDGET = "Il budget deve essere minimo di 300 euro"// TODO
const MESSAGE_INFO_ADULTS = "Il numero di viaggiatori adulti (di età pari o superiore a 12 anni alla data di partenza).Il numero totale dei viaggiatori seduti (adulti e bambini) non può superare 9."
const MESSAGE_INFO_CHILDREN = "Il numero di bambini in viaggio (di età superiore a 2 anni e di età inferiore a 12 anni alla data di partenza) che avranno ciascuno un posto separato. Se specificato, questo numero deve essere maggiore o uguale a 0.Il numero totale dei viaggiatori seduti (adulti e bambini) non può superare 9."
const MESSAGE_INFO_INFANTS = "Il numero di viaggiatori neonati (la cui età sia inferiore o uguale a 2 anni alla data di partenza). I neonati viaggiano in grembo a un viaggiatore adulto, pertanto il numero di neonati non deve superare il numero di adulti. Se specificato, questo numero deve essere maggiore o uguale a 0."

export {
    ERROR_DATE, ERROR_DATE_RETURN, ERROR_MIN_ADULTS, ERROR_MAX_ADULTS, ERROR_REQUIRED_ADULTS,
    ERROR_EMPTY, ERROR_MIN, ERROR_0, MESSAGE_INFO_CHILDREN, MESSAGE_INFO_INFANTS,
    ERROR_NEGATIVE, MORE_THAN, MESSAGE_INFO_BUDGET, MESSAGE_INFO_ADULTS, ERROR_DATE_TODAY
}