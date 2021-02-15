(function(global, $) {
    
    const Greetr = (firstName, lastName, language) => {
        return new Greetr.init(firstName, lastName, language);
    }

    let supportedLangs = ['en', 'es']

    const greetings = {
        en: 'Hello',
        es: 'Hola'
    }

    const formalGreetings = {
        en: "Greetings",
        es: "Saludos"
    }

    const logMess = {
        en: "Logged In",
        es: "Inicio sesion"
    }

    Greetr.prototype = {

        fullName() {
            return this.firstName + ' ' + this.lastName;
        },

        validate() {
            if(supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language"
            };
        },

        greeting() {
            return greetings[this.language] + ' ' + this.firstName + '!';

        },

        formalGreeting() {
            return formalGreetings[this.language] + ' ' + this.fullName() + '.';
        },

        greet(formal) {
            let msg;

            if(formal) {
                msg = this.formalGreeting()
            } else  {
                msg = this.greeting()
            }

            if(console) { console.log(msg) }

            return this;
        },

        log() {
            if(console) {
                console.log(logMess[this.language] + ' : ' + this.fullName());
            }
            return this;
        },

        setLang(newLanguage) {
            this.language = newLanguage;
            this.validate();
            return this;
        },

        HTMLGreeting(selector, formal) {
            if(!$) { throw 'jQuery not loaded'; }
            if(!selector) { throw 'missing jQuery selector' }

            let msg ;
            if(formal) {
                msg = this.formalGreeting()
            } else  {
                msg = this.greeting()
            }

            $(selector).html(msg);

            return this;
        }
    };

    Greetr.init = function(firstName, lastName, language) {
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.language = language || 'en';

        this.validate();
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));