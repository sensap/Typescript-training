 

type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
}

interface ContactEvent {
    contactId: number;
}

interface ContactDeletedEvent extends ContactEvent { 
}

interface ContactStatusChangedEvent extends ContactEvent { 
    oldStatus: ContactStatus;
    newStatus: ContactStatus;
}

interface ContactEvents {
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent;
    // ... and so on
}

const contact: Contact = {
    id: 1,
    name: "John Doe",
    status: "active",
    address: {
        street: "123 Main Street",
        province: "ON",
        postalCode: "L1V 1A1"
    }
};
function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}

getValue(contact, "name"); // OK


function handleEvent<T extends keyof ContactEvents>(eventName: T, handler :(evt: ContactEvents[T]) => void) {
    if (eventName === "statusChanged") {
        handler;
    }
}
 
handleEvent("statusChanged", (evt= { contactId: 1, oldStatus: "active", newStatus: "inactive" })  => {
    console.log(evt.contactId);
    console.log(evt.oldStatus);
    console.log(evt.newStatus);
    if (evt.oldStatus === "active") {
      contact.status = evt.newStatus;
    }
}) // OK