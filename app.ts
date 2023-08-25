import { CompanyAccount } from "./class/CompanyAccount";
import { EspecialAccount } from "./class/EspecialAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(111, 'Alex', 1);
const companyAccount: CompanyAccount = new CompanyAccount("Dio Bank resources", 2);
const especialAccount: EspecialAccount = new EspecialAccount("Especial", 32);

console.log("***PeopleAccount***");
console.log(peopleAccount.deposit(10));
console.log(peopleAccount.withdraw(7));
console.log(`Seu novo saldo é de: ${peopleAccount.getBalance()}R$`);
console.log("################");


console.log("***companyAccount***");
console.log(companyAccount.deposit(28));
console.log(companyAccount.getLoan(200));
console.log(`Seu novo saldo é de: ${companyAccount.getBalance()}R$`);
console.log("################");


console.log("***EspecialAccount***");
console.log(especialAccount.deposit(50));
console.log(`Seu novo saldo é de: ${especialAccount.getBalance()}R$`);
console.log(especialAccount.withdraw(7));

