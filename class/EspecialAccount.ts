import { DioAccount } from "./DioAccount";

export class EspecialAccount extends DioAccount {
 
constructor(name: string, accountNumber: number){ 
super(name, accountNumber);
}

deposit = (amount: number): void => { 
    if(this.validateStatus() && amount > 0) { 
        let balance = this.getBalance();
        let addedBalance = balance + amount + 10;
        this.setBalance(addedBalance);
        console.log(`Você depositou ${amount}R$ e ganhou mais 10R$`);
    }else { 
        throw new Error();
    }
}


}