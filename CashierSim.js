const GroceryItem = {
    name: null,
    price: null
}

class GroceryItemDAO {
    constructor(){}

    seedDB() {
        window.localStorage.setItem("mock_grocery_items", JSON.stringify(this.getMockGroceryItems()));
    }

    getMockGroceryItems() {
        const item1 = Object.create(GroceryItem);
        item1.name = "item1";
        item1.price = "$1.00";

        const item2 = Object.create(GroceryItem);
        item2.name = "item2";
        item2.price = "$1.49";

        const item3 = Object.create(GroceryItem);
        item3.name = "item3";
        item3.price = "$56.99";

        return [item1, item2, item3];
    }

    getGroceryItems() {
        return JSON.parse(window.localStorage.getItem("mock_grocery_items"));
    }
}

class Main {
    constructor() {
        const groceryItemDAO = new GroceryItemDAO();
        groceryItemDAO.seedDB();
    }
}

// TODO: Keep for now, but figure out better way to exec the game loop and keep logic out of class constructors.
new Main();

/* MVP (no graphics. bare-bones HTML. no scores or manager module. only pass/fail states applied.)
    [x] UI loads items.json into local storage. (use some mock items for MVP.)
    [ ] NPCs are generated w/ random spending behavior and list of items to purchase. (use 1 bahavior for now)
    [ ] NOTE: No server backend, no requests. We need state and a gameloop.
    [ ] Player state is set to PLAYER_REQUEST_PAYMENT
    [ ] Player is presented first NPC in queue's item list with prices.
    [ ] Player is prompted to request a payment amount.
    [ ] Player submits their payment request and enters into PLAYER_AWAITING_PAYMENT state.
    [ ] NPC generates payment based on behavior trees. Player receives payment object, which is simply a wallet obj?
    [ ] Player receives cash obj /w denoms. and enters PLAYER_RECEIVED_PAYMENT state.S
    [ ] Player cash register is populated with customer payment.
    [ ] Player is now prompted to return correct change to customer.
    [ ] Player is presented with sliders and input fields that represent a cash obj.
    [ ] Player fills out cash obj and hits submit.
    [ ] Player now enters PLAYER_CHANGE_SUBMITTED state.
    [ ] Finally, for MVP, check against a correct value and pass/fail then end the game loop.
*/
