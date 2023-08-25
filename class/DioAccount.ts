export abstract class DioAccount { 
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) { 
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = (): string => { 
        return this.name
    }

    getBalance = (): number => { 
        return this.balance;
    }

    setBalance = (amount: number): void => { 
        this.balance = amount;
    }

    deposit = (amount: number): void => { 
        if(this.validateStatus() && amount > 0) { 
            this.balance = this.balance + amount;
            console.log(`Você depositou ${amount}R$`);
            console.log(`Seu novo saldo é de ${this.balance}R$`);
        }else { 

            throw new Error('Esse valor é inválido');
        }
    };

    withdraw = (amount: number): void => { 
        if(this.validateStatus() && amount > 0 && this.balance > amount) { 
            this.balance = this.balance - amount;
            console.log(`Você sacou ${amount}R$`);
            console.log(`Seu novo saldo é de ${this.balance}R$`);
        }else { 

            throw new Error('Esse valor é inválido');
        }
        
    };

    validateStatus = (): boolean => { 
        if(this.status) { 
            return this.status;
        }

        throw new Error('Conta inválida');
    }

}