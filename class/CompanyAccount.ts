import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount { 
    constructor(name: string, accontNumber: number){
        super(name, accontNumber);
    }

    getLoan = (amount: number): void => { 
        if(this.validateStatus() && amount > 0) { 
            let addedBalance = this.getBalance() + amount;
            this.setBalance(addedBalance);
            console.log('Empréstimo concedido com sucesso');
        } else { 
            throw new Error();
        }
    }

}