import { memo, useEffect, useState } from "react";
import { Button, Card, Col, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row } from "react-bootstrap";
import { BiFilter } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalContext } from "../../context/context";
import useSize from "../../hook/useSize";
import { searchHotel } from "../../redux/reducerHotel";

const HeaderFilterHotel = () => {
    const { isAllScreen } = useSize().size
    const { filterHotel } = useSelector(state => state.reducerHotel)
    const [selectFilter, setSelectFilter] = useState("")
    const [showModal, setShowModal] = useState(false)


    // Per aprire il tab dei filtri aprendo il modal
    const handleClickFilter = (type) => {
        setSelectFilter(type)
        setShowModal(true)
    }

    return (

        <>
            {
                !isAllScreen ? (
                    <Row className="p-3 mt-2 bg-primary rounded-3 text-center text-light overflow-wrap fw-bold gx-3"
                     style={{fontSize:"13px"}}>
                        {filterHotel?.mainFilter?.map((el, key) => (
                            <Col xs={3}
                                onClick={() => handleClickFilter(el.field)}
                                key={key}
                                style={colFilter}
                            >
                                {el.title} <IoIosArrowDown />
                            </Col>
                        ))}
                        <Col xs={3}
                            onClick={() => handleClickFilter("other")}
                            style={{ cursor: "pointer" }}
                        >
                            Altri <IoIosArrowDown />
                        </Col>
                    </Row>
                ) :
                    (
                        <Row className="text-light gx-0">
                            <Col className="rounded-3 text-center p-2 mt-2 bg-primary"
                                xs={12}
                                onClick={() => handleClickFilter("mobile")}
                                style={{ cursor: "pointer" }}
                            >
                                Filtra <BiFilter size={22} />
                            </Col>
                        </Row>
                    )

            }

            <ModalFilter
                showModal={showModal}
                setShowModal={setShowModal}
                filterHotel={filterHotel}
                type={selectFilter}
            />
        </>

    );

}
const colFilter = {
    cursor: "pointer",
    borderRight: "1px solid white"
}

// Component Modal per gestire i filtri con le chiamate
const ModalFilter = memo(({ filterHotel, type, showModal, setShowModal }) => {
    const dispatch = useDispatch()
    const { params } = useGlobalContext()
    const [filter, setFilter] = useState()
    const [paramIdFilters, setParamIdFilters] = useState([])

    // Gestisce i tipi di filtri tra principali e secondari
    useEffect(() => {
        if (type !== "other" && type !== "mobile")
            setFilter(filterHotel?.mainFilter?.filter(f => f.field === type)[0])
        else if (type === "other")
            setFilter({ title: "Altri filtri", secondaryFilter: filterHotel?.secondaryFilter })
        else {
            let collpase = [...filterHotel?.mainFilter, ...filterHotel?.secondaryFilter]
            setFilter({ title: "Tutti i filtri", secondaryFilter: collpase })
        }

    }, [type])

    // Dopo aver raggruppato i parametri, clicca e fa la chiamata alla ricerca hotel
    const clickSearch = () => {
        let input = { params, paramIdFilters }
        dispatch(searchHotel(input, true))
        setShowModal(false)
    }


    return (
        <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
            <ModalHeader closeButton>
                <ModalTitle>
                    {filter?.title}
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                {
                    type !== "other" && type !== "mobile" ?
                        filter?.options?.map((op, key) =>
                        (<OptionCheckBox key={key} {...op}
                            paramIdFilters={paramIdFilters}
                            setParamIdFilters={setParamIdFilters}
                            filterStyle={filter?.filterStyle} />))
                        :
                        type === "other" || type === "mobile" ?
                            (
                                filter?.secondaryFilter?.map((sec, key) =>
                                (<OptionManage key={key} {...sec}
                                    paramIdFilters={paramIdFilters}
                                    setParamIdFilters={setParamIdFilters}
                                />))

                            ) :
                            (
                                <>
                                </>
                            )
                }
            </ModalBody>
            <ModalFooter>
                <Button onClick={clickSearch}>Cerca</Button>
            </ModalFooter>
        </Modal>
    )
})

// Component per selezionare più filtri
const OptionManage = memo(({ title, options, filterStyle, paramIdFilters, setParamIdFilters }) => {
    return (
        <>
            {
                filterStyle !== "SLIDER" &&
                <Row className="p-2">
                    <Col className="fw-bold">{title}</Col>
                    <Card className="mt-1 p-2">
                        {
                            options.length > 0 &&
                            options?.map((opCheckBox, k) => (
                                <OptionCheckBox key={k} {...opCheckBox}
                                    paramIdFilters={paramIdFilters}
                                    setParamIdFilters={setParamIdFilters} />))
                        }
                    </Card>
                </Row>
            }
        </>
    )
})

// Component per selezionare il filtro singolo
const OptionCheckBox = memo(({ title, countNotAutoextended, genericId, paramIdFilters, setParamIdFilters }) => {

    const [isChecked, setIsChecked] = useState(false)

    // Ad ogni check del filtro, aggiorna la lista
    useEffect(() => {
        if (isChecked)
            setParamIdFilters([...paramIdFilters, genericId])
        else
            setParamIdFilters(old => { return old.filter(el => el !== genericId) })

    }, [isChecked])

    return (
        <Row className="text-start gx-5">
            <Col style={{ fontSize: "13px" }} xs={7}>{title}</Col>
            <Col xs={3}>{countNotAutoextended}</Col>
            <Col xs={2}><input
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                type="checkbox"></input></Col>
        </Row>
    )
})

export default HeaderFilterHotel