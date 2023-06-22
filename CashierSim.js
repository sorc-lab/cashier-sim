const Cash = {
    hundred: null,
    fifty: null,
    twenty: null,
    ten: null,
    five: null,
    one: null,

    quarter: null,
    dime: null,
    nickle: null,
    penny: null
}

class CustomerNPC {
    MIN_ITEMS = 1;
    MAX_ITEMS = 15;

    items = null;
    itemsTotal = null;
    cash = null;

    constructor() {
        this.setItems();
        this.setItemsTotal();
    }

    setItems() {
        this.items = new GroceryItems().getRandGroceryItems(this.MIN_ITEMS, this.MAX_ITEMS);
    }

    setItemsTotal() {
        this.itemsTotal = new GroceryItems().getGroceryItemsTotal(this.items);
    }

    setCash() {
        // TODO: This is going to be complex later, where each customer will have cash based on an algo
        // NOTE: For now, just always set to a single $100 bill or more depending on items total.
        // NOTE: NPC needs to store the items total. Note, players can cheat by sniffing this.

        // TODO: Need a parsing tool that takes an array of items and totals the prices.
        // NOTE: This can live in the grocery items class.
    }
}

class GroceryItems {
    constructor(){}

    // shuffle arr and return rand num items off top
    getRandGroceryItems(min, max) {
        const groceryItems = new GroceryItems().getAllGroceryItems();
        const shuffled = groceryItems.sort(() => 0.5 - Math.random());

        let randNum = Math.floor(Math.random() * (max - min + 1) + min);

        return shuffled.slice(0, randNum);
    }

    getAllGroceryItems() {
        return JSON.parse(window.localStorage.getItem("grocery_items"));
    }

    getItemPrice(item) {
        const priceStr = item.price;
        // const withoutDots = str.replaceAll('.', '-');
        return priceStr.replaceAll(".", "").substring(1);
    }

    getGroceryItemsTotal(items) {
        // TODO: Use legacy for loop for now and refactor with better patterns
        var total = null; // TODO: can use let here?

        // TODO: Manually verify this gets all the items. list them out.
        for (var i = 0; i < items.length; i++) {
            console.log(items[i].name);
            console.log(items[i].price);
            console.log(this.getItemPrice(items[i].price));
        }
    }
}

class Main {
    constructor() {
        // --------------------------------------------------------------------
        // TODO: Remove after testing. need to save this pattern:
        const cash1 = Object.create(Cash);
        cash1.dime = 15;

        const cash2 = Object.create(Cash);
        cash2.hundred = 2;

        console.log(cash1);
        console.log(cash2);
        // --------------------------------------------------------------------

        const customer1 = new CustomerNPC();
    }
}

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
