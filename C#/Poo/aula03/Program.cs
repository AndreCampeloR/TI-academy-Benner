using aula03.models;

Console.WriteLine("Conta Corrente:\n");
ContaCorrente contaC = new ContaCorrente();

contaC.Nome = "Leonardo";
contaC.Agencia = 123;
contaC.Numero = 9999;
contaC.Saldo = 500;
contaC.Tarifa = 15;
contaC.Depositar(100);
contaC.ExibirResumoConta();

Console.WriteLine("Conta Poupança:\n");
ContaPoupanca contaP = new ContaPoupanca();
contaP.Nome = "Eduardo";
contaP.Agencia = 456;
contaP.Numero = 1111;
contaP.Saldo = 100;
contaP.Juros = 2;
contaP.Depositar(100);
contaP.ExibirResumoConta();