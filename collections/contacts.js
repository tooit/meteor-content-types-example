// Example taken from https://github.com/aldeed/meteor-autoform

Contacts = new Mongo.Collection("contacts");
Contacts.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Your name",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
    message: {
        type: String,
        label: "Message",
        max: 1000
    }
}));

// Be sure to define proper insert security for untrusted code if you've
// removed the insecure package. Call allow/deny or use ongoworks:security.
