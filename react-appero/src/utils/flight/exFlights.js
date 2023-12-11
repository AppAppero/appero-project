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

// Utile per controllare il bug dei filtri voli 
const bar_val = {
    "meta": {
        "count": 20,
        "links": {
            "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=BRI&destinationLocationCode=VLC&departureDate=2023-11-27&returnDate=2023-12-03&adults=2&currencyCode=EUR&maxPrice=3000&children=0&infants=0&max=20"
        }
    },
    "data": [
        {
            "type": "flight-offer",
            "id": "1",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-24",
            "lastTicketingDateTime": "2023-11-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT13H35M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T06:20:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T07:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1602",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H10M",
                            "id": "16",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T12:45:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T15:20:00"
                            },
                            "carrierCode": "KL",
                            "number": "1602",
                            "aircraft": {
                                "code": "73J"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H35M",
                            "id": "17",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T17:30:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-27T19:55:00"
                            },
                            "carrierCode": "KL",
                            "number": "2659",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H25M",
                            "id": "18",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H25M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T10:30:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T13:10:00"
                            },
                            "carrierCode": "KL",
                            "number": "2621",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H40M",
                            "id": "43",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T19:10:00"
                            },
                            "carrierCode": "KL",
                            "number": "1607",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "44",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "45",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "704.24",
                "base": "378.00",
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
                "grandTotal": "704.24"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "352.12",
                        "base": "189.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "16",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "17",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "18",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "44",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "45",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "352.12",
                        "base": "189.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "16",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "17",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "18",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "44",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "45",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
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
            "lastTicketingDate": "2023-11-27",
            "lastTicketingDateTime": "2023-11-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT21H",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T19:15:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T20:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1606",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H10M",
                            "id": "1",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-28T08:10:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T10:45:00"
                            },
                            "carrierCode": "AZ",
                            "number": "58",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H35M",
                            "id": "2",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T15:15:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-28T16:15:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2403",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "3",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT10H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T12:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T13:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2417",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "46",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T18:00:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T20:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "63",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H30M",
                            "id": "47",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "48",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "733.50",
                "base": "284.00",
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
                "grandTotal": "733.50",
                "additionalServices": [
                    {
                        "amount": "130.00",
                        "type": "CHECKED_BAGS"
                    }
                ]
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
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
                        "total": "366.75",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "2",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "3",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "366.75",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "2",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "3",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
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
            "id": "3",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-27",
            "lastTicketingDateTime": "2023-11-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT28H55M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T11:20:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T12:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1612",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H10M",
                            "id": "28",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-28T08:10:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T10:45:00"
                            },
                            "carrierCode": "AZ",
                            "number": "58",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H35M",
                            "id": "29",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T15:15:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-28T16:15:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2403",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "30",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT10H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T12:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T13:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2417",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "46",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T18:00:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T20:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "63",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H30M",
                            "id": "47",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "48",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "733.50",
                "base": "284.00",
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
                "grandTotal": "733.50",
                "additionalServices": [
                    {
                        "amount": "130.00",
                        "type": "CHECKED_BAGS"
                    }
                ]
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
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
                        "total": "366.75",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "28",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "29",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "30",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "366.75",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "28",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "29",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "30",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
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
            "id": "4",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-24",
            "lastTicketingDateTime": "2023-11-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT10H55M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T12:05:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-11-27T13:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1636",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "25",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MXP",
                                "terminal": "1",
                                "at": "2023-11-27T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T18:50:00"
                            },
                            "carrierCode": "KL",
                            "number": "1632",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT1H55M",
                            "id": "26",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T20:35:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-27T23:00:00"
                            },
                            "carrierCode": "KL",
                            "number": "1501",
                            "aircraft": {
                                "code": "E90"
                            },
                            "duration": "PT2H25M",
                            "id": "27",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H25M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T10:30:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T13:10:00"
                            },
                            "carrierCode": "KL",
                            "number": "2621",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H40M",
                            "id": "43",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T19:10:00"
                            },
                            "carrierCode": "KL",
                            "number": "1607",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "44",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "45",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "736.70",
                "base": "378.00",
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
                "grandTotal": "736.70"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "368.35",
                        "base": "189.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "25",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "26",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "27",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "44",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "45",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "368.35",
                        "base": "189.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "25",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "26",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "27",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "44",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "45",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
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
            "lastTicketingDate": "2023-11-24",
            "lastTicketingDateTime": "2023-11-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT12H15M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T10:45:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-11-27T12:10:00"
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
                            "id": "13",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MXP",
                                "terminal": "1",
                                "at": "2023-11-27T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T18:50:00"
                            },
                            "carrierCode": "KL",
                            "number": "1632",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT1H55M",
                            "id": "14",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T20:35:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-27T23:00:00"
                            },
                            "carrierCode": "KL",
                            "number": "1501",
                            "aircraft": {
                                "code": "E90"
                            },
                            "duration": "PT2H25M",
                            "id": "15",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H25M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T10:30:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T13:10:00"
                            },
                            "carrierCode": "KL",
                            "number": "2621",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H40M",
                            "id": "43",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T19:10:00"
                            },
                            "carrierCode": "KL",
                            "number": "1607",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "44",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "45",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "736.70",
                "base": "378.00",
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
                "grandTotal": "736.70"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "368.35",
                        "base": "189.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "13",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "14",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "15",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "44",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "45",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "368.35",
                        "base": "189.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "13",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "14",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "15",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "44",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "45",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
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
            "lastTicketingDate": "2023-11-27",
            "lastTicketingDateTime": "2023-11-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT21H",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T19:15:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T20:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1606",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H10M",
                            "id": "1",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-28T08:10:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T10:45:00"
                            },
                            "carrierCode": "AZ",
                            "number": "58",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H35M",
                            "id": "2",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T15:15:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-28T16:15:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2403",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "3",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT34H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T12:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T13:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2417",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "52",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-04T05:50:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-04T08:15:00"
                            },
                            "carrierCode": "AZ",
                            "number": "59",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H25M",
                            "id": "53",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-04T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-04T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "54",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "747.16",
                "base": "284.00",
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
                "grandTotal": "747.16",
                "additionalServices": [
                    {
                        "amount": "130.00",
                        "type": "CHECKED_BAGS"
                    }
                ]
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
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
                        "total": "373.58",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "2",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "3",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "52",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "53",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "54",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "373.58",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "2",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "3",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "52",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "53",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "54",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
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
            "id": "7",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-27",
            "lastTicketingDateTime": "2023-11-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT28H55M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T11:20:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T12:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1612",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H10M",
                            "id": "28",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-28T08:10:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T10:45:00"
                            },
                            "carrierCode": "AZ",
                            "number": "58",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H35M",
                            "id": "29",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T15:15:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-28T16:15:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2403",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "30",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT34H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T12:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T13:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2417",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "52",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-04T05:50:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-04T08:15:00"
                            },
                            "carrierCode": "AZ",
                            "number": "59",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H25M",
                            "id": "53",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-04T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-04T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "54",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "747.16",
                "base": "284.00",
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
                "grandTotal": "747.16",
                "additionalServices": [
                    {
                        "amount": "130.00",
                        "type": "CHECKED_BAGS"
                    }
                ]
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
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
                        "total": "373.58",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "28",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "29",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "30",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "52",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "53",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "54",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "373.58",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "28",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "29",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "30",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "52",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "53",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "54",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
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
            "id": "8",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-27",
            "lastTicketingDateTime": "2023-11-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT21H",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T19:15:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T20:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1606",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H10M",
                            "id": "4",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T21:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-27T23:59:00"
                            },
                            "carrierCode": "AZ",
                            "number": "64",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H34M",
                            "id": "5",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T15:15:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-28T16:15:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2403",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "6",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT10H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T12:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T13:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2417",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "46",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T18:00:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T20:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "63",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H30M",
                            "id": "47",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "48",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "748.52",
                "base": "284.00",
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
                "grandTotal": "748.52",
                "additionalServices": [
                    {
                        "amount": "130.00",
                        "type": "CHECKED_BAGS"
                    }
                ]
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
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
                        "total": "374.26",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "4",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "5",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "374.26",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "4",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "5",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
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
            "id": "9",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-27",
            "lastTicketingDateTime": "2023-11-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT28H55M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T11:20:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T12:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1612",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H10M",
                            "id": "31",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T14:35:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-27T17:10:00"
                            },
                            "carrierCode": "AZ",
                            "number": "60",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H35M",
                            "id": "32",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T15:15:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-28T16:15:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2403",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "33",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT10H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T12:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T13:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2417",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "46",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T18:00:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T20:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "63",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H30M",
                            "id": "47",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "48",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "748.52",
                "base": "284.00",
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
                "grandTotal": "748.52",
                "additionalServices": [
                    {
                        "amount": "130.00",
                        "type": "CHECKED_BAGS"
                    }
                ]
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
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
                        "total": "374.26",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "31",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "32",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "33",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "374.26",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "31",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "32",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "33",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
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
            "id": "10",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-27",
            "lastTicketingDateTime": "2023-11-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT28H55M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T11:20:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T12:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1612",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H10M",
                            "id": "34",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T21:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-27T23:59:00"
                            },
                            "carrierCode": "AZ",
                            "number": "64",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H34M",
                            "id": "35",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T15:15:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-28T16:15:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2403",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "36",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT10H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T12:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T13:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2417",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "46",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T18:00:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T20:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "63",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H30M",
                            "id": "47",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "48",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "748.52",
                "base": "284.00",
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
                "grandTotal": "748.52",
                "additionalServices": [
                    {
                        "amount": "130.00",
                        "type": "CHECKED_BAGS"
                    }
                ]
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
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
                        "total": "374.26",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "34",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "35",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "36",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "374.26",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "34",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "35",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "36",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
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
            "id": "11",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-27",
            "lastTicketingDateTime": "2023-11-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT33H55M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T06:20:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T07:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1602",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H10M",
                            "id": "37",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T14:35:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-27T17:10:00"
                            },
                            "carrierCode": "AZ",
                            "number": "60",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H35M",
                            "id": "38",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T15:15:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-28T16:15:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2403",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "39",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT10H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T12:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T13:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2417",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "46",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T18:00:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T20:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "63",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H30M",
                            "id": "47",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "48",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "748.52",
                "base": "284.00",
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
                "grandTotal": "748.52",
                "additionalServices": [
                    {
                        "amount": "130.00",
                        "type": "CHECKED_BAGS"
                    }
                ]
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
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
                        "total": "374.26",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "37",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "38",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "39",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "374.26",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "37",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "38",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "39",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
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
            "id": "12",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-27",
            "lastTicketingDateTime": "2023-11-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT33H55M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T06:20:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T07:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1602",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H10M",
                            "id": "40",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T21:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-27T23:59:00"
                            },
                            "carrierCode": "AZ",
                            "number": "64",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H34M",
                            "id": "41",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T15:15:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-28T16:15:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2403",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "42",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT10H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T12:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T13:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2417",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "46",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T18:00:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T20:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "63",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H30M",
                            "id": "47",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "48",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "748.52",
                "base": "284.00",
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
                "grandTotal": "748.52",
                "additionalServices": [
                    {
                        "amount": "130.00",
                        "type": "CHECKED_BAGS"
                    }
                ]
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
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
                        "total": "374.26",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "40",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "41",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "42",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "374.26",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "40",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "41",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "42",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
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
            "id": "13",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-27",
            "lastTicketingDateTime": "2023-11-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT45H",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T19:15:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T20:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1606",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H10M",
                            "id": "7",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-28T14:35:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T17:10:00"
                            },
                            "carrierCode": "AZ",
                            "number": "60",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H35M",
                            "id": "8",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-29T15:15:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-29T16:15:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2403",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "9",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT10H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T12:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T13:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2417",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "46",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T18:00:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T20:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "63",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H30M",
                            "id": "47",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "48",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "748.52",
                "base": "284.00",
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
                "grandTotal": "748.52",
                "additionalServices": [
                    {
                        "amount": "130.00",
                        "type": "CHECKED_BAGS"
                    }
                ]
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
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
                        "total": "374.26",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "7",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "8",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "9",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "374.26",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "7",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "8",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "9",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "46",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "47",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "48",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
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
            "id": "14",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-27",
            "lastTicketingDateTime": "2023-11-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT21H",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T19:15:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T20:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1606",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H10M",
                            "id": "4",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-11-27T21:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-27T23:59:00"
                            },
                            "carrierCode": "AZ",
                            "number": "64",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H34M",
                            "id": "5",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-11-28T15:15:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-28T16:15:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2403",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "6",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT34H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T12:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-03T13:25:00"
                            },
                            "carrierCode": "AZ",
                            "number": "2417",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "52",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-04T05:50:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-04T08:15:00"
                            },
                            "carrierCode": "AZ",
                            "number": "59",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H25M",
                            "id": "53",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-04T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-04T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "54",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "762.18",
                "base": "284.00",
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
                "grandTotal": "762.18",
                "additionalServices": [
                    {
                        "amount": "130.00",
                        "type": "CHECKED_BAGS"
                    }
                ]
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
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
                        "total": "381.09",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "4",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "5",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "52",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "53",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "54",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "381.09",
                        "base": "142.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "4",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "5",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "52",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "53",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "54",
                            "cabin": "ECONOMY",
                            "fareBasis": "XRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "class": "X",
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
            "id": "15",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-24",
            "lastTicketingDateTime": "2023-11-24",
            "numberOfBookableSeats": 6,
            "itineraries": [
                {
                    "duration": "PT9H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T10:45:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-11-27T12:10:00"
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
                            "id": "10",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "LIN",
                                "at": "2023-11-27T14:05:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T16:00:00"
                            },
                            "carrierCode": "KL",
                            "number": "1624",
                            "aircraft": {
                                "code": "E75"
                            },
                            "duration": "PT1H55M",
                            "id": "11",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T17:30:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-27T19:55:00"
                            },
                            "carrierCode": "KL",
                            "number": "2659",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H25M",
                            "id": "12",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H25M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T10:30:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T13:10:00"
                            },
                            "carrierCode": "KL",
                            "number": "2621",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H40M",
                            "id": "43",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T19:10:00"
                            },
                            "carrierCode": "KL",
                            "number": "1607",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "44",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "45",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "849.20",
                "base": "472.00",
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
                "grandTotal": "849.20"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "424.60",
                        "base": "236.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "10",
                            "cabin": "ECONOMY",
                            "fareBasis": "QYS02CSA",
                            "brandedFare": "STANDARD",
                            "class": "Q",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "11",
                            "cabin": "ECONOMY",
                            "fareBasis": "QYS02CSA",
                            "brandedFare": "STANDARD",
                            "class": "Q",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "12",
                            "cabin": "ECONOMY",
                            "fareBasis": "QYS02CSA",
                            "brandedFare": "STANDARD",
                            "class": "Q",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "44",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "45",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "424.60",
                        "base": "236.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "10",
                            "cabin": "ECONOMY",
                            "fareBasis": "QYS02CSA",
                            "brandedFare": "STANDARD",
                            "class": "Q",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "11",
                            "cabin": "ECONOMY",
                            "fareBasis": "QYS02CSA",
                            "brandedFare": "STANDARD",
                            "class": "Q",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "12",
                            "cabin": "ECONOMY",
                            "fareBasis": "QYS02CSA",
                            "brandedFare": "STANDARD",
                            "class": "Q",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "44",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "45",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
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
            "id": "16",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-24",
            "lastTicketingDateTime": "2023-11-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT10H45M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T09:10:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-11-27T10:35:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1638",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "19",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "LIN",
                                "at": "2023-11-27T11:25:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T13:15:00"
                            },
                            "carrierCode": "KL",
                            "number": "1620",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT1H50M",
                            "id": "20",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T17:30:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-27T19:55:00"
                            },
                            "carrierCode": "KL",
                            "number": "2659",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H25M",
                            "id": "21",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H25M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T10:30:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T13:10:00"
                            },
                            "carrierCode": "KL",
                            "number": "2621",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H40M",
                            "id": "43",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T19:10:00"
                            },
                            "carrierCode": "KL",
                            "number": "1607",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "44",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "45",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "863.20",
                "base": "486.00",
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
                "grandTotal": "863.20"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "431.60",
                        "base": "243.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "19",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "20",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "21",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "44",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "45",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "431.60",
                        "base": "243.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "19",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "20",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "21",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "44",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "45",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
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
            "id": "17",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-24",
            "lastTicketingDateTime": "2023-11-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT10H45M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T09:10:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-11-27T10:35:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1638",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "22",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "LIN",
                                "at": "2023-11-27T14:05:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T16:00:00"
                            },
                            "carrierCode": "KL",
                            "number": "1624",
                            "aircraft": {
                                "code": "E75"
                            },
                            "duration": "PT1H55M",
                            "id": "23",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T17:30:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-27T19:55:00"
                            },
                            "carrierCode": "KL",
                            "number": "2659",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H25M",
                            "id": "24",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H25M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T10:30:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T13:10:00"
                            },
                            "carrierCode": "KL",
                            "number": "2621",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H40M",
                            "id": "43",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T19:10:00"
                            },
                            "carrierCode": "KL",
                            "number": "1607",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "44",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "45",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "863.20",
                "base": "486.00",
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
                "grandTotal": "863.20"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "431.60",
                        "base": "243.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "22",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "23",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "24",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "44",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "45",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "431.60",
                        "base": "243.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "22",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "23",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "24",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "44",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "45",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
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
            "id": "18",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-24",
            "lastTicketingDateTime": "2023-11-24",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT10H55M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T12:05:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-11-27T13:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1636",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "25",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MXP",
                                "terminal": "1",
                                "at": "2023-11-27T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T18:50:00"
                            },
                            "carrierCode": "KL",
                            "number": "1632",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT1H55M",
                            "id": "26",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T20:35:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-27T23:00:00"
                            },
                            "carrierCode": "KL",
                            "number": "1501",
                            "aircraft": {
                                "code": "E90"
                            },
                            "duration": "PT2H25M",
                            "id": "27",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T06:00:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T08:40:00"
                            },
                            "carrierCode": "KL",
                            "number": "1502",
                            "aircraft": {
                                "code": "E90"
                            },
                            "duration": "PT2H40M",
                            "id": "49",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T09:35:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T11:50:00"
                            },
                            "carrierCode": "KL",
                            "number": "120",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "50",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T17:25:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T18:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1607",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "51",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "874.70",
                "base": "486.00",
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
                "grandTotal": "874.70"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "437.35",
                        "base": "243.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "25",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "26",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "27",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "49",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "50",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "51",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "437.35",
                        "base": "243.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "25",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "26",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "27",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "class": "R",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "49",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "50",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "51",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
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
            "id": "19",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-27",
            "lastTicketingDateTime": "2023-11-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT9H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T10:45:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-11-27T12:10:00"
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
                            "id": "10",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "LIN",
                                "at": "2023-11-27T14:05:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T16:00:00"
                            },
                            "carrierCode": "KL",
                            "number": "1624",
                            "aircraft": {
                                "code": "E75"
                            },
                            "duration": "PT1H55M",
                            "id": "11",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T17:30:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-27T19:55:00"
                            },
                            "carrierCode": "KL",
                            "number": "2659",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H25M",
                            "id": "12",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T06:00:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T08:40:00"
                            },
                            "carrierCode": "KL",
                            "number": "1502",
                            "aircraft": {
                                "code": "E90"
                            },
                            "duration": "PT2H40M",
                            "id": "49",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T09:35:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T11:50:00"
                            },
                            "carrierCode": "KL",
                            "number": "120",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "50",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T17:25:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T18:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1607",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "51",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "879.20",
                "base": "472.00",
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
                "grandTotal": "879.20"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "439.60",
                        "base": "236.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "10",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "11",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "12",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "49",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "50",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "51",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "439.60",
                        "base": "236.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "10",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "11",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "12",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "49",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "50",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "51",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "V",
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
            "id": "20",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-11-27",
            "lastTicketingDateTime": "2023-11-27",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT10H45M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "at": "2023-11-27T09:10:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-11-27T10:35:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1638",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "19",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "LIN",
                                "at": "2023-11-27T11:25:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T13:15:00"
                            },
                            "carrierCode": "KL",
                            "number": "1620",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT1H50M",
                            "id": "20",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-11-27T17:30:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-11-27T19:55:00"
                            },
                            "carrierCode": "KL",
                            "number": "2659",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H25M",
                            "id": "21",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "at": "2023-12-03T06:00:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T08:40:00"
                            },
                            "carrierCode": "KL",
                            "number": "1502",
                            "aircraft": {
                                "code": "E90"
                            },
                            "duration": "PT2H40M",
                            "id": "49",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "at": "2023-12-03T09:35:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T11:50:00"
                            },
                            "carrierCode": "KL",
                            "number": "120",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "50",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-03T17:25:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-03T18:30:00"
                            },
                            "carrierCode": "AZ",
                            "number": "1607",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "51",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "879.20",
                "base": "472.00",
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
                "grandTotal": "879.20"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "439.60",
                        "base": "236.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "19",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "20",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "21",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "49",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "50",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "51",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "439.60",
                        "base": "236.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "19",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "20",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "21",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "49",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "50",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "H",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "51",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ABLA",
                            "brandedFare": "LIGHT",
                            "class": "V",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "dictionaries": {
        "locations": {
            "LIN": {
                "cityCode": "MIL",
                "countryCode": "IT"
            },
            "MAD": {
                "cityCode": "MAD",
                "countryCode": "ES"
            },
            "FCO": {
                "cityCode": "ROM",
                "countryCode": "IT"
            },
            "MXP": {
                "cityCode": "MIL",
                "countryCode": "IT"
            },
            "AMS": {
                "cityCode": "AMS",
                "countryCode": "NL"
            },
            "BRI": {
                "cityCode": "BRI",
                "countryCode": "IT"
            },
            "VLC": {
                "cityCode": "VLC",
                "countryCode": "ES"
            }
        },
        "aircraft": {
            "319": "AIRBUS A319",
            "E75": "EMBRAER 175",
            "32S": "AIRBUS INDUSTRIE A318/A319/A320/A321",
            "73H": "BOEING 737-800 (WINGLETS)",
            "E90": "EMBRAER 190",
            "73J": "BOEING 737-900"
        },
        "currencies": {
            "EUR": "EURO"
        },
        "carriers": {
            "KL": "KLM ROYAL DUTCH AIRLINES",
            "UX": "AIR EUROPA",
            "AZ": "ITA AIRWAYS",
            "HV": "TRANSAVIA AIRLINES"
        }
    }
}

