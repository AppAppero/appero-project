const bar_mil = [
    {
        "type": "flight-offer",
        "id": "1",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "lastTicketingDate": "2023-11-20",
        "lastTicketingDateTime": "2023-11-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BRI",
                            "at": "2023-11-20T10:45:00"
                        },
                        "arrival": {
                            "iataCode": "LIN",
                            "at": "2023-11-20T12:10:00"
                        },
                        "carrierCode": "AZ",
                        "number": "1648",
                        "aircraft": {
                            "code": "319"
                        },
                        "operating": {
                            "carrierCode": "AZ"
                        },
                        "duration": "PT1H30M",
                        "id": "5",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            },
            {
                "segments": [
                    {
                        "departure": {
                            "iataCode": "LIN",
                            "at": "2023-11-26T08:35:00"
                        },
                        "arrival": {
                            "iataCode": "BRI",
                            "at": "2023-11-26T10:00:00"
                        },
                        "carrierCode": "AZ",
                        "number": "1649",
                        "aircraft": {
                            "code": "319"
                        },
                        "operating": {
                            "carrierCode": "AZ"
                        },
                        "duration": "PT1H30M",
                        "id": "42",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "192.36",
            "base": "114.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "481",
            "additionalServices": [
                {
                    "amount": "110.00",
                    "type": "CHECKED_BAGS"
                }
            ]
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": false
        },
        "validatingAirlineCodes": [
            "AZ"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "192.36",
                    "base": "114.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "5",
                        "cabin": "ECONOMY",
                        "fareBasis": "FOWLGN7",
                        "brandedFare": "PROMOLIGHT",
                        "class": "F",
                        "includedCheckedBags": {
                            "quantity": 0
                        }
                    },
                    {
                        "segmentId": "42",
                        "cabin": "ECONOMY",
                        "fareBasis": "XOWLGN1",
                        "brandedFare": "ECOLIGHT",
                        "class": "X",
                        "includedCheckedBags": {
                            "quantity": 0
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "2",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "lastTicketingDate": "2023-11-20",
        "lastTicketingDateTime": "2023-11-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BRI",
                            "at": "2023-11-20T10:45:00"
                        },
                        "arrival": {
                            "iataCode": "LIN",
                            "at": "2023-11-20T12:10:00"
                        },
                        "carrierCode": "AZ",
                        "number": "1648",
                        "aircraft": {
                            "code": "319"
                        },
                        "operating": {
                            "carrierCode": "AZ"
                        },
                        "duration": "PT1H25M",
                        "id": "5",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            },
            {
                "segments": [
                    {
                        "departure": {
                            "iataCode": "LIN",
                            "at": "2023-11-26T14:00:00"
                        },
                        "arrival": {
                            "iataCode": "BRI",
                            "at": "2023-11-26T15:25:00"
                        },
                        "carrierCode": "AZ",
                        "number": "1647",
                        "aircraft": {
                            "code": "319"
                        },
                        "operating": {
                            "carrierCode": "AZ"
                        },
                        "duration": "PT0H35M",
                        "id": "43",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "192.36",
            "base": "114.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "192",
            "additionalServices": [
                {
                    "amount": "110.00",
                    "type": "CHECKED_BAGS"
                }
            ]
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": false
        },
        "validatingAirlineCodes": [
            "AZ"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "192.36",
                    "base": "114.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "5",
                        "cabin": "ECONOMY",
                        "fareBasis": "FOWLGN7",
                        "brandedFare": "PROMOLIGHT",
                        "class": "F",
                        "includedCheckedBags": {
                            "quantity": 0
                        }
                    },
                    {
                        "segmentId": "43",
                        "cabin": "ECONOMY",
                        "fareBasis": "XOWLGN1",
                        "brandedFare": "ECOLIGHT",
                        "class": "X",
                        "includedCheckedBags": {
                            "quantity": 0
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "3",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "lastTicketingDate": "2023-11-20",
        "lastTicketingDateTime": "2023-11-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BRI",
                            "at": "2023-11-20T12:05:00"
                        },
                        "arrival": {
                            "iataCode": "LIN",
                            "at": "2023-11-20T13:30:00"
                        },
                        "carrierCode": "AZ",
                        "number": "1636",
                        "aircraft": {
                            "code": "319"
                        },
                        "operating": {
                            "carrierCode": "AZ"
                        },
                        "duration": "PT2H30M",
                        "id": "6",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            },
            {
                "segments": [
                    {
                        "departure": {
                            "iataCode": "LIN",
                            "at": "2023-11-26T08:35:00"
                        },
                        "arrival": {
                            "iataCode": "BRI",
                            "at": "2023-11-26T10:00:00"
                        },
                        "carrierCode": "AZ",
                        "number": "1649",
                        "aircraft": {
                            "code": "319"
                        },
                        "operating": {
                            "carrierCode": "AZ"
                        },
                        "duration": "PT1H30M",
                        "id": "42",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "192.36",
            "base": "114.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "292.36",
            "additionalServices": [
                {
                    "amount": "110.00",
                    "type": "CHECKED_BAGS"
                }
            ]
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": false
        },
        "validatingAirlineCodes": [
            "AZ"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "192.36",
                    "base": "114.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "6",
                        "cabin": "ECONOMY",
                        "fareBasis": "FOWLGN7",
                        "brandedFare": "PROMOLIGHT",
                        "class": "F",
                        "includedCheckedBags": {
                            "quantity": 0
                        }
                    },
                    {
                        "segmentId": "42",
                        "cabin": "ECONOMY",
                        "fareBasis": "XOWLGN1",
                        "brandedFare": "ECOLIGHT",
                        "class": "X",
                        "includedCheckedBags": {
                            "quantity": 0
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "4",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "lastTicketingDate": "2023-11-20",
        "lastTicketingDateTime": "2023-11-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BRI",
                            "at": "2023-11-20T12:05:00"
                        },
                        "arrival": {
                            "iataCode": "LIN",
                            "at": "2023-11-20T13:30:00"
                        },
                        "carrierCode": "AZ",
                        "number": "1636",
                        "aircraft": {
                            "code": "319"
                        },
                        "operating": {
                            "carrierCode": "AZ"
                        },
                        "duration": "PT7H30M",
                        "id": "6",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            },
            {
                "segments": [
                    {
                        "departure": {
                            "iataCode": "LIN",
                            "at": "2023-11-26T14:00:00"
                        },
                        "arrival": {
                            "iataCode": "BRI",
                            "at": "2023-11-26T15:25:00"
                        },
                        "carrierCode": "AZ",
                        "number": "1647",
                        "aircraft": {
                            "code": "319"
                        },
                        "operating": {
                            "carrierCode": "AZ"
                        },
                        "duration": "PT2H30M",
                        "id": "43",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "192.36",
            "base": "114.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "100.36",
            "additionalServices": [
                {
                    "amount": "110.00",
                    "type": "CHECKED_BAGS"
                }
            ]
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": false
        },
        "validatingAirlineCodes": [
            "AZ"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "192.36",
                    "base": "114.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "6",
                        "cabin": "ECONOMY",
                        "fareBasis": "FOWLGN7",
                        "brandedFare": "PROMOLIGHT",
                        "class": "F",
                        "includedCheckedBags": {
                            "quantity": 0
                        }
                    },
                    {
                        "segmentId": "43",
                        "cabin": "ECONOMY",
                        "fareBasis": "XOWLGN1",
                        "brandedFare": "ECOLIGHT",
                        "class": "X",
                        "includedCheckedBags": {
                            "quantity": 0
                        }
                    }
                ]
            }
        ]
    }
];

const rom_val = [
    {
        "type": "flight-offer",
        "id": "1",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "lastTicketingDate": "2023-11-17",
        "lastTicketingDateTime": "2023-11-17",
        "numberOfBookableSeats": 4,
        "itineraries": [
            {
                "duration": "PT2H5M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-04T07:00:00"
                        },
                        "arrival": {
                            "iataCode": "VLC",
                            "at": "2023-12-04T09:05:00"
                        },
                        "carrierCode": "IB",
                        "number": "5411",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT2H5M",
                        "id": "3",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            },
            {
                "duration": "PT2H",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "VLC",
                            "at": "2023-12-10T09:40:00"
                        },
                        "arrival": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-10T11:40:00"
                        },
                        "carrierCode": "IB",
                        "number": "5410",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT2H",
                        "id": "5",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "294.33",
            "base": "254.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "294.33"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "IB"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "294.33",
                    "base": "254.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "3",
                        "cabin": "ECONOMY",
                        "fareBasis": "NRVYTF",
                        "brandedFare": "TIMEFLEXVY",
                        "class": "N",
                        "includedCheckedBags": {
                            "quantity": 1
                        }
                    },
                    {
                        "segmentId": "5",
                        "cabin": "ECONOMY",
                        "fareBasis": "ORVYTF",
                        "brandedFare": "TIMEFLEXVY",
                        "class": "O",
                        "includedCheckedBags": {
                            "quantity": 1
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "2",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "lastTicketingDate": "2023-11-17",
        "lastTicketingDateTime": "2023-11-17",
        "numberOfBookableSeats": 4,
        "itineraries": [
            {
                "duration": "PT2H5M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-04T07:00:00"
                        },
                        "arrival": {
                            "iataCode": "VLC",
                            "at": "2023-12-04T09:05:00"
                        },
                        "carrierCode": "VY",
                        "number": "6243",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT2H5M",
                        "id": "4",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            },
            {
                "duration": "PT2H",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "VLC",
                            "at": "2023-12-10T09:40:00"
                        },
                        "arrival": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-10T11:40:00"
                        },
                        "carrierCode": "VY",
                        "number": "6242",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT2H",
                        "id": "6",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "296.33",
            "base": "256.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "296.33"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "VY"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "296.33",
                    "base": "256.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "4",
                        "cabin": "ECONOMY",
                        "fareBasis": "WRFLX",
                        "class": "W",
                        "includedCheckedBags": {
                            "weight": 25,
                            "weightUnit": "KG"
                        }
                    },
                    {
                        "segmentId": "6",
                        "cabin": "ECONOMY",
                        "fareBasis": "ORFLX",
                        "class": "O",
                        "includedCheckedBags": {
                            "weight": 25,
                            "weightUnit": "KG"
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "3",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "lastTicketingDate": "2023-11-17",
        "lastTicketingDateTime": "2023-11-17",
        "numberOfBookableSeats": 1,
        "itineraries": [
            {
                "duration": "PT2H",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-04T18:45:00"
                        },
                        "arrival": {
                            "iataCode": "VLC",
                            "at": "2023-12-04T20:45:00"
                        },
                        "carrierCode": "VY",
                        "number": "6245",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT2H",
                        "id": "1",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            },
            {
                "duration": "PT2H",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "VLC",
                            "at": "2023-12-10T09:40:00"
                        },
                        "arrival": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-10T11:40:00"
                        },
                        "carrierCode": "VY",
                        "number": "6242",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT2H",
                        "id": "6",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "311.33",
            "base": "271.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "311.33"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "VY"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "311.33",
                    "base": "271.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "1",
                        "cabin": "ECONOMY",
                        "fareBasis": "JRFLX",
                        "class": "J",
                        "includedCheckedBags": {
                            "weight": 25,
                            "weightUnit": "KG"
                        }
                    },
                    {
                        "segmentId": "6",
                        "cabin": "ECONOMY",
                        "fareBasis": "ORFLX",
                        "class": "O",
                        "includedCheckedBags": {
                            "weight": 25,
                            "weightUnit": "KG"
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "4",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "lastTicketingDate": "2023-11-17",
        "lastTicketingDateTime": "2023-11-17",
        "numberOfBookableSeats": 4,
        "itineraries": [
            {
                "duration": "PT2H",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-04T18:45:00"
                        },
                        "arrival": {
                            "iataCode": "VLC",
                            "at": "2023-12-04T20:45:00"
                        },
                        "carrierCode": "IB",
                        "number": "5413",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT2H",
                        "id": "2",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            },
            {
                "duration": "PT2H",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "VLC",
                            "at": "2023-12-10T09:40:00"
                        },
                        "arrival": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-10T11:40:00"
                        },
                        "carrierCode": "IB",
                        "number": "5410",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT2H",
                        "id": "5",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "320.33",
            "base": "280.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "320.33"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "IB"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "320.33",
                    "base": "280.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "2",
                        "cabin": "ECONOMY",
                        "fareBasis": "SRVYTF",
                        "brandedFare": "TIMEFLEXVY",
                        "class": "S",
                        "includedCheckedBags": {
                            "quantity": 1
                        }
                    },
                    {
                        "segmentId": "5",
                        "cabin": "ECONOMY",
                        "fareBasis": "ORVYTF",
                        "brandedFare": "TIMEFLEXVY",
                        "class": "O",
                        "includedCheckedBags": {
                            "quantity": 1
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "5",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "lastTicketingDate": "2023-11-17",
        "lastTicketingDateTime": "2023-11-17",
        "numberOfBookableSeats": 4,
        "itineraries": [
            {
                "duration": "PT2H5M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-04T07:00:00"
                        },
                        "arrival": {
                            "iataCode": "VLC",
                            "at": "2023-12-04T09:05:00"
                        },
                        "carrierCode": "IB",
                        "number": "5411",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT2H5M",
                        "id": "3",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            },
            {
                "duration": "PT1H55M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "VLC",
                            "at": "2023-12-10T16:20:00"
                        },
                        "arrival": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-10T18:15:00"
                        },
                        "carrierCode": "IB",
                        "number": "5412",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT1H55M",
                        "id": "7",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "353.33",
            "base": "313.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "353.33"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "IB"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "353.33",
                    "base": "313.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "3",
                        "cabin": "ECONOMY",
                        "fareBasis": "NRVYTF",
                        "brandedFare": "TIMEFLEXVY",
                        "class": "N",
                        "includedCheckedBags": {
                            "quantity": 1
                        }
                    },
                    {
                        "segmentId": "7",
                        "cabin": "ECONOMY",
                        "fareBasis": "VRVYTF",
                        "brandedFare": "TIMEFLEXVY",
                        "class": "V",
                        "includedCheckedBags": {
                            "quantity": 1
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "6",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "lastTicketingDate": "2023-11-17",
        "lastTicketingDateTime": "2023-11-17",
        "numberOfBookableSeats": 4,
        "itineraries": [
            {
                "duration": "PT2H5M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-04T07:00:00"
                        },
                        "arrival": {
                            "iataCode": "VLC",
                            "at": "2023-12-04T09:05:00"
                        },
                        "carrierCode": "VY",
                        "number": "6243",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT2H5M",
                        "id": "4",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            },
            {
                "duration": "PT1H55M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "VLC",
                            "at": "2023-12-10T16:20:00"
                        },
                        "arrival": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-10T18:15:00"
                        },
                        "carrierCode": "VY",
                        "number": "6244",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT1H55M",
                        "id": "8",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "355.33",
            "base": "315.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "355.33"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "VY"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "355.33",
                    "base": "315.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "4",
                        "cabin": "ECONOMY",
                        "fareBasis": "WRFLX",
                        "class": "W",
                        "includedCheckedBags": {
                            "weight": 25,
                            "weightUnit": "KG"
                        }
                    },
                    {
                        "segmentId": "8",
                        "cabin": "ECONOMY",
                        "fareBasis": "XRFLX",
                        "class": "X",
                        "includedCheckedBags": {
                            "weight": 25,
                            "weightUnit": "KG"
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "7",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "lastTicketingDate": "2023-11-17",
        "lastTicketingDateTime": "2023-11-17",
        "numberOfBookableSeats": 1,
        "itineraries": [
            {
                "duration": "PT2H",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-04T18:45:00"
                        },
                        "arrival": {
                            "iataCode": "VLC",
                            "at": "2023-12-04T20:45:00"
                        },
                        "carrierCode": "VY",
                        "number": "6245",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT2H",
                        "id": "1",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            },
            {
                "duration": "PT1H55M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "VLC",
                            "at": "2023-12-10T16:20:00"
                        },
                        "arrival": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-10T18:15:00"
                        },
                        "carrierCode": "VY",
                        "number": "6244",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT1H55M",
                        "id": "8",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "369.33",
            "base": "329.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "369.33"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "VY"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "369.33",
                    "base": "329.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "1",
                        "cabin": "ECONOMY",
                        "fareBasis": "JRFLX",
                        "class": "J",
                        "includedCheckedBags": {
                            "weight": 25,
                            "weightUnit": "KG"
                        }
                    },
                    {
                        "segmentId": "8",
                        "cabin": "ECONOMY",
                        "fareBasis": "XRFLX",
                        "class": "X",
                        "includedCheckedBags": {
                            "weight": 25,
                            "weightUnit": "KG"
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "8",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "lastTicketingDate": "2023-11-17",
        "lastTicketingDateTime": "2023-11-17",
        "numberOfBookableSeats": 4,
        "itineraries": [
            {
                "duration": "PT2H",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-04T18:45:00"
                        },
                        "arrival": {
                            "iataCode": "VLC",
                            "at": "2023-12-04T20:45:00"
                        },
                        "carrierCode": "IB",
                        "number": "5413",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT2H",
                        "id": "2",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            },
            {
                "duration": "PT1H55M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "VLC",
                            "at": "2023-12-10T16:20:00"
                        },
                        "arrival": {
                            "iataCode": "FCO",
                            "terminal": "1",
                            "at": "2023-12-10T18:15:00"
                        },
                        "carrierCode": "IB",
                        "number": "5412",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "VY"
                        },
                        "duration": "PT1H55M",
                        "id": "7",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "378.33",
            "base": "338.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "378.33"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "IB"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "378.33",
                    "base": "338.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "2",
                        "cabin": "ECONOMY",
                        "fareBasis": "SRVYTF",
                        "brandedFare": "TIMEFLEXVY",
                        "class": "S",
                        "includedCheckedBags": {
                            "quantity": 1
                        }
                    },
                    {
                        "segmentId": "7",
                        "cabin": "ECONOMY",
                        "fareBasis": "VRVYTF",
                        "brandedFare": "TIMEFLEXVY",
                        "class": "V",
                        "includedCheckedBags": {
                            "quantity": 1
                        }
                    }
                ]
            }
        ]
    }
]
export { bar_mil, rom_val };
