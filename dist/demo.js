const contact = {
    id: 1,
    name: "John Doe",
    status: "active",
    address: {
        street: "123 Main Street",
        province: "ON",
        postalCode: "L1V 1A1"
    }
};
function getValue(source, propertyName) {
    return source[propertyName];
}
getValue(contact, "name"); // OK
function handleEvent(eventName, handler) {
    if (eventName === "statusChanged") {
        handler;
    }
}
handleEvent("statusChanged", (evt = { contactId: 1, oldStatus: "active", newStatus: "inactive" }) => {
    console.log(evt.contactId);
    console.log(evt.oldStatus);
    console.log(evt.newStatus);
    if (evt.oldStatus === "active") {
        contact.status = evt.newStatus;
    }
}); // OK