const bar_val_children = {
    "meta": {
        "count": 20,
        "links": {
            "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=BRI&destinationLocationCode=VLC&departureDate=2023-11-27&returnDate=2023-12-03&adults=2&currencyCode=EUR&maxPrice=3000&children=1&infants=1&max=20"
        }
    },
    "data": [
        {
            "type": "flight-offer",
            "id": "1",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-12-01",
            "lastTicketingDateTime": "2023-12-01",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT9H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T10:45:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-12-04T12:10:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1648",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "9",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "LIN",
                                "terminal": null,
                                "at": "2023-12-04T14:05:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-04T16:00:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1624",
                            "aircraft": {
                                "code": "E7W"
                            },
                            "operating": null,
                            "duration": "PT1H55M",
                            "id": "10",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-04T17:30:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-04T19:55:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "2659",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H25M",
                            "id": "11",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H25M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T10:30:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-10T13:10:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "2621",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H40M",
                            "id": "33",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-10T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-10T19:10:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1607",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "34",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-10T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-10T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "35",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "362.60",
                "base": "189.00",
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
                "grandTotal": "362.60"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "362.60",
                        "base": "189.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "9",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "10",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "11",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "33",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "34",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "35",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
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
            "lastTicketingDate": "2023-12-01",
            "lastTicketingDateTime": "2023-12-01",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT9H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T10:45:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-12-04T12:10:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1648",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "9",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "LIN",
                                "terminal": null,
                                "at": "2023-12-04T14:05:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-04T16:00:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1624",
                            "aircraft": {
                                "code": "E7W"
                            },
                            "operating": null,
                            "duration": "PT1H55M",
                            "id": "10",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-04T17:30:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-04T19:55:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "2659",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H25M",
                            "id": "11",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T06:00:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-10T08:40:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1502",
                            "aircraft": {
                                "code": "E90"
                            },
                            "operating": null,
                            "duration": "PT2H40M",
                            "id": "36",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-10T09:35:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-10T11:50:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "120",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "37",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-10T17:25:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-10T18:30:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1607",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "38",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "362.60",
                "base": "189.00",
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
                "grandTotal": "362.60"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "362.60",
                        "base": "189.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "9",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "10",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "11",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "36",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "37",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "38",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
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
            "id": "3",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-12-04",
            "lastTicketingDateTime": "2023-12-04",
            "numberOfBookableSeats": 1,
            "itineraries": [
                {
                    "duration": "PT26H",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T09:20:00"
                            },
                            "arrival": {
                                "iataCode": "IST",
                                "at": "2023-12-04T13:25:00"
                            },
                            "carrierCode": "TK",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/TK.png",
                            "number": "1446",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "TK"
                            },
                            "duration": "PT2H5M",
                            "id": "7",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "IST",
                                "terminal": null,
                                "at": "2023-12-05T09:20:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-05T11:20:00"
                            },
                            "carrierCode": "TK",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/TK.png",
                            "number": "1301",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "TK"
                            },
                            "duration": "PT4H",
                            "id": "8",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT6H55M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T12:10:00"
                            },
                            "arrival": {
                                "iataCode": "IST",
                                "at": "2023-12-10T18:00:00"
                            },
                            "carrierCode": "TK",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/TK.png",
                            "number": "1302",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "TK"
                            },
                            "duration": "PT3H50M",
                            "id": "39",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "IST",
                                "terminal": null,
                                "at": "2023-12-10T19:10:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-10T19:05:00"
                            },
                            "carrierCode": "TK",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/TK.png",
                            "number": "1465",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "TK"
                            },
                            "duration": "PT1H55M",
                            "id": "40",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "366.71",
                "base": "100.00",
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
                "grandTotal": "366.71"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "TK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "366.71",
                        "base": "100.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "7",
                            "cabin": "ECONOMY",
                            "fareBasis": "LN2XPB",
                            "brandedFare": "PS",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "8",
                            "cabin": "ECONOMY",
                            "fareBasis": "LN2XPB",
                            "brandedFare": "PS",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "39",
                            "cabin": "ECONOMY",
                            "fareBasis": "VN3XPB",
                            "brandedFare": "PS",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "40",
                            "cabin": "ECONOMY",
                            "fareBasis": "VN3XPB",
                            "brandedFare": "PS",
                            "clazz": null,
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
            "lastTicketingDate": "2023-12-04",
            "lastTicketingDateTime": "2023-12-04",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT21H",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T19:15:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-04T20:25:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1606",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H10M",
                            "id": "1",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-04T21:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "at": "2023-12-04T23:59:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "64",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H34M",
                            "id": "2",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-05T15:15:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-05T16:15:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "2403",
                            "aircraft": {
                                "code": "7S8"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "3",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT22H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T12:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "at": "2023-12-10T13:25:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "2417",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "28",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-11T05:50:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-11T08:15:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "59",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H25M",
                            "id": "29",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-11T09:30:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-11T10:35:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1617",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "30",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "398.09",
                "base": "182.00",
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
                "grandTotal": "398.09"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
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
                        "total": "398.09",
                        "base": "182.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "ECONOMY",
                            "fareBasis": "WRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "2",
                            "cabin": "ECONOMY",
                            "fareBasis": "WRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "3",
                            "cabin": "ECONOMY",
                            "fareBasis": "WRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "28",
                            "cabin": "ECONOMY",
                            "fareBasis": "SRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "29",
                            "cabin": "ECONOMY",
                            "fareBasis": "SRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "30",
                            "cabin": "ECONOMY",
                            "fareBasis": "SRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "clazz": null,
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
            "lastTicketingDate": "2023-12-01",
            "lastTicketingDateTime": "2023-12-01",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT10H45M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T09:10:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-12-04T10:35:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1638",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "17",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "LIN",
                                "terminal": null,
                                "at": "2023-12-04T11:25:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-04T13:15:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1620",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT1H50M",
                            "id": "18",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-04T17:30:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-04T19:55:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "2659",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H25M",
                            "id": "19",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H25M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T10:30:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-10T13:10:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "2621",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H40M",
                            "id": "33",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-10T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-10T19:10:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1607",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "34",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-10T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-10T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "35",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "431.60",
                "base": "243.00",
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
                "grandTotal": "431.60"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "431.60",
                        "base": "243.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "17",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "18",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "19",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "33",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "34",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "35",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
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
            "lastTicketingDate": "2023-12-01",
            "lastTicketingDateTime": "2023-12-01",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT10H45M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T09:10:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-12-04T10:35:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1638",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "20",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "LIN",
                                "terminal": null,
                                "at": "2023-12-04T14:05:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-04T16:00:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1624",
                            "aircraft": {
                                "code": "E7W"
                            },
                            "operating": null,
                            "duration": "PT1H55M",
                            "id": "21",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-04T17:30:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-04T19:55:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "2659",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H25M",
                            "id": "22",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H25M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T10:30:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-10T13:10:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "2621",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H40M",
                            "id": "33",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-10T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-10T19:10:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1607",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "34",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-10T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-10T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "35",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "431.60",
                "base": "243.00",
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
                "grandTotal": "431.60"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "431.60",
                        "base": "243.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "20",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "21",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "22",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "33",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "34",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "35",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
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
            "id": "7",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-12-01",
            "lastTicketingDateTime": "2023-12-01",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT10H45M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T09:10:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-12-04T10:35:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1638",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "17",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "LIN",
                                "terminal": null,
                                "at": "2023-12-04T11:25:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-04T13:15:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1620",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT1H50M",
                            "id": "18",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-04T17:30:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-04T19:55:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "2659",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H25M",
                            "id": "19",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T06:00:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-10T08:40:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1502",
                            "aircraft": {
                                "code": "E90"
                            },
                            "operating": null,
                            "duration": "PT2H40M",
                            "id": "36",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-10T09:35:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-10T11:50:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "120",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "37",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-10T17:25:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-10T18:30:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1607",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "38",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "431.60",
                "base": "243.00",
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
                "grandTotal": "431.60"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "431.60",
                        "base": "243.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "17",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "18",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "19",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "36",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "37",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "38",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
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
            "id": "8",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-12-01",
            "lastTicketingDateTime": "2023-12-01",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT10H45M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T09:10:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-12-04T10:35:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1638",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "20",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "LIN",
                                "terminal": null,
                                "at": "2023-12-04T14:05:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-04T16:00:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1624",
                            "aircraft": {
                                "code": "E7W"
                            },
                            "operating": null,
                            "duration": "PT1H55M",
                            "id": "21",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-04T17:30:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-04T19:55:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "2659",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H25M",
                            "id": "22",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T06:00:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-10T08:40:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1502",
                            "aircraft": {
                                "code": "E90"
                            },
                            "operating": null,
                            "duration": "PT2H40M",
                            "id": "36",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-10T09:35:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-10T11:50:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "120",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "37",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-10T17:25:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-10T18:30:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1607",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "38",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "431.60",
                "base": "243.00",
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
                "grandTotal": "431.60"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "431.60",
                        "base": "243.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "20",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "21",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "22",
                            "cabin": "ECONOMY",
                            "fareBasis": "HYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "36",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "37",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "38",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
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
            "id": "9",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-12-04",
            "lastTicketingDateTime": "2023-12-04",
            "numberOfBookableSeats": 1,
            "itineraries": [
                {
                    "duration": "PT26H",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T09:20:00"
                            },
                            "arrival": {
                                "iataCode": "IST",
                                "at": "2023-12-04T13:25:00"
                            },
                            "carrierCode": "TK",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/TK.png",
                            "number": "1446",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "TK"
                            },
                            "duration": "PT2H5M",
                            "id": "7",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "IST",
                                "terminal": null,
                                "at": "2023-12-05T09:20:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-05T11:20:00"
                            },
                            "carrierCode": "TK",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/TK.png",
                            "number": "1301",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "TK"
                            },
                            "duration": "PT4H",
                            "id": "8",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT20H20M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T12:10:00"
                            },
                            "arrival": {
                                "iataCode": "IST",
                                "at": "2023-12-10T18:00:00"
                            },
                            "carrierCode": "TK",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/TK.png",
                            "number": "1302",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "TK"
                            },
                            "duration": "PT3H50M",
                            "id": "31",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "IST",
                                "terminal": null,
                                "at": "2023-12-11T08:30:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-11T08:30:00"
                            },
                            "carrierCode": "TK",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/TK.png",
                            "number": "1445",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "TK"
                            },
                            "duration": "PT2H",
                            "id": "32",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "466.71",
                "base": "200.00",
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
                "grandTotal": "466.71"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "TK"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "466.71",
                        "base": "200.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "7",
                            "cabin": "ECONOMY",
                            "fareBasis": "LN2XPB",
                            "brandedFare": "PS",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "8",
                            "cabin": "ECONOMY",
                            "fareBasis": "LN2XPB",
                            "brandedFare": "PS",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "31",
                            "cabin": "ECONOMY",
                            "fareBasis": "EN2PX",
                            "brandedFare": "RS",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "32",
                            "cabin": "ECONOMY",
                            "fareBasis": "EN2PX",
                            "brandedFare": "RS",
                            "clazz": null,
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
            "id": "10",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-12-02",
            "lastTicketingDateTime": "2023-12-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT4H50M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T12:05:00"
                            },
                            "arrival": {
                                "iataCode": "MUC",
                                "at": "2023-12-04T13:45:00"
                            },
                            "carrierCode": "EN",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/EN.png",
                            "number": "8219",
                            "aircraft": {
                                "code": "E95"
                            },
                            "operating": {
                                "carrierCode": "EN"
                            },
                            "duration": "PT1H40M",
                            "id": "23",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MUC",
                                "terminal": "2",
                                "at": "2023-12-04T14:30:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-04T16:55:00"
                            },
                            "carrierCode": "LH",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/LH.png",
                            "number": "1842",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "LH"
                            },
                            "duration": "PT2H25M",
                            "id": "24",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT9H55M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T13:00:00"
                            },
                            "arrival": {
                                "iataCode": "BRU",
                                "at": "2023-12-10T15:20:00"
                            },
                            "carrierCode": "SN",
                            "urlCarrier": null,
                            "number": "3752",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "SN"
                            },
                            "duration": "PT2H20M",
                            "id": "41",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "BRU",
                                "terminal": null,
                                "at": "2023-12-10T18:20:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-10T20:25:00"
                            },
                            "carrierCode": "SN",
                            "urlCarrier": null,
                            "number": "3183",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "SN"
                            },
                            "duration": "PT2H5M",
                            "id": "42",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-10T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-10T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "43",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "473.44",
                "base": "244.00",
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
                "grandTotal": "473.44"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "LH"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "473.44",
                        "base": "244.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "23",
                            "cabin": "ECONOMY",
                            "fareBasis": "PETBUZE3",
                            "brandedFare": "BUSINESS",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "24",
                            "cabin": "BUSINESS",
                            "fareBasis": "PETBUZE3",
                            "brandedFare": "BUSINESS",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "41",
                            "cabin": "ECONOMY",
                            "fareBasis": "LETCLSE3",
                            "brandedFare": "CLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "42",
                            "cabin": "ECONOMY",
                            "fareBasis": "LETCLSE3",
                            "brandedFare": "CLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "LETCLSE3",
                            "brandedFare": "CLASSIC",
                            "clazz": null,
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
            "id": "11",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-12-01",
            "lastTicketingDateTime": "2023-12-01",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT10H50M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T12:05:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-12-04T13:30:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1636",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "25",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MXP",
                                "terminal": "1",
                                "at": "2023-12-04T18:00:00"
                            },
                            "arrival": {
                                "iataCode": "CDG",
                                "at": "2023-12-04T19:35:00"
                            },
                            "carrierCode": "AF",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AF.png",
                            "number": "1731",
                            "aircraft": {
                                "code": "223"
                            },
                            "operating": {
                                "carrierCode": "AF"
                            },
                            "duration": "PT1H35M",
                            "id": "26",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "CDG",
                                "terminal": "2G",
                                "at": "2023-12-04T20:50:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-04T22:55:00"
                            },
                            "carrierCode": "AF",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AF.png",
                            "number": "1492",
                            "aircraft": {
                                "code": "E90"
                            },
                            "operating": {
                                "carrierCode": "A5"
                            },
                            "duration": "PT2H5M",
                            "id": "27",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H25M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T10:30:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-10T13:10:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "2621",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H40M",
                            "id": "33",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-10T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-10T19:10:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1607",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "34",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-10T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-10T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "35",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "477.71",
                "base": "295.00",
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
                "grandTotal": "477.71"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "477.71",
                        "base": "295.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "25",
                            "cabin": "ECONOMY",
                            "fareBasis": "LYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "26",
                            "cabin": "ECONOMY",
                            "fareBasis": "LYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "27",
                            "cabin": "ECONOMY",
                            "fareBasis": "LYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "33",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "34",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "35",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
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
            "id": "12",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-12-01",
            "lastTicketingDateTime": "2023-12-01",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT10H50M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T12:05:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-12-04T13:30:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1636",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "25",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MXP",
                                "terminal": "1",
                                "at": "2023-12-04T18:00:00"
                            },
                            "arrival": {
                                "iataCode": "CDG",
                                "at": "2023-12-04T19:35:00"
                            },
                            "carrierCode": "AF",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AF.png",
                            "number": "1731",
                            "aircraft": {
                                "code": "223"
                            },
                            "operating": {
                                "carrierCode": "AF"
                            },
                            "duration": "PT1H35M",
                            "id": "26",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "CDG",
                                "terminal": "2G",
                                "at": "2023-12-04T20:50:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-04T22:55:00"
                            },
                            "carrierCode": "AF",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AF.png",
                            "number": "1492",
                            "aircraft": {
                                "code": "E90"
                            },
                            "operating": {
                                "carrierCode": "A5"
                            },
                            "duration": "PT2H5M",
                            "id": "27",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T06:00:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-10T08:40:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1502",
                            "aircraft": {
                                "code": "E90"
                            },
                            "operating": null,
                            "duration": "PT2H40M",
                            "id": "36",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-10T09:35:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-10T11:50:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "120",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "37",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-10T17:25:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-10T18:30:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1607",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "38",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "477.71",
                "base": "295.00",
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
                "grandTotal": "477.71"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "477.71",
                        "base": "295.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "25",
                            "cabin": "ECONOMY",
                            "fareBasis": "LYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "26",
                            "cabin": "ECONOMY",
                            "fareBasis": "LYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "27",
                            "cabin": "ECONOMY",
                            "fareBasis": "LYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "36",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "37",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "38",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
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
            "id": "13",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-12-01",
            "lastTicketingDateTime": "2023-12-01",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT12H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T10:45:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-12-04T12:10:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1648",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "12",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MXP",
                                "terminal": "1",
                                "at": "2023-12-04T18:00:00"
                            },
                            "arrival": {
                                "iataCode": "CDG",
                                "at": "2023-12-04T19:35:00"
                            },
                            "carrierCode": "AF",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AF.png",
                            "number": "1731",
                            "aircraft": {
                                "code": "223"
                            },
                            "operating": {
                                "carrierCode": "AF"
                            },
                            "duration": "PT1H35M",
                            "id": "13",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "CDG",
                                "terminal": "2G",
                                "at": "2023-12-04T20:50:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-04T22:55:00"
                            },
                            "carrierCode": "AF",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AF.png",
                            "number": "1492",
                            "aircraft": {
                                "code": "E90"
                            },
                            "operating": {
                                "carrierCode": "A5"
                            },
                            "duration": "PT2H5M",
                            "id": "14",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H25M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T10:30:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-10T13:10:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "2621",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "HV"
                            },
                            "duration": "PT2H40M",
                            "id": "33",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-10T16:55:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-10T19:10:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1607",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "34",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-10T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-10T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "35",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "477.71",
                "base": "295.00",
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
                "grandTotal": "477.71"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "477.71",
                        "base": "295.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "12",
                            "cabin": "ECONOMY",
                            "fareBasis": "LYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "13",
                            "cabin": "ECONOMY",
                            "fareBasis": "LYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "14",
                            "cabin": "ECONOMY",
                            "fareBasis": "LYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "33",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "34",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "35",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
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
            "id": "14",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-12-01",
            "lastTicketingDateTime": "2023-12-01",
            "numberOfBookableSeats": 3,
            "itineraries": [
                {
                    "duration": "PT12H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T10:45:00"
                            },
                            "arrival": {
                                "iataCode": "LIN",
                                "at": "2023-12-04T12:10:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1648",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H25M",
                            "id": "12",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MXP",
                                "terminal": "1",
                                "at": "2023-12-04T18:00:00"
                            },
                            "arrival": {
                                "iataCode": "CDG",
                                "at": "2023-12-04T19:35:00"
                            },
                            "carrierCode": "AF",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AF.png",
                            "number": "1731",
                            "aircraft": {
                                "code": "223"
                            },
                            "operating": {
                                "carrierCode": "AF"
                            },
                            "duration": "PT1H35M",
                            "id": "13",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "CDG",
                                "terminal": "2G",
                                "at": "2023-12-04T20:50:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-04T22:55:00"
                            },
                            "carrierCode": "AF",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AF.png",
                            "number": "1492",
                            "aircraft": {
                                "code": "E90"
                            },
                            "operating": {
                                "carrierCode": "A5"
                            },
                            "duration": "PT2H5M",
                            "id": "14",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H30M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T06:00:00"
                            },
                            "arrival": {
                                "iataCode": "AMS",
                                "at": "2023-12-10T08:40:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "1502",
                            "aircraft": {
                                "code": "E90"
                            },
                            "operating": null,
                            "duration": "PT2H40M",
                            "id": "36",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AMS",
                                "terminal": null,
                                "at": "2023-12-10T09:35:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-10T11:50:00"
                            },
                            "carrierCode": "KL",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/KL.png",
                            "number": "120",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "KL"
                            },
                            "duration": "PT2H15M",
                            "id": "37",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-10T17:25:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-10T18:30:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1607",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "38",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "477.71",
                "base": "295.00",
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
                "grandTotal": "477.71"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AF"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "477.71",
                        "base": "295.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "12",
                            "cabin": "ECONOMY",
                            "fareBasis": "LYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "13",
                            "cabin": "ECONOMY",
                            "fareBasis": "LYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "14",
                            "cabin": "ECONOMY",
                            "fareBasis": "LYS0ACSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "36",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "37",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "38",
                            "cabin": "ECONOMY",
                            "fareBasis": "RYS32CSA",
                            "brandedFare": "STANDARD",
                            "clazz": null,
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
            "id": "15",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-12-04",
            "lastTicketingDateTime": "2023-12-04",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT21H",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T19:15:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-04T20:25:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1606",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H10M",
                            "id": "4",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-05T08:10:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "at": "2023-12-05T10:45:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "58",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H35M",
                            "id": "5",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-05T15:15:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-05T16:15:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "2403",
                            "aircraft": {
                                "code": "7S8"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "6",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT22H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T12:25:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "at": "2023-12-10T13:25:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "2417",
                            "aircraft": {
                                "code": "73H"
                            },
                            "operating": {
                                "carrierCode": "UX"
                            },
                            "duration": "PT1H",
                            "id": "28",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2023-12-11T05:50:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-11T08:15:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "59",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT2H25M",
                            "id": "29",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-11T09:30:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-11T10:35:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1617",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "30",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "478.58",
                "base": "247.00",
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
                "grandTotal": "478.58"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
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
                        "total": "478.58",
                        "base": "247.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "4",
                            "cabin": "ECONOMY",
                            "fareBasis": "NRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "5",
                            "cabin": "ECONOMY",
                            "fareBasis": "NRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "NRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "28",
                            "cabin": "ECONOMY",
                            "fareBasis": "SRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "29",
                            "cabin": "ECONOMY",
                            "fareBasis": "SRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "30",
                            "cabin": "ECONOMY",
                            "fareBasis": "SRCL8C4",
                            "brandedFare": "ECOCLASSIC",
                            "clazz": null,
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
            "id": "16",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-12-02",
            "lastTicketingDateTime": "2023-12-02",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT23H20M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BRI",
                                "terminal": null,
                                "at": "2023-12-04T12:05:00"
                            },
                            "arrival": {
                                "iataCode": "MUC",
                                "at": "2023-12-04T13:45:00"
                            },
                            "carrierCode": "EN",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/EN.png",
                            "number": "8219",
                            "aircraft": {
                                "code": "E95"
                            },
                            "operating": {
                                "carrierCode": "EN"
                            },
                            "duration": "PT1H40M",
                            "id": "15",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "MUC",
                                "terminal": "2",
                                "at": "2023-12-05T09:00:00"
                            },
                            "arrival": {
                                "iataCode": "VLC",
                                "at": "2023-12-05T11:25:00"
                            },
                            "carrierCode": "LH",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/LH.png",
                            "number": "1842",
                            "aircraft": {
                                "code": "32A"
                            },
                            "operating": {
                                "carrierCode": "4Y"
                            },
                            "duration": "PT2H25M",
                            "id": "16",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT9H55M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "VLC",
                                "terminal": null,
                                "at": "2023-12-10T13:00:00"
                            },
                            "arrival": {
                                "iataCode": "BRU",
                                "at": "2023-12-10T15:20:00"
                            },
                            "carrierCode": "SN",
                            "urlCarrier": null,
                            "number": "3752",
                            "aircraft": {
                                "code": "319"
                            },
                            "operating": {
                                "carrierCode": "SN"
                            },
                            "duration": "PT2H20M",
                            "id": "41",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "BRU",
                                "terminal": null,
                                "at": "2023-12-10T18:20:00"
                            },
                            "arrival": {
                                "iataCode": "FCO",
                                "at": "2023-12-10T20:25:00"
                            },
                            "carrierCode": "SN",
                            "urlCarrier": null,
                            "number": "3183",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "SN"
                            },
                            "duration": "PT2H5M",
                            "id": "42",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "FCO",
                                "terminal": "1",
                                "at": "2023-12-10T21:50:00"
                            },
                            "arrival": {
                                "iataCode": "BRI",
                                "at": "2023-12-10T22:55:00"
                            },
                            "carrierCode": "AZ",
                            "urlCarrier": "https://r-xx.bstatic.com/data/airlines_logo/AZ.png",
                            "number": "1603",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "AZ"
                            },
                            "duration": "PT1H5M",
                            "id": "43",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "493.26",
                "base": "244.00",
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
                "grandTotal": "493.26"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "LH"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "493.26",
                        "base": "244.00",
                        "fees": null,
                        "grandTotal": null
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "15",
                            "cabin": "ECONOMY",
                            "fareBasis": "PETBUZE3",
                            "brandedFare": "BUSINESS",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "16",
                            "cabin": "BUSINESS",
                            "fareBasis": "PETBUZE3",
                            "brandedFare": "BUSINESS",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "41",
                            "cabin": "ECONOMY",
                            "fareBasis": "LETCLSE3",
                            "brandedFare": "CLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "42",
                            "cabin": "ECONOMY",
                            "fareBasis": "LETCLSE3",
                            "brandedFare": "CLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "43",
                            "cabin": "ECONOMY",
                            "fareBasis": "LETCLSE3",
                            "brandedFare": "CLASSIC",
                            "clazz": null,
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "dictionaries": {
        "locations": {
            "LIN": {
                "cityCode": "MIL",
                "countryCode": "IT"
            },
            "MAD": {
                "cityCode": "MAD",
                "countryCode": "ES"
            },
            "FCO": {
                "cityCode": "ROM",
                "countryCode": "IT"
            },
            "MXP": {
                "cityCode": "MIL",
                "countryCode": "IT"
            },
            "AMS": {
                "cityCode": "AMS",
                "countryCode": "NL"
            },
            "BRI": {
                "cityCode": "BRI",
                "countryCode": "IT"
            },
            "VLC": {
                "cityCode": "VLC",
                "countryCode": "ES"
            }
        },
        "aircraft": {
            "319": "AIRBUS A319",
            "32S": "AIRBUS INDUSTRIE A318/A319/A320/A321",
            "73H": "BOEING 737-800 (WINGLETS)",
            "E90": "EMBRAER 190",
            "73J": "BOEING 737-900"
        },
        "currencies": {
            "EUR": "EURO"
        },
        "carriers": {
            "KL": "KLM ROYAL DUTCH AIRLINES",
            "UX": "AIR EUROPA",
            "AZ": "ITA AIRWAYS",
            "HV": "TRANSAVIA AIRLINES"
        }
    }
}
export { bar_mil, rom_val, bar_val, bar_val_children };
