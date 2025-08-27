    // 1. Singleton class banate hain
class Singleton{
    constuctor(){
        // Agar pehle se instance bana hua hai to wahi return karo
        if(Singleton.instance){
            return Singleton.instance;
        }
         // Naya instance create karo
        this.messageText = "Hello Singleton!";
        Singleton.instance = this;  // Instance ko static property mein store karo
  }
    // 2. Message method jo string return kare
    message(){
        return this.messageText;
    }
    // 3. getInstance method jo singleton instance return kare
    static getInstance() {
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
    // 4. Default export
export default Singleton;