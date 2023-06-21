class CashierSim {
    MOCK_GROCERY_ITEMS = [
        {
            "name": "item1",
            "price": "$1.00"
        },
        {
            "name": "item2",
            "price": "$1.50"
        },
        {
            "name": "item3",
            "price": "$56.99"
        }
    ]

    constructor() {

    }

    seedGroceryItemsDb() {
        window.localStorage.setItem("mock_grocery_items", JSON.stringify(this.MOCK_GROCERY_ITEMS));
    }

    getGroceryItems() {
        return JSON.parse(window.localStorage.getItem("mock_grocery_items"));
    }
}

class Main {
    constructor() {
        const cashierSim = new CashierSim();
        cashierSim.seedGroceryItemsDb();
        console.log(cashierSim.getGroceryItems());
    }
}

// TODO: Keep for now, but figure out better way to exec the game loop and keep logic out of class constructors.
new Main();

/* MVP (no graphics. bare-bones HTML. no scores or manager module. only pass/fail states applied.)
    1. UI loads items.json into local storage. (use some mock items for MVP.)
    2. NPCs are generated w/ random spending behavior and list of items to purchase. (use 1 bahavior for now)
    3. NOTE: No server backend, no requests. We need state and a gameloop.
    4. Player state is set to PLAYER_REQUEST_PAYMENT
    5. Player is presented first NPC in queue's item list with prices.
    6. Player is prompted to request a payment amount.
    7. Player submits their payment request and enters into PLAYER_AWAITING_PAYMENT state.
    8. NPC generates payment based on behavior trees. Player receives payment object, which is simply a wallet obj?
    9. Player receives cash obj /w denoms. and enters PLAYER_RECEIVED_PAYMENT state.S
    10. Player cash register is populated with customer payment.
    11. Player is now prompted to return correct change to customer.
    12. Player is presented with sliders and input fields that represent a cash obj.
    13. Player fills out cash obj and hits submit.
    14. Player now enters PLAYER_CHANGE_SUBMITTED state.
    15. Finally, for MVP, check against a correct value and pass/fail then end the game loop.
*/
