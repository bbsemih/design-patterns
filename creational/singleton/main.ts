/*
Make the default constructor private, to prevent other objects from using
the new operator with the Singleton class.

Create a static creation method that acts as a constructor. Under the hood, this method calls the
private constructor to create an object and saves it in a static field. 
All following calls to this method return the cached object.


The Singleton pattern disables all other means of creating objects of a class except for the special creation method. 
//This method either creates a new object or returns an existing one if it has already been created.
*/

class Singleton {
    private static instance: Singleton;

    //This should be always private to prevent direct
    //construction calls with 'new' operator.
    private constructor() {}

    public static getInstance(): Singleton {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public businessLogic() {
        //....
    }
}

function client() {
    const c1 = Singleton.getInstance()
    const c2 = Singleton.getInstance()

    if(c1 == c2) {
        console.log('SINGLETON WORKS');
    } else {
        console.log('SINGLETON SUCKS');
    }
}

client();

