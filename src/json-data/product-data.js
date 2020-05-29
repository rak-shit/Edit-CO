import { v4 as uuidv4 } from 'uuid';

const productData = [
    {
        "productId": "100000",
        "productName": "Stockholm Dining Table",
        "qty": 8,
        "unitPrice": 529,
        "index": uuidv4(),
        "notes": "If possible deliver these first"
    },
    {
        "productId": "100041",
        "productName": "Oulu Dining Chair Tangerine(Set of 4 units)",
        "qty": 2,
        "unitPrice": 105,
        "index": uuidv4()
    },
    {
        "productId": "100042",
        "productName": "Oulu Dining Chair Graphite(Set of 4)",
        "qty": 12,
        "unitPrice": 105,
        "index": uuidv4()
    }
]

export default productData
