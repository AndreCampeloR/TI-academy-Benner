using aula02.models;

ContaCorrente cc = new ContaCorrente(50);
cc.Numero = 123;
cc.ExibirSaldo();

cc.Sacar(20);

cc.ExibirSaldo();
