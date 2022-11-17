using aula04.models;

ContaCorrente c1 = new ContaCorrente();
c1.Nome = "Leonardo";
c1.Agencia = 1234;
c1.Numero = 12654;

c1.Depositar(50);
c1.ExibirSaldo();
c1.Depositar(500);
c1.ExibirSaldo();
c1.Sacar(100);
c1.ExibirSaldo();
c1.Sacar(1000);
c1.ExibirSaldo();

c1.Tarifa = 3.50;
c1.Senha = "ABC";
//c1.ExibirResumoConta();

// ContaPoupanca c2 = new ContaPoupanca();
// c2.Nome = "Eduardo";
// c2.Agencia = 545454;
// c2.Numero = 6563;
// c2.Juros = 2.50;
// c2.Senha = "ABC";
// c2.ExibirResumoConta();
