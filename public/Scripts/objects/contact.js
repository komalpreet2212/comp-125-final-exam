let objects;
(function(){
    class Contact {
        // your class definition goes here
        constructor(FirstName, LastName, ContactNumber, EmaiAddress){
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.ContactNumber = ContactNumber;
            this.EmailAddress = EmaiAddress;
        }
    }


    objects.Contact = Contact;

})(objects || (objects = {}));