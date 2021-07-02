Vue.config.devtools = true;

new Vue(
    {
        el: '#app',

        // -----------------------------
        data: {
            selectedContact: 0,
            newMessage: '',
            searchContact: '',
            contacts: [
                {
                    name: 'Michele',
                    // avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            hideShowClass: 'hidden'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            hideShowClass: 'hidden'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            hideShowClass: 'hidden'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    // avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            hideShowClass: 'hidden'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            hideShowClass: 'hidden'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            hideShowClass: 'hidden'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    // avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            hideShowClass: 'hidden'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            hideShowClass: 'hidden'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            hideShowClass: 'hidden'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    // avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            hideShowClass: 'hidden'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            hideShowClass: 'hidden'
                        }
                    ],
                },
                {
                    name: 'Pippo',
                    // avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            hideShowClass: 'hidden'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            hideShowClass: 'hidden'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            hideShowClass: 'hidden'
                        }
                    ],
                },
                {
                    name: 'Lucia',
                    // avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            hideShowClass: 'hidden'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            hideShowClass: 'hidden'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            hideShowClass: 'hidden'
                        }
                    ],
                },
                {
                    name: 'Mario',
                    // avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            hideShowClass: 'hidden'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            hideShowClass: 'hidden'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            hideShowClass: 'hidden'
                        }
                    ],
                },
                {
                    name: 'Luigi',
                    // avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            hideShowClass: 'hidden'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            hideShowClass: 'hidden'
                        }
                    ],
                },
            ]

        }, //fine data

        methods: {

            // Aggiunto img avatar 
            pathAvatar: function (index) {
                return `./img/avatar_${index + 1}.jpg`
            },

            //selezione contatto per mostrare chat
            userSelected: function (index) {
                this.selectedContact = index
            },

            //Aggiunge un messaggio
            addMessage: function (index) {
                this.contacts[index].messages.push({
                    date: this.getCurrentDateTime(),
                    text: this.newMessage,
                    status: 'sent',
                    hideShowClass: 'hidden'
                })
                this.newMessage = '';
            },

            //Aggiunta risposta automatica
            replyMessage: function (index) {
                setTimeout(() => {
                    this.contacts[index].messages.push({
                        date: this.getCurrentDateTime(),
                        text: 'ok',
                        status: 'received',
                        hideShowClass: 'hidden'
                    })
                }, 1000)
            },

            //Creo filtro per i contatti
            filterContacts: function () {
                this.contacts.forEach((contact) => {
                    let contact_name = contact.name.toLowerCase();

                    if (contact_name.includes(this.searchContact.toLowerCase())) {
                        contact.visible = true;
                    } else {
                        contact.visible = false;
                    }
                });
            },

            //il contatto selezionato ha un background piu scuro
            currentContact: function (index) {
                if (this.selectedContact === index) {
                    return 'selected-contact'
                } else {
                    return '';
                }
            },

            //Genero la data e ora attuale
            getCurrentDateTime: function () {
                const dateTimeNow = dayjs();
                return dateTimeNow.format('DD/MM/YYYY HH:mm:ss')
            },

            //Eliminare messaggio
            deleteMessage: function (index) {
                this.contacts[this.selectedContact].messages.splice(index, 1)
            },

            //Funzione per mostrare il menu del messaggio
            showElement: function (index) {
                if (this.contacts[this.selectedContact].messages[index].hideShowClass === 'hidden') {
                    this.contacts[this.selectedContact].messages[index].hideShowClass = 'show';
                } else {
                    this.contacts[this.selectedContact].messages[index].hideShowClass = 'hidden';
                }
            },
        }
    }
)
